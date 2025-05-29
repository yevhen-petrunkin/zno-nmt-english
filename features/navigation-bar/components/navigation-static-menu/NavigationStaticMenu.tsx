import { MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import Link from 'next/link';

import { NavBarStaticMenuOptionIds } from '../../lib/constants/navBarOptionIds';
import NavBarOptionsData from '../../lib/constants/navBarOptionsData';

const NavigationStaticMenu = () => {
    return (
        <>
            {Object.values(NavBarStaticMenuOptionIds).map(staticOptionId => {
                return (
                    <MenubarMenu key={staticOptionId}>
                        <MenubarTrigger className="desk:text-lg lgdesk:text-2xl">
                            <Link href={NavBarOptionsData[staticOptionId].href}>
                                {NavBarOptionsData[staticOptionId].label}
                            </Link>
                        </MenubarTrigger>
                    </MenubarMenu>
                );
            })}
        </>
    );
};

export default NavigationStaticMenu;
