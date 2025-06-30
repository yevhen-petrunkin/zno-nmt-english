import { RouteBasesDynamic, RouteBasesTest } from '@/lib/constants/routeBases';

export const SubMenuTypes = {
    tasks: RouteBasesDynamic.tasks,
    test: RouteBasesTest,
} as const;

export const SubMenuOptions = {
    [SubMenuTypes.tasks]: {
        id: SubMenuTypes.tasks,
        category: 'Номер завдання',
        subCategory: 'Тест',
    },
    [SubMenuTypes.test]: {
        id: SubMenuTypes.test,
        category: 'Рік',
        subCategory: 'Сесія',
    },
} as const;
