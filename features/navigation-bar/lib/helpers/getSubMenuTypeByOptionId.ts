import { RouteBasesDynamic } from '../../../../lib/constants/routeBases';
import { RouteBaseDynamic } from '../../../../lib/types/routeBase';
import { SubMenuTypes } from '../constants/subMenuOptions';
import { SubMenuType } from '../types/subMenuTypes';

const submenuTypeMapObj = {
    [RouteBasesDynamic.zno]: SubMenuTypes.test,
    [RouteBasesDynamic.nmt]: SubMenuTypes.test,
    [RouteBasesDynamic.tasks]: SubMenuTypes.tasks,
};

/**
 * Returns a type of the navigation bar submenu, given menu option id.
 * If the id corresponds to a menu option with a submenu, the submenu type is returned.
 * Otherwise, null is returned.
 * @param {RouteBaseDynamic} optionId the id of the menu option, which has a submenu
 * @returns {SubMenuType | null} the submenu type, or null if the id is invalid
 */
const getSubMenuTypeByOptionId = (
    optionId: RouteBaseDynamic,
): SubMenuType | null => {
    return submenuTypeMapObj[optionId] ?? null;
};

export default getSubMenuTypeByOptionId;
