// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = frappe;
const preferredDarkTheme = frappe;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Shanghai",
    scale: "C",
  },
  clock: {
    format: "h:i:s p A Y/m/d",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "Shanghai",
      timezone: "Asia/Shanghai",
      format: "z",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      bing: ["https://bing.com/search?q=", "Bing"],
      perplexity: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      duckduckgo: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      google: ["https://google.com/search?q=", "Google"],
    },
    default: "bing",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.perplexity.ai",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "routine",
      background_url: "src/img/banners/banner_13.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "fmhy",
              url: "https://fmhy.net/",
              icon: "droplet-bolt",
              icon_color: palette.green,
            },
            {
              name: "survivorlibrary",
              url: "https://www.survivorlibrary.com/",
              icon: "book-2",
              icon_color: palette.green,
            },
            {
              name: "snowbin",
              url: "https://pastes.fmhy.net/",
              icon: "cloud-snow",
              icon_color: palette.green,
            },
            {
              name: "searx",
              url: "https://searx.fmhy.net/",
              icon: "device-desktop-search",
              icon_color: palette.green,
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "ai",
          links: [
            {
              name: "fmhy-ai",
              url: "https://fmhy.net/ai#multiple-model-sites",
              icon: "file-text-ai",
              icon_color: palette.peach,
            },
            {
              name: "duckduckgo",
              url: "https://duckduckgo.com/",
              icon: "file-text-ai",
              icon_color: palette.peach,
            },{
              name: "lmarena",
              url: "https://lmarena.ai/",
              icon: "input-ai",
              icon_color: palette.peach,
            },
            {
              name: "yupp",
              url: "https://yupp.ai/",
              icon: "mail-ai",
              icon_color: palette.peach,
            },
            {
              name: "ish",
              url: "https://ish.junioralive.in/",
              icon: "photo-ai",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "куток",
              url: "https://kutok.io",
              icon: "border-radius",
              icon_color: palette.red,
            },
            {
              name: "rutracker",
              url: "https://rutracker.org/forum/index.php",
              icon: "home-2",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_17.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "github-ranking",
              url: "https://evanli.github.io/Github-Ranking/",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "neptune",
              url: "https://ui.neptune.ai",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
            {
              name: "linuxdo",
              url: "https://linux.do/",
              icon: "microscope",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },{
          name: "learning",
          links: [
            {
              name: "selectstarsql",
              url: "https://selectstarsql.com/",
              icon: "sql",
              icon_color: palette.peach,
            },
            {
              name: "openvim",
              url: "https://openvim.com/",
              icon: "code-asterix",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "uber engineering",
              url: "https://www.uber.com/en-GB/blog/london/engineering",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "netflix tech blog",
              url: "https://netflixtechblog.com",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chill",
      background_url: "src/img/banners/banner_18.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "reading",
          links: [
            {
              name: "annas-archive",
              url: "https://annas-archive.org/",
              icon: "brand-booking",
              icon_color: palette.green,
            },
            {
              name: "z-lib",
              url: "https://z-lib.gd/",
              icon: "book",
              icon_color: palette.peach,
            }
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steamrip",
              url: "https://steamrip.com/",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "fitgirl-repacks",
              url: "https://fitgirl-repacks.site/",
              icon: "brand-fortnite",
              icon_color: palette.red,
            }
          ],
        },
        {
          name: "anime",
          links: [
            {
              name: "tokyoinsider",
              url: "https://www.tokyoinsider.com/",
              icon: "soup",
              icon_color: palette.green,
            }
          ],
        },
        {
          name: "entertainment",
          links: [
            {
              name: "bilibili",
              url: "https://www.bilibili.com/",
              icon: "brand-bilibili",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "dabmusic",
              url: "https://dabmusic.xyz/",
              icon: "music",
              icon_color: palette.red,
            },
            {
              name: "111477",
              url: "https://a.111477.xyz/",
              icon: "movie",
              icon_color: palette.blue,
            },
            {
              name: "1337x",
              url: "https://1337x.to/home/",
              icon: "device-audio-tape",
              icon_color: palette.blue,
            },
            {
              name: "ext",
              url: "https://ext.to/browse/?cat=1",
              icon: "device-computer-camera",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
