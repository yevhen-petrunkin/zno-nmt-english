import {
    NavBarMainMenuOptionIds,
    NavBarOptionIds,
    NavBarStaticMenuOptionIds,
    NavBarTestOptionIds,
} from '../constants/navBarOptionIds';

export type NavBarTestOptionId =
    (typeof NavBarTestOptionIds)[keyof typeof NavBarTestOptionIds];

export type NavBarMainMenuOptionId =
    (typeof NavBarMainMenuOptionIds)[keyof typeof NavBarMainMenuOptionIds];

export type NavBarStaticMenuOptionId =
    (typeof NavBarStaticMenuOptionIds)[keyof typeof NavBarStaticMenuOptionIds];

export type NavBarOptionId =
    (typeof NavBarOptionIds)[keyof typeof NavBarOptionIds];
