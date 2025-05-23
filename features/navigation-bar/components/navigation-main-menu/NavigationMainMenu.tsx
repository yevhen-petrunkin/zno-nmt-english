import { MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { navMenuMockupOptions } from '@/mockup-data/navmenuOptions';
import { useMemo } from 'react';

import getMenuLabelByOptionId from '../../lib/helpers/getMenuLabelByOptionId';
import getReadingTasksSubOptions from '../../lib/helpers/getTasksSubOptions';
import { NavBarMenuWithSubMenuOptionId } from '../../lib/types/navBarOptionIds';
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
                    optionKey as NavBarMenuWithSubMenuOptionId,
                );
                return label ? (
                    <MenubarMenu key={optionKey}>
                        <MenubarTrigger className="desk:text-lg lgdesk:text-2xl">
                            {label}
                        </MenubarTrigger>
                        <NavigationSubMenu options={subOptions} />
                    </MenubarMenu>
                ) : null;
            })}
        </>
    );
};

export default NavigationMainMenu;
