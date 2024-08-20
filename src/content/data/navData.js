// src/data/navData.js

export const navData = {
  logo: "/favicon.svg",
  menu: [
    {
      title: "Info",
      dropdown: [
        { title: "About", href: "/about" },
        { title: "Forum", href: "https://forum.vortexlinux.org" },
        { title: "ReadTheDocs", href: "https://vortexlinux.readthedocs.io/en/latest/"},
        { title: "Team", href: "/about#team" }
      ]
    },
    {
      title: "Community",
      href: "/blog/get-involved",
      dropdown: [
        { title: "Discord", href: "https://github.com/Vortex-Linux/"},
        { title: "Facebook", href: "https://facebook.com"},
        { title: "Instagram", href: "https://instagram.com"},
        { title: "Twitter", href: "https://x.com"},
        { title: "Dev.io", href: "https://dev.io"}
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
