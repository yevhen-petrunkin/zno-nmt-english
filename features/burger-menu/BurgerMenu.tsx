import InteractiveLogo from '@/components/lib-components/interactive-logo/InteractiveLogo';
import { Button } from '@/components/ui/button';
import { MenubarMenu } from '@/components/ui/menubar';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { RouteBases } from '@/lib/constants/routeBases';
import { MenubarTrigger } from '@radix-ui/react-menubar';
import { AlignJustifyIcon } from 'lucide-react';
import Link from 'next/link';

import NavigationStaticMenu from '../navigation-bar/components/navigation-static-menu/NavigationStaticMenu';
import NavBarOptionsData from '../navigation-bar/lib/constants/navBarOptionsData';

const BurgerMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" className="ml-auto">
                    <AlignJustifyIcon />
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className="bg-background/90">
                <SheetHeader>
                    <SheetTitle className="invisible size-0">
                        Меню навігації
                    </SheetTitle>

                    <SheetDescription className="invisible size-0">
                        Меню для навігації по сторінках додатку
                    </SheetDescription>

                    <InteractiveLogo className="mx-auto mt-4 size-51.5" />
                </SheetHeader>

                <nav className="flex flex-col items-center gap-2 px-4">
                    <MenubarMenu>
                        <MenubarTrigger className="hover:bg-accent/40 hover:text-accent-foreground focus:bg-accent/40 focus:text-accent-foreground data-[state=open]:bg-accent/40 data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-lg font-medium outline-hidden select-none">
                            <Link
                                href={NavBarOptionsData[RouteBases.home].href}
                            >
                                {NavBarOptionsData[RouteBases.home].label}
                            </Link>
                        </MenubarTrigger>
                    </MenubarMenu>

                    <NavigationStaticMenu />
                </nav>

                <SheetFooter>
                    <SheetClose asChild>
                        <Button
                            variant="outline"
                            className="mx-auto w-full max-w-70"
                        >
                            Закрити
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default BurgerMenu;
