import InteractiveLogo from '@/components/lib-components/interactive-logo/InteractiveLogo';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { navMenuMockupOptions } from '@/mockup-data/navmenuOptions';
import Link from 'next/link';
import { useMemo } from 'react';

import NavigationSubMenu from './components/navigation-sub-menu/NavigationSubMenu';
import { NavBarOptionId as StaticOptionId } from './lib/constants/navBarOptionIds';
import navBarOptions from './lib/constants/navBarOptions';
import getMenuLabelByOptionId from './lib/helpers/getMenuLabelByOptionId';
import getReadingTasksSubOptions from './lib/helpers/getTasksSubOptions';
import { NavBarMenuWithSubMenuOptionId } from './lib/types/navBarOptionIds';
import { NavBarSubMenuOptions } from './lib/types/navbarTypes';

const NavigationBar = () => {
    const mockUpOptions: NavBarSubMenuOptions = useMemo(() => {
        return {
            ...navMenuMockupOptions,
            tasks: getReadingTasksSubOptions(navMenuMockupOptions),
        };
    }, []);

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

                {Object.entries(mockUpOptions ?? {}).map(
                    ([optionKey, subOptions]) => {
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
                    },
                )}

                <MenubarMenu>
                    <MenubarTrigger className="desk:text-lg lgdesk:text-2xl">
                        <Link href={navBarOptions[StaticOptionId.Result].href}>
                            {navBarOptions[StaticOptionId.Result].label}
                        </Link>
                    </MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="desk:text-lg lgdesk:text-2xl">
                        <Link href={navBarOptions[StaticOptionId.Grammar].href}>
                            {navBarOptions[StaticOptionId.Grammar].label}
                        </Link>
                    </MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="desk:text-lg lgdesk:text-2xl">
                        <Link
                            href={navBarOptions[StaticOptionId.Vocabulary].href}
                        >
                            {navBarOptions[StaticOptionId.Vocabulary].label}
                        </Link>
                    </MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </nav>
    );
};

export default NavigationBar;
