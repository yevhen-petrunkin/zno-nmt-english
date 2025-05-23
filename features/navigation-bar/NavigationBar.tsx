import InteractiveLogo from '@/components/lib-components/interactive-logo/InteractiveLogo';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import Link from 'next/link';

import NavigationMainMenu from './components/navigation-main-menu/NavigationMainMenu';
import NavigationStaticMenu from './components/navigation-static-menu/NavigationStaticMenu';
import { NavBarOptionId as StaticOptionId } from './lib/constants/navBarOptionIds';
import navBarOptions from './lib/constants/navBarOptions';

const NavigationBar = () => {
    return (
        <nav className="mt-4">
            <Menubar className="desk:h-18 lgdesk:h-22 lgdesk:gap-20 desk:gap-12 flex h-10 justify-center gap-6">
                <MenubarMenu>
                    <InteractiveLogo className="desk:size-16 lgdesk:size-20 size-8" />
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="desk:text-lg lgdesk:text-2xl">
                        <Link href={navBarOptions[StaticOptionId.Home].href}>
                            {navBarOptions[StaticOptionId.Home].label}
                        </Link>
                    </MenubarTrigger>
                </MenubarMenu>

                <NavigationMainMenu />

                <NavigationStaticMenu />
            </Menubar>
        </nav>
    );
};

export default NavigationBar;
