// src/data/navData.js

export const navData = {
  logo: "/favicon.svg",
  menu: [
    {
      title: "Info",
      dropdown: [
        { title: "About", href: "/about" },
        { title: "Forum", href: "https://forum.vortexlinux.org" },
        { title: "Get Involved", href: "/blog/get-invovled"},
        { title: "GitHub", href: "https://github.com/Vortex-Linux/"},
        { title: "ReadTheDocs", href: "https://vortexlinux.readthedocs.io/en/latest/"},
        { title: "Team", href: "/about#team" }
      ]
    },
    {
      title: "Community",
      href: "/blog/get-involved",
      dropdown: [
        { title: "Dev.io", href: "https://dev.to/vortexlinux"},
        { title: "Discord", href: "https://discord.gg/MsF24qUA5y"},
        { title: "Facebook", href: "https://www.facebook.com/people/VortexLinux/61564619819936/"},
        { title: "Instagram", href: "https://www.instagram.com/vortexlinux/"},
        { title: "Twitter", href: "https://x.com/Vortex_Linux"},
        { title: "YouTube", href: "https://www.youtube.com/@VortexLinux"}
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
