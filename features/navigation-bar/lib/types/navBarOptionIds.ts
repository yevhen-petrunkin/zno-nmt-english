import {
    NavBarOptionId,
    NavBarOptionWithSubMenuId,
    NavBarStaticMenuOptionId,
    NavBarTestOptionId,
} from '../constants/navBarOptionIds';

export type NavBarTestOptionId =
    (typeof NavBarTestOptionId)[keyof typeof NavBarTestOptionId];
export type NavBarMenuWithSubMenuOptionId =
    (typeof NavBarOptionWithSubMenuId)[keyof typeof NavBarOptionWithSubMenuId];
export type NavBarStaticMenuOptionId =
    (typeof NavBarStaticMenuOptionId)[keyof typeof NavBarStaticMenuOptionId];
export type NavBarOptionId =
    (typeof NavBarOptionId)[keyof typeof NavBarOptionId];
