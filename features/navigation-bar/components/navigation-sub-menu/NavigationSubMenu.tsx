import {
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
} from '@/components/ui/menubar';

import { SubMenuOptions } from '../../lib/constants/subMenuOptions';
import { NavBarSubOption } from '../../lib/types/navbarTypes';
import { SubMenuType } from '../../lib/types/subMenuTypes';
import NavigationSubMenuContent from '../navigation-sub-menu-content/NavigationSubMenuContent';

const NavigationSubMenu = ({
    options,
    type,
}: {
    options: NavBarSubOption[];
    type: SubMenuType;
}) => {
    return (
        <MenubarContent className="z-50 max-w-50 min-w-24">
            <MenubarItem disabled>{SubMenuOptions[type].category}</MenubarItem>
            <MenubarSeparator />
            {options.map(option => {
                return (
                    <MenubarSub key={option.subId}>
                        <MenubarSubTrigger>{option.subLabel}</MenubarSubTrigger>
                        <MenubarSubContent className="max-w-54 min-w-24">
                            <MenubarItem disabled>
                                {SubMenuOptions[type].subCategory}
                            </MenubarItem>
                            <MenubarSeparator />
                            <NavigationSubMenuContent
                                option={option}
                                type={type}
                            />
                        </MenubarSubContent>
                    </MenubarSub>
                );
            })}
        </MenubarContent>
    );
};

export default NavigationSubMenu;
