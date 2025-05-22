import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { navMenuMockupOptions } from '@/mockup-data/navmenuOptions';
import { useMemo } from 'react';

import NavigationSubMenu from './components/navigation-sub-menu/NavigationSubMenu';
import { NavBarOptionWithSubMenuId } from './lib/constants/navBarOptionIds';
import navBarOptions from './lib/constants/navBarOptions';
import getReadingTasksSubOptions from './lib/helpers/getTasksSubOptions';

const NavigationBar = () => {
    const mockUpOptions = useMemo(() => {
        return {
            ...navMenuMockupOptions,
            tasks: getReadingTasksSubOptions(navMenuMockupOptions),
        };
    }, []);

    return (
        <nav>
            <Menubar>
                {Object.entries(mockUpOptions ?? {}).map(
                    ([optionKey, subOptions]) => {
                        return (
                            <MenubarMenu key={optionKey}>
                                <MenubarTrigger>
                                    {optionKey === NavBarOptionWithSubMenuId.Zno
                                        ? navBarOptions[
                                              NavBarOptionWithSubMenuId.Zno
                                          ].label
                                        : navBarOptions[
                                              NavBarOptionWithSubMenuId.Nmt
                                          ].label}
                                </MenubarTrigger>
                                <NavigationSubMenu options={subOptions} />
                            </MenubarMenu>
                        );
                    },
                )}
            </Menubar>
        </nav>
    );
};

export default NavigationBar;
