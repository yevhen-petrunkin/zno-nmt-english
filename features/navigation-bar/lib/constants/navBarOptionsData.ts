import { MainRoutes } from '@/lib/constants/routes';

import { NavBarOptions } from '../types/navbarTypes';
import { NavBarOptionIds } from './navBarOptionIds';

const NavBarOptionsData: NavBarOptions = {
    [NavBarOptionIds.home]: {
        id: NavBarOptionIds.home,
        href: MainRoutes.home,
        title: 'Home',
        label: 'Головна',
    },
    [NavBarOptionIds.zno]: {
        id: NavBarOptionIds.zno,
        href: MainRoutes.test,
        title: 'ZNO',
        label: 'ЗНО',
    },
    [NavBarOptionIds.nmt]: {
        id: NavBarOptionIds.nmt,
        href: MainRoutes.test,
        title: 'NMT',
        label: 'НМТ',
    },
    [NavBarOptionIds.tasks]: {
        id: NavBarOptionIds.tasks,
        href: MainRoutes.tasks,
        title: 'Tasks',
        label: 'Завдання',
    },
    [NavBarOptionIds.result]: {
        id: NavBarOptionIds.result,
        href: MainRoutes.result,
        title: 'Result',
        label: 'Результат',
    },
    [NavBarOptionIds.grammar]: {
        id: NavBarOptionIds.grammar,
        href: MainRoutes.grammar,
        title: 'Grammar',
        label: 'Граматика',
    },
    [NavBarOptionIds.vocabulary]: {
        id: NavBarOptionIds.vocabulary,
        href: MainRoutes.vocabulary,
        title: 'Vocabulary',
        label: 'Словник',
    },
} as const;

export default NavBarOptionsData;
