import {
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
} from '@/components/ui/menubar';

import { NavBarSubOption } from '../../lib/types/navbarTypes';

const NavigationSubMenu = ({ options }: { options: NavBarSubOption[] }) => {
    return (
        <MenubarContent>
            <MenubarItem disabled>Рік</MenubarItem>
            <MenubarSeparator />
            {options.map(option => {
                return (
                    <MenubarSub key={option.subId}>
                        <MenubarSubTrigger>{option.subLabel}</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem disabled>Сесія</MenubarItem>
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
