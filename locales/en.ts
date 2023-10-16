interface Detail {
    loginTip: string;
}

interface Common {
    hello: string;
    welcome: string;
    template: string;
    docs: string;
    example: string;
    isSupported: string;
    menus: string;
    home: string;
    Detail: string;
}

interface Home {
    recommendIde: string;
    remarks: string;
}

export interface Locale {
    detail: Detail;
    common: Common;
    home: Home;
}

const en: Locale = {
    detail: {
        loginTip: 'This is Detail Page, need login',
    },
    common: {
        hello: 'Vue template for starter using Vue3 + TypeScript + Vite + Pinia 🚀',
        welcome: 'Welcome, {name}',
        template: 'Template',
        docs: 'Docs',
        example: 'Example',
        isSupported: 'isSupported',
        menus: 'Menus',
        home: 'Home',
        Detail: 'Detail',
    },
    home: {
        recommendIde: 'Recommended IDE setup',
        remarks:
            'See <code class="dark:text-dark">README.md</code> for more information.',
    },
};

export default en;
