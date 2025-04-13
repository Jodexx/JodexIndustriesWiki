import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JodexIndustries Wiki',
  tagline: 'Ukrainian development studio for Minecraft',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.jodex.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Jodexx', // Usually your GitHub org/user name.
  projectName: 'JodexIndustriesWiki', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ua',
    locales: [ 'ua', 'en', 'ru'],
    path: 'i18n',
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      ru: {
        htmlLang: 'ru-RU',
      },
      ua: {
        label: 'Українська',
        htmlLang: 'ua-UA',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          lastVersion: 'current',
          versions: {
            current: {
              label: '2.0.0',
              path: '2.0.0',
              banner: "none"
            },
            '1.0.0': {
              label: '1.0.0',
              path: '1.0.0',
              banner: "unmaintained"
            }
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'JodexIndustries Wiki',
        logo: {
          alt: 'JodexIndustries Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'defaultSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'localeDropdown',
          },
          {
            type: 'docsVersionDropdown',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'DonateCase',
                to: '/docs/2.0.0/donatecase',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'WebSite',
                href: 'https://www.jodex.xyz',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/2syNtcKcgR',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Jodexx GitHub',
                href: 'https://github.com/Jodexx',
              },
              {
                label: 'JodexIndustries GitHub',
                href: 'https://github.com/JodexIndustries',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} JodexIndustries`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: prismThemes.github,
      	darkTheme: prismThemes.palenight,
        additionalLanguages: ['java', 'gradle', 'yaml', 'xml-doc'],
      },
    }),
    future: {
      experimental_faster: {
        swcJsLoader: true,
        swcJsMinimizer: true,
        swcHtmlMinimizer: true,
        lightningCssMinimizer: true,
        rspackBundler: true,
        mdxCrossCompilerCache: true,
      },
    },
};

module.exports = config;
