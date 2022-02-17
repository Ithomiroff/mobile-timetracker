const className = 'header-portal';

export const TOOLBAR_PORTAL = {
    className,
    getRef: () => document.querySelector(`.${className}`) as HTMLDivElement,
};
