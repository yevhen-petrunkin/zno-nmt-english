import {
    RouteBasesDynamic,
    RouteBasesStatic,
    RouteBasesTest,
} from './routeBases';

export const MainRoutes = {
    home: '/',
    test: `/${RouteBasesTest}`,
    tasks: `/${RouteBasesDynamic.tasks}`,
    result: `/${RouteBasesStatic.result}`,
    grammar: `/${RouteBasesStatic.grammar}`,
    vocabulary: `/${RouteBasesStatic.vocabulary}`,
} as const;
