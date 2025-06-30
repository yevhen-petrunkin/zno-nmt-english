import { RouteBasesMain } from '@/lib/constants/routeBases';
import parseTestIdString from '@/lib/helpers/parseTestIdString';

const optionMapObj = {
    [RouteBasesMain.zno]: 'ЗНО',
    [RouteBasesMain.nmt]: 'НМТ',
};

/**
 * Returns a label for a 'Tasks' submenu option in the navigation bar, given its id.
 * If the id is invalid, null is returned.
 * @param {string} optionId the id of the submenu option
 * @returns {string | null} the label for the submenu option, or null if the id is invalid
 */
const getTasksSubMenuLabelByOptionId = (optionId: string): string | null => {
    const optionData = parseTestIdString(optionId);

    if (!optionData) {
        return null;
    }

    const testTypeLabel: string = optionMapObj[optionData.testType];

    return testTypeLabel ? `${testTypeLabel} ${optionData.testYear}` : null;
};

export default getTasksSubMenuLabelByOptionId;
