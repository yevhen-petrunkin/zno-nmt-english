import { MainRoutes } from '@/lib/constants/routes';

import { RouteBases } from '../../../../lib/constants/routeBases';
import { NavBarOptions } from '../types/navbarTypes';

const NavBarOptionsData: NavBarOptions = {
    [RouteBases.home]: {
        id: RouteBases.home,
        href: MainRoutes.home,
        label: 'Головна',
    },
    [RouteBases.zno]: {
        id: RouteBases.zno,
        href: MainRoutes.test,
        label: 'ЗНО',
    },
    [RouteBases.nmt]: {
        id: RouteBases.nmt,
        href: MainRoutes.test,
        label: 'НМТ',
    },
    [RouteBases.tasks]: {
        id: RouteBases.tasks,
        href: MainRoutes.tasks,
        label: 'Завдання',
    },
    [RouteBases.result]: {
        id: RouteBases.result,
        href: MainRoutes.result,
        label: 'Результат',
    },
    [RouteBases.grammar]: {
        id: RouteBases.grammar,
        href: MainRoutes.grammar,
        label: 'Граматика',
    },
    [RouteBases.vocabulary]: {
        id: RouteBases.vocabulary,
        href: MainRoutes.vocabulary,
        label: 'Словник',
    },
} as const;

export default NavBarOptionsData;
