// src/data/navData.js

export const navData = {
  logo: "/favicon.svg",
  menu: [
    {
      title: "Info",
      dropdown: [
        { title: "About", href: "/about" },
        { title: "Forum", href: "https://forum.vortexlinux.org" },
        { title: "ReadTheDocs", href: "https://vortexlinux.readthedocs.io/en/latest/", icon: "/social-icons/read-the-docs.svg" },
        { title: "Team", href: "/about#team" }
      ]
    },
    {
      title: "Community",
      href: "/blog/get-involved",
      dropdown: [
        { title: "Discord", href: "https://github.com/Vortex-Linux/", icon: "/social-icons/discord.svg" },
        { title: "Facebook", href: "https://facebook.com", icon: "/social-icons/facebook.svg" },
        { title: "Instagram", href: "https://instagram.com", icon: "/social-icons/instagram.svg" },
        { title: "Twitter", href: "https://x.com", icon: "/social-icons/x.svg" },
        { title: "Dev.io", href: "https://dev.io", icon: "/social-icons/dev-io.svg" }
      ]
    }, 
    {
      title: "News",
      href: "/blog"
    },
    {
      title: "Download",
      href: "/download"
    }
  ]
};
