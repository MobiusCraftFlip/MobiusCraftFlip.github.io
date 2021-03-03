module.exports = {
  organizationName: "mobiuscraftflip",
  projectName: "mobiuscraftflip.github.io",
  url: "https://mobiuscraftflip.github.io",
  baseUrl: "/",
  title: 'Mobidev',
  tagline: 'Development',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'MobiDev',
      logo: {
        alt: 'MobiDev Lgo',
        src: 'img/favicon.ico',
      },
      items: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'portfolio', label: 'Portfolio', position: 'left'},
        {to: 'contact', label: 'Contact', position: 'left'},
        {to: 'projects', label: 'Projects', position: 'left'},
        {to: 'docs', label: 'Docs', position: 'left'},
        {
					href: "https://discord.gg/E5uPAeyx7g",
					className: "header-discord-link",
					position: "right",
				},
      ],
    },
    footer: {
      style: 'dark',
      links: [

      ],
    },
    prism: {
      additionalLanguages: ["lua"],
      theme: require("prism-react-renderer/themes/github"),
			darkTheme: require("prism-react-renderer/themes/vsDark"),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            '/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

};
