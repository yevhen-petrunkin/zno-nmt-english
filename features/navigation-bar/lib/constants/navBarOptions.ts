import { RouteOption } from '@/lib/enums/routeOption';

import { NavBarOptionId } from '../enums/navBarOptionId';
import { NavBarOptions } from '../types/navbarTypes';

const navBarOptions: NavBarOptions = {
    [NavBarOptionId.Home]: {
        id: NavBarOptionId.Home,
        href: RouteOption.Home,
        title: 'Home',
        label: 'Головна',
    },
    [NavBarOptionId.Zno]: {
        id: NavBarOptionId.Zno,
        href: RouteOption.Zno,
        title: 'ZNO',
        label: 'ЗНО',
    },
    [NavBarOptionId.Nmt]: {
        id: NavBarOptionId.Nmt,
        href: RouteOption.Nmt,
        title: 'NMT',
        label: 'НМТ',
    },
    [NavBarOptionId.Tasks]: {
        id: NavBarOptionId.Tasks,
        href: RouteOption.Tasks,
        title: 'Tasks',
        label: 'Завдання',
    },
    [NavBarOptionId.Result]: {
        id: NavBarOptionId.Result,
        href: RouteOption.Result,
        title: 'Result',
        label: 'Результат',
    },
    [NavBarOptionId.Grammar]: {
        id: NavBarOptionId.Grammar,
        href: RouteOption.Grammar,
        title: 'Grammar',
        label: 'Граматика',
    },
    [NavBarOptionId.Vocabulary]: {
        id: NavBarOptionId.Vocabulary,
        href: RouteOption.Vocabulary,
        title: 'Vocabulary',
        label: 'Словник',
    },
};

export default navBarOptions;
