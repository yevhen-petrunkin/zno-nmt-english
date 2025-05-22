import { RouteOption } from '@/lib/enums/routeOption';

import { NavBarOptionId, NavBarTestOptionId } from './navBarOptionIds';

export interface NavBarOption {
    id: NavBarOptionId;
    href: RouteOption;
    title: string;
    label: string;
}

export interface NavBarSubOption {
    subId: string;
    subLabel: string;
    subTitle: string;
    subOptions: string[];
}

export type NavBarTestOptions = Record<NavBarTestOptionId, NavBarSubOption[]>;
export type NavBarOptions = Record<NavBarOptionId, NavBarOption>;
