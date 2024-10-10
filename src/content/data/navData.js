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
      path: "#",
      children: [
        { title: "About", href: "/about" },
        // { title: "Forum", href: "https://forum.vortexlinux.org" }, for future use
        { title: "Get Involved", href: "/blog/get-invovled" },
        { title: "GitHub", href: "https://github.com/Vortex-Linux/" },
        {
          title: "ReadTheDocs",
          href: "https://vortexlinux.readthedocs.io/en/latest/",
        },
        { title: "Team", href: "/about#team" },
      ],
    },
  ],
};
