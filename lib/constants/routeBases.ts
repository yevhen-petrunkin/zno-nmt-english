export const RouteBasesMain = {
    zno: 'zno',
    nmt: 'nmt',
} as const;

export const RouteBasesTest = 'test' as const;

export const RouteBasesError = 'error' as const;

export const RouteBasesDynamic = {
    ...RouteBasesMain,
    tasks: 'tasks',
} as const;

export const RouteBasesStatic = {
    result: 'result',
    grammar: 'grammar',
    vocabulary: 'vocabulary',
} as const;

export const RouteBases = {
    home: 'home',
    ...RouteBasesDynamic,
    ...RouteBasesStatic,
} as const;
