import type { APIRoute } from 'astro';

const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
const REPO_OWNER = "Vortex-Linux";
const REPOS = [
    "Debian-VM-Base",
    "Arch-VM-Base",
    "ship",
    "website",
    "vortex-installer",
    "Ship-GUI",
    "FreeBSD-VM-Base",
    "Alpine-VM-Base",
    "documentation",
    "live-iso",
    ".github"
];

// Create the repositories query part dynamically
const repoQueries = REPOS.map((repo, index) => `
    repo${index}: repository(owner: "${REPO_OWNER}", name: "${repo}") {
        name
        defaultBranchRef {
            target {
                ... on Commit {
                    history(first: 100) {
                        nodes {
                            author {
                                user {
                                    login
                                    avatarUrl
                                    url
                                }
                            }
                            committedDate
                        }
                    }
                }
            }
        }
    }
`).join('\n');

const query = `{ ${repoQueries} }`;

function isActiveContributor(lastContributionDate: string) {
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    return new Date(lastContributionDate) > threeMonthsAgo;
}

export const GET: APIRoute = async () => {
    try {
        const response = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
        });

        if (!response.ok) {
            throw new Error(`GitHub API responded with status ${response.status}`);
        }

        const data = await response.json();
        const allContributors = new Map();

        Object.values(data.data).forEach((repo: any) => {
            if (!repo?.defaultBranchRef?.target?.history?.nodes) return;
            
            repo.defaultBranchRef.target.history.nodes.forEach((commit: any) => {
                const user = commit.author?.user;
                if (!user) return;

                if (allContributors.has(user.login)) {
                    const existing = allContributors.get(user.login);
                    existing.contributions++;
                    if (!existing.lastContribution || commit.committedDate > existing.lastContribution) {
                        existing.lastContribution = commit.committedDate;
                        existing.isActive = isActiveContributor(commit.committedDate);
                    }
                } else {
                    allContributors.set(user.login, {
                        login: user.login,
                        avatarUrl: user.avatarUrl,
                        url: user.url,
                        contributions: 1,
                        lastContribution: commit.committedDate,
                        isActive: isActiveContributor(commit.committedDate)
                    });
                }
            });
        });

        const contributors = Array.from(allContributors.values());
        const activeContributors = contributors
            .filter(c => c.isActive)
            .sort((a, b) => b.contributions - a.contributions);
        const inactiveContributors = contributors
            .filter(c => !c.isActive)
            .sort((a, b) => b.contributions - a.contributions);

        return new Response(JSON.stringify({ activeContributors, inactiveContributors }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
            }
        });
    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch contributors' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
