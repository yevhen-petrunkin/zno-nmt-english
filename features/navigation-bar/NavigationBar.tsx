import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { navMenuMockupOptions } from '@/mockup-data/navmenuOptions';

import NavigationSubMenu from './components/navigation-sub-menu/NavigationSubMenu';
import navBarOptions from './lib/constants/navBarOptions';
import { NavBarOptionId } from './lib/enums/navBarOptionId';

const NavigationBar = () => {
    return (
        <nav>
            <Menubar>
                {Object.entries(navMenuMockupOptions ?? {}).map(
                    ([optionKey, subOptions]) => {
                        return (
                            <MenubarMenu key={optionKey}>
                                <MenubarTrigger>
                                    {optionKey === NavBarOptionId.Zno
                                        ? navBarOptions[NavBarOptionId.Zno]
                                              .label
                                        : navBarOptions[NavBarOptionId.Nmt]
                                              .label}
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
