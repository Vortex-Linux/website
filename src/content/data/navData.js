// src/data/navData.js

export const navData = {
  logo: "/favicon.svg",
  menu: [
    {
      title: "News",
      path: "/blog",
    },
    {
      title: "Info",
      children: [
        { title: "About", href: "/about" },
        { title: "Team", href: "/about#team" },
        // { title: "Forum", href: "https://forum.vortexlinux.org" }, for future use
        { title: "Get Involved", href: "/blog/get-involved" },
        { title: "GitHub", href: "https://github.com/Vortex-Linux/" },
        {
          title: "Docs",
          href: "https://vortexlinux.readthedocs.io/en/latest/",
        },
      ],
    },
  ],
};
