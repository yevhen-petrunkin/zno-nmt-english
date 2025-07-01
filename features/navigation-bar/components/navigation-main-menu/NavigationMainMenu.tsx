import { MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { navMenuMockupOptions } from '@/mockup-data/navmenuOptions';
import { useMemo } from 'react';

import { RouteBaseDynamic } from '../../../../lib/types/routeBase';
import getMenuLabelByOptionId from '../../lib/helpers/getMenuLabelByOptionId';
import getSubMenuTypeByOptionId from '../../lib/helpers/getSubMenuTypeByOptionId';
import getReadingTasksSubOptions from '../../lib/helpers/getTasksSubOptions';
import { NavBarSubMenuOptions } from '../../lib/types/navbarTypes';
import NavigationSubMenu from '../navigation-sub-menu/NavigationSubMenu';

const NavigationMainMenu = () => {
    const options: NavBarSubMenuOptions = useMemo(() => {
        return {
            ...navMenuMockupOptions, // TODO: These options in the future will be fetched from the backend
            tasks: getReadingTasksSubOptions(navMenuMockupOptions),
        };
    }, []);

    return (
        <>
            {Object.entries(options ?? {}).map(([optionKey, subOptions]) => {
                const label = getMenuLabelByOptionId(
                    optionKey as RouteBaseDynamic,
                );
                const type = getSubMenuTypeByOptionId(
                    optionKey as RouteBaseDynamic,
                );
                return label && type ? (
                    <MenubarMenu key={optionKey}>
                        <MenubarTrigger className="desk:text-lg lgdesk:text-2xl">
                            {label}
                        </MenubarTrigger>
                        <NavigationSubMenu options={subOptions} type={type} />
                    </MenubarMenu>
                ) : null;
            })}
        </>
    );
};

export default NavigationMainMenu;
