export const NavBarTestOptionId = {
    Zno: 'zno',
    Nmt: 'nmt',
} as const;

export const NavBarOptionWithSubMenuId = {
    ...NavBarTestOptionId,
    Tasks: 'tasks',
} as const;

export const NavBarOptionId = {
    Home: 'home',
    ...NavBarOptionWithSubMenuId,
    Result: 'result',
    Grammar: 'grammar',
    Vocabulary: 'vocabulary',
} as const;
