module.exports = {
    title: '武人熊大大',
    description: '武人熊大大的个人博客文档，vuepress文档', // 优化SEO
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN'
        }
    },
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }]
    ],
    base: '/PersonalBlog/',
    themeConfig: {
        // sidebar: 'auto',
        // sidebar: [
        //     ['/', '首页'],
        //     ['/css/', 'css首页'],
        //     ['/javascript/', 'javascript首页'],
        //     ['/about/test', 'about首页']
        // ],
        // sidebar: [{
        //         title: 'Group 1',
        //         path: '/css/', // 路径
        //         collapsable: true,// 是否折叠
        //         sidebarDepth: 1,// 深度1
        //         children: [
        //             // '/',
        //             '/css/',
        //             '/css/css1'
        //         ]
        //     },
        //     {
        //         title: 'Group 2',
        //         children: [ /* ... */ ]
        //     }
        // ],
        sidebar: {
            '/css/': [
                '', /* /css/ */
                'css1', /* /css/css1.html */
                'css2' /* /css/css2.html */
            ],
            '/javascript/': [
                '', /* /javascript/ */
                'javascript1', /* /javascript/javascript1.html */
                'javascript2' /* /javascript/javascript2.html */
            ],
            // fallback 放在最前面，会禁止所有的IP地址访问
            '/': [
                '', /* / */
                '/about/', /* /about.html */
                '/about/test', /* /about/test.html */
            ]
        },
        sidebarDepth: 2,
        displayAllHeaders: true, // 显示所有页面标题链接
        activeHeaderLinks: false, // 禁用活动标题
        lastUpdated: '上次更新', // string | boolean 将以合适的日期格式显示在每一页的底部
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'gangking/PersonalBlog',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '编辑文档',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Guide',
                items: [{
                    text: '亚洲',
                    items: [{
                            text: 'Chinese',
                            link: '/language/chinese'
                        },
                        {
                            text: 'Japanese',
                            link: '/language/japanese'
                        }
                    ]
                }]
            },
            {
                text: 'External',
                link: 'https://google.com'
            }, {
                text: 'Languages',
                items: [{
                        text: 'Chinese',
                        link: '/language/chinese'
                    },
                    {
                        text: 'Japanese',
                        link: '/language/japanese'
                    }
                ]
            }
        ]
    }
}