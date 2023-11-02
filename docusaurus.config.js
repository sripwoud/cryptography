// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex')

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Cryptography 101',
    tagline: 'Introduction to Modern Cryptographic Primitives and Protocols',
    favicon: 'img/encrypt.ico',

    // Set the production url of your site here
    url: 'https://cryptography.sripwoud.xyz',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    // in case of GH page with custom domain, leave it to '/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'sripwoud', // Usually your GitHub org/user name.
    projectName: 'cryptography', // Usually your repo name.
    deploymentBranch: 'gh-pages', // Branch that GitHub pages will deploy from.
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/sripwoud/cryptography/tree/main/docs',
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/sripwoud/cryptography/tree/main/docs',
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
            image: 'img/encrypt.jpg',
            navbar: {
                title: 'Cryptography 101',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/encrypt.svg',
                },
                items: [
                    {
                        to: '/docs/definitions',
                        position: 'left',
                        label: 'Definitions',
                    },
                    {
                        to: '/docs/category/primitives',
                        position: 'left',
                        label: 'Primitives',
                    },
                    {
                        to: '/docs/category/protocols',
                        position: 'left',
                        label: 'Protocols',
                    },
                    {
                        href: 'https://github.com/sripwoud/cryptography',
                        label: 'GitHub',
                        position: 'right',
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
                                label: 'Definitions',
                                to: '/docs/definitions',
                            },
                            {
                                label: 'Primitives',
                                to: '/docs/category/primitives',
                            },
                            {
                                label: 'Protocols',
                                to: '/docs/category/protocols',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/sripwoud/cryptography',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} sripwoud, Cryptography 101.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
    markdown: {mermaid: true},
    themes: ['@docusaurus/theme-mermaid'],
    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],
};

module.exports = config;
