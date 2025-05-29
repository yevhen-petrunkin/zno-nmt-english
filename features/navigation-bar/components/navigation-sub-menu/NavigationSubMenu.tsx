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

const NavigationSubMenu = ({
    options,
    type,
}: {
    options: NavBarSubOption[];
    type: SubMenuType;
}) => {
    return (
        <MenubarContent>
            <MenubarItem disabled>{SubMenuOptions[type].category}</MenubarItem>
            <MenubarSeparator />
            {options.map(option => {
                return (
                    <MenubarSub key={option.subId}>
                        <MenubarSubTrigger>{option.subLabel}</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem disabled>
                                {SubMenuOptions[type].subCategory}
                            </MenubarItem>
                            <MenubarSeparator />
                            {option?.subOptions?.length > 0
                                ? option?.subOptions.map(subOption => (
                                      <MenubarItem key={subOption}>
                                          {subOption}
                                      </MenubarItem>
                                  ))
                                : null}
                        </MenubarSubContent>
                    </MenubarSub>
                );
            })}
        </MenubarContent>
    );
};

export default NavigationSubMenu;
