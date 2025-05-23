import { NavBarOptionWithSubMenuId } from '../constants/navBarOptionIds';
import navBarOptions from '../constants/navBarOptions';
import { NavBarMenuWithSubMenuOptionId } from '../types/navBarOptionIds';

/**
 * Returns a label for a menu option, which has a submenu, given its id.
 * If the id corresponds to a menu option with a submenu, the label is returned.
 * Otherwise, null is returned.
 * @param {NavBarMenuWithSubMenuOptionId} optionId the id of the menu option, which has a submenu
 * @returns {string | null} the label for the menu option, which has a submenu, or null if the id is invalid
 */
const getMenuLabelByOptionId = (
    optionId: NavBarMenuWithSubMenuOptionId,
): string | null => {
    if (
        optionId === NavBarOptionWithSubMenuId.Zno ||
        optionId === NavBarOptionWithSubMenuId.Nmt ||
        optionId === NavBarOptionWithSubMenuId.Tasks
    ) {
        return navBarOptions[optionId].label;
    }

    return null;
};

export default getMenuLabelByOptionId;
