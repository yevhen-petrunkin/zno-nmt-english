import { MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import Link from 'next/link';

import { RouteBasesStatic } from '../../../../lib/constants/routeBases';
import NavBarOptionsData from '../../lib/constants/navBarOptionsData';

const NavigationStaticMenu = () => {
    return (
        <>
            {Object.values(RouteBasesStatic).map(staticOptionId => {
                return (
                    <MenubarMenu key={staticOptionId}>
                        <MenubarTrigger className="desk:text-lg lgdesk:text-2xl tab:text-sm text-lg">
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
