import {
    RouteBases,
    RouteBasesDynamic,
    RouteBasesError,
    RouteBasesMain,
    RouteBasesStatic,
    RouteBasesTest,
} from '../constants/routeBases';

export type RouteBaseTest = typeof RouteBasesTest;

export type RouteBaseError = typeof RouteBasesError;

export type RouteBaseMain =
    (typeof RouteBasesMain)[keyof typeof RouteBasesMain];

export type RouteBaseDynamic =
    (typeof RouteBasesDynamic)[keyof typeof RouteBasesDynamic];

export type RouteBaseStatic =
    (typeof RouteBasesStatic)[keyof typeof RouteBasesStatic];

export type RouteBase = (typeof RouteBases)[keyof typeof RouteBases];
