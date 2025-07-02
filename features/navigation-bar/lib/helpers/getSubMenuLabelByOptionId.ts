import { TestSessions } from '@/lib/constants/testSessions';
import getTestTypeLabelByTestId from '@/lib/helpers/test/getTestTypeLabelByTestId';
import { TestSessionId } from '@/lib/types/testSession';

import { SubMenuTypes } from '../constants/subMenuOptions';
import { SubMenuType } from '../types/subMenuTypes';

/**
 * Returns a label for a submenu option, given its id and type of submenu.
 * @param {string} optionId the id of the submenu option
 * @param {SubMenuType} type the type of the submenu
 * @returns {string | null} the label for the submenu option, or null if the option is invalid
 */
const getSubMenuLabelByOptionId = (
    optionId: string,
    type: SubMenuType,
): string | null => {
    if (type === SubMenuTypes.test) {
        return TestSessions[optionId as TestSessionId]?.label ?? null;
    }
    if (type === SubMenuTypes.tasks) {
        return getTestTypeLabelByTestId(optionId);
    }

    return null;
};

export default getSubMenuLabelByOptionId;
