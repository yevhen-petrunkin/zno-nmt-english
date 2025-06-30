import { MainRoute } from '@/lib/types/route';

import {
    RouteBase,
    RouteBaseDynamic,
    RouteBaseMain,
} from '../../../../lib/types/routeBase';

export interface NavBarOption {
    id: RouteBase;
    href: MainRoute;
    label: string;
}

export interface NavBarSubOption {
    subId: string;
    subLabel: string;
    subOptions: string[];
}

export type NavBarTestOptions = Record<RouteBaseMain, NavBarSubOption[]>;

export type NavBarSubMenuOptions = Record<RouteBaseDynamic, NavBarSubOption[]>;

export type NavBarOptions = Record<RouteBase, NavBarOption>;
