const config = {
    projectName: 'photo',
    title: '博客',
    favicon: 'img/favicon.ico',
    logo: 'img/logo.png',
    colors: {
        primaryColor: '#FF8C00',
        secondaryColor: '#F0E68C',
        activeColor: '#FF4040',
        tintColor: '#005068'
    },
    highlight: {
        theme: 'solarized-dark'
    },
    documentPath: 'docs', //默认为docs
    styles: [],
    scripts: [],
    footer: 'lib/Footer.js', //设置footer
    sideNavCollapsible: true, // 侧边栏是否可以折叠
    homePage: {
        name: '博客',
        path: 'index.md'
    },
    showDirectory: { path: 'blog', node: [] }, //需要展示的文件夹里面的文件的目录，path相对于static，node相对于menus
    menus: [
        {
            name: '首页',
            mainPage: '/home',
        },
    ]
};

module.exports = config;
