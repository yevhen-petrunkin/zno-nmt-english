export const SubMenuTypes = {
    tasks: 'tasks',
    test: 'test',
} as const;

export const SubMenuOptions = {
    [SubMenuTypes.tasks]: {
        id: SubMenuTypes.tasks,
        category: 'Номер завдання',
        subCategory: 'Тести',
    },
    [SubMenuTypes.test]: {
        id: SubMenuTypes.test,
        category: 'Рік',
        subCategory: 'Сесія',
    },
} as const;
