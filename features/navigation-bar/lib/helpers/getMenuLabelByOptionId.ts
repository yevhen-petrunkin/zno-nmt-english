import { RouteBasesDynamic } from '../../../../lib/constants/routeBases';
import { RouteBaseDynamic } from '../../../../lib/types/routeBase';
import NavBarOptionsData from '../constants/navBarOptionsData';

/**
 * Returns a label for a menu option, which has a submenu, given its id.
 * If the id corresponds to a menu option with a submenu, the label is returned.
 * Otherwise, null is returned.
 * @param {RouteBaseDynamic} optionId the id of the menu option, which has a submenu
 * @returns {string | null} the label for the menu option, which has a submenu, or null if the id is invalid
 */
const getMenuLabelByOptionId = (optionId: RouteBaseDynamic): string | null => {
    if (
        optionId === RouteBasesDynamic.zno ||
        optionId === RouteBasesDynamic.nmt ||
        optionId === RouteBasesDynamic.tasks
    ) {
        return NavBarOptionsData[optionId].label;
    }

    return null;
};

export default getMenuLabelByOptionId;
