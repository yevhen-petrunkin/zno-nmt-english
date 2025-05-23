import { MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import Link from 'next/link';

import { NavBarStaticMenuOptionId } from '../../lib/constants/navBarOptionIds';
import navBarOptions from '../../lib/constants/navBarOptions';

const NavigationStaticMenu = () => {
    return (
        <>
            {Object.values(NavBarStaticMenuOptionId).map(staticOptionId => {
                return (
                    <MenubarMenu key={staticOptionId}>
                        <MenubarTrigger className="desk:text-lg lgdesk:text-2xl">
                            <Link href={navBarOptions[staticOptionId].href}>
                                {navBarOptions[staticOptionId].label}
                            </Link>
                        </MenubarTrigger>
                    </MenubarMenu>
                );
            })}
        </>
    );
};

export default NavigationStaticMenu;
