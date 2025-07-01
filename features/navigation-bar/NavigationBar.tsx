import InteractiveLogo from '@/components/lib-components/interactive-logo/InteractiveLogo';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import Link from 'next/link';

import { RouteBases } from '../../lib/constants/routeBases';
import BurgerMenu from '../burger-menu/BurgerMenu';
import NavigationMainMenu from './components/navigation-main-menu/NavigationMainMenu';
import NavigationStaticMenu from './components/navigation-static-menu/NavigationStaticMenu';
import NavBarOptionsData from './lib/constants/navBarOptionsData';

const NavigationBar = () => {
    return (
        <nav className="mt-4">
            <Menubar className="desk:h-18 lgdesk:h-22 lgdesk:gap-20 desk:gap-12 tab:justify-center tab:gap-6 flex h-10 justify-evenly">
                <div className="tab:hidden">
                    <MenubarMenu>
                        <BurgerMenu />
                    </MenubarMenu>
                </div>

                <div className="tab:block hidden">
                    <MenubarMenu>
                        <InteractiveLogo className="desk:size-16 lgdesk:size-20 size-8" />
                    </MenubarMenu>
                </div>

                <div className="tab:block hidden">
                    <MenubarMenu>
                        <MenubarTrigger className="desk:text-lg lgdesk:text-2xl tab:text-sm tab:block hidden">
                            <Link
                                href={NavBarOptionsData[RouteBases.home].href}
                            >
                                {NavBarOptionsData[RouteBases.home].label}
                            </Link>
                        </MenubarTrigger>
                    </MenubarMenu>
                </div>

                <NavigationMainMenu />

                <div className="tab:flex lgdesk:gap-20 desk:gap-12 hidden h-10 justify-center gap-6">
                    <NavigationStaticMenu />
                </div>
            </Menubar>
        </nav>
    );
};

export default NavigationBar;
