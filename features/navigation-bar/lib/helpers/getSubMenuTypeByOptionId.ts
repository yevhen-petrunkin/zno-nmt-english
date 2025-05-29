import { NavBarMainMenuOptionIds } from '../constants/navBarOptionIds';
import { SubMenuTypes } from '../constants/subMenuOptions';
import { NavBarMainMenuOptionId } from '../types/navBarOptionIds';
import { SubMenuType } from '../types/subMenuTypes';

/**
 * Returns a type of the navigation bar submenu, given menu option id.
 * If the id corresponds to a menu option with a submenu, the submenu type is returned.
 * Otherwise, null is returned.
 * @param {NavBarMainMenuOptionId} optionId the id of the menu option, which has a submenu
 * @returns {SubMenuType | null} the submenu type, or null if the id is invalid
 */
const getSubMenuTypeByOptionId = (
    optionId: NavBarMainMenuOptionId,
): SubMenuType | null => {
    switch (optionId) {
        case NavBarMainMenuOptionIds.zno:
            return SubMenuTypes.test;
        case NavBarMainMenuOptionIds.nmt:
            return SubMenuTypes.test;
        case NavBarMainMenuOptionIds.tasks:
            return SubMenuTypes.tasks;
        default:
            return null;
    }
};

export default getSubMenuTypeByOptionId;
