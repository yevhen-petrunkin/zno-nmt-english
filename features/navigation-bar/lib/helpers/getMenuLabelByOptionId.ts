import { NavBarMainMenuOptionIds } from '../constants/navBarOptionIds';
import NavBarOptionsData from '../constants/navBarOptionsData';
import { NavBarMainMenuOptionId } from '../types/navBarOptionIds';

/**
 * Returns a label for a menu option, which has a submenu, given its id.
 * If the id corresponds to a menu option with a submenu, the label is returned.
 * Otherwise, null is returned.
 * @param {NavBarMainMenuOptionId} optionId the id of the menu option, which has a submenu
 * @returns {string | null} the label for the menu option, which has a submenu, or null if the id is invalid
 */
const getMenuLabelByOptionId = (
    optionId: NavBarMainMenuOptionId,
): string | null => {
    if (
        optionId === NavBarMainMenuOptionIds.zno ||
        optionId === NavBarMainMenuOptionIds.nmt ||
        optionId === NavBarMainMenuOptionIds.tasks
    ) {
        return NavBarOptionsData[optionId].label;
    }

    return null;
};

export default getMenuLabelByOptionId;
