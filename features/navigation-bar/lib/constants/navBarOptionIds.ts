export const NavBarTestOptionIds = {
    zno: 'zno',
    nmt: 'nmt',
} as const;

export const NavBarMainMenuOptionIds = {
    ...NavBarTestOptionIds,
    tasks: 'tasks',
} as const;

export const NavBarStaticMenuOptionIds = {
    result: 'result',
    grammar: 'grammar',
    vocabulary: 'vocabulary',
} as const;

export const NavBarOptionIds = {
    home: 'home',
    ...NavBarMainMenuOptionIds,
    ...NavBarStaticMenuOptionIds,
} as const;
