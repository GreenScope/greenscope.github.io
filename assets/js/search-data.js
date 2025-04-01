// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "People",
          description: "Contributors of GreenScope Project",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-github",
          title: "GitHub",
          description: "Meet the developers and view our repositories",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-eedl",
          title: "EEDL",
          description: "A custom ESP32 based mini weather station. The EEDL is the hardware for the GreenScope project.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/EEDL/";
          },
        },{id: "nav-dba",
          title: "DBA",
          description: "Program files for interacting with the GreenScope Database, enabling secure data upload and extraction via API key authentication",
          section: "Navigation",
          handler: () => {
            window.location.href = "/DBA/";
          },
        },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/GreenScope", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
