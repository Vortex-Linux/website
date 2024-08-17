// src/data/navData.js

export const navData = {
  logo: "/favicon.svg",
  menu: [
    {
      title: "Download",
      href: "/download"
    },
    {
      title: "News",
      href: "/blog"
    },
    {
      title: "Help",
      dropdown: [
        { title: "Discord", href: "/about", icon: "/social-icons/discord.svg" },
        { title: "Forum", href: "/about" },
        { title: "GitHub", href: "/about", icon: "/social-icons/github.svg" },
        { title: "ReadTheDocs", href: "/about", icon: "/social-icons/read-the-docs.svg" }
      ]
    },
    {
      title: "Info",
      dropdown: [
        { title: "About", href: "/about" },
        { title: "Code of Conduct", href: "/about#team" },
        { title: "GitHub", href: "/about", icon: "/social-icons/github.svg" },
        { title: "Mission", href: "/about#mission" },
        { title: "Privacy Policy", href: "/about#team" },
        { title: "ReadTheDocs", href: "/about", icon: "/social-icons/read-the-docs.svg" },
        { title: "Team", href: "/about#team" }
      ]
    },
    {
      title: "Community",
      href: "/blog/get-involved",
      dropdown: [
        { title: "Discord", href: "/about", icon: "/social-icons/discord.svg" },
        { title: "Facebook", href: "/blog/get-involved", icon: "/social-icons/facebook.svg" },
        { title: "Instagram", href: "/blog/get-involved", icon: "/social-icons/instagram.svg" },
        { title: "Twitter-X", href: "/blog/get-involved", icon: "/social-icons/x.svg" },
        { title: "Dev.io", href: "/blog/get-involved", icon: "/social-icons/dev-io.svg" }
      ]
    }
  ]
};
