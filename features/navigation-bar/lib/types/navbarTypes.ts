import { RouteOption } from '@/lib/enums/routeOption';

import { NavBarOptionId } from '../enums/navBarOptionId';

export interface NavBarOption {
    id: NavBarOptionId;
    href: RouteOption;
    title: string;
    label: string;
}

export type NavBarOptions = Record<NavBarOptionId, NavBarOption>;
