import {
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
} from '@/components/ui/menubar';
import { TestSessions } from '@/lib/constants/testSessions';
import { TestSessionId } from '@/lib/types/testSession';
import Link from 'next/link';

import {
    SubMenuOptions,
    SubMenuTypes,
} from '../../lib/constants/subMenuOptions';
import getTasksSubMenuLabelByOptionId from '../../lib/helpers/getTasksSubMenuLabelByOptionId';
import { NavBarSubOption } from '../../lib/types/navbarTypes';
import { SubMenuType } from '../../lib/types/subMenuTypes';

const NavigationSubMenu = ({
    options,
    type,
}: {
    options: NavBarSubOption[];
    type: SubMenuType;
}) => {
    const pathnameBase =
        type === SubMenuTypes.test ? SubMenuTypes.test : SubMenuTypes.tasks;

    return (
        <MenubarContent className="max-w-50 min-w-24">
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
                            <div
                                className="overflow-y-hidden data-[type=true]:h-54"
                                data-type={type === SubMenuTypes.tasks}
                            >
                                <div className="h-full overflow-y-auto">
                                    {option?.subOptions?.length > 0
                                        ? option?.subOptions.map(subOption => (
                                              <MenubarItem key={subOption}>
                                                  <Link
                                                      href={`/${pathnameBase}/${option.subId}/${subOption}`}
                                                  >
                                                      {type ===
                                                      SubMenuTypes.test
                                                          ? TestSessions[
                                                                subOption as TestSessionId
                                                            ].label
                                                          : getTasksSubMenuLabelByOptionId(
                                                                subOption,
                                                            )}
                                                  </Link>
                                              </MenubarItem>
                                          ))
                                        : null}
                                </div>
                            </div>
                        </MenubarSubContent>
                    </MenubarSub>
                );
            })}
        </MenubarContent>
    );
};

export default NavigationSubMenu;
