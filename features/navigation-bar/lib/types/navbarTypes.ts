import { MainRoute } from '@/lib/types/route';

import {
    NavBarMainMenuOptionId,
    NavBarOptionId,
    NavBarTestOptionId,
} from './navBarOptionIds';

export interface NavBarOption {
    id: NavBarOptionId;
    href: MainRoute;
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

export type NavBarSubMenuOptions = Record<
    NavBarMainMenuOptionId,
    NavBarSubOption[]
>;

export type NavBarOptions = Record<NavBarOptionId, NavBarOption>;
