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
            <Menubar className="desk:h-18 lgdesk:h-22 lgdesk:gap-20 desk:gap-12 tab:flex hidden h-10 justify-center gap-6">
                <MenubarMenu>
                    <InteractiveLogo className="desk:size-16 lgdesk:size-20 size-8" />
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="desk:text-lg lgdesk:text-2xl">
                        <Link href={NavBarOptionsData[RouteBases.home].href}>
                            {NavBarOptionsData[RouteBases.home].label}
                        </Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <NavigationMainMenu />
                <NavigationStaticMenu />
            </Menubar>

            <Menubar className="desk:h-18 lgdesk:h-22 tab:hidden h-10">
                <BurgerMenu />
            </Menubar>
        </nav>
    );
};

export default NavigationBar;
