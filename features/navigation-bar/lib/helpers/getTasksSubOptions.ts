import { READING_TASKS_COUNT } from '../constants/navBarConstants';
import { NavBarSubOption, NavBarTestOptions } from '../types/navbarTypes';

const getSubIdsFromNavBarTestOptions = (
    navBarOptions: NavBarTestOptions,
): string[] => {
    return Object.values(navBarOptions).flatMap(subOptions => {
        return subOptions.map(subOption => subOption.subId);
    });
};

const getReadingTasksSubOptions = (
    navBarOptions: NavBarTestOptions,
): NavBarSubOption[] => {
    const subtIds = getSubIdsFromNavBarTestOptions(navBarOptions);
    const subOptions = [];
    for (let i = 1; i <= READING_TASKS_COUNT; i += 1) {
        subOptions.push({
            subId: `task_${i + 3}`,
            subLabel: `Завдання ${i + 3}/${i}`,
            subTitle: `Task ${i + 3}/${i}`,
            subOptions: subtIds,
        });
    }
    return subOptions;
};

export default getReadingTasksSubOptions;
