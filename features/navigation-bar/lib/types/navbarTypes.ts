import { RouteOption } from '@/lib/enums/routeOption';

import { NavBarOptionId } from '../enums/navBarOptionId';

export interface NavBarOption {
    id: NavBarOptionId;
    href: RouteOption;
    title: string;
    label: string;
}

export interface NavBarSubOption {
    subId: number;
    subLabel: string;
    subTitle: string;
    subOptions: string[];
}

export type NavBarOptions = Record<NavBarOptionId, NavBarOption>;
