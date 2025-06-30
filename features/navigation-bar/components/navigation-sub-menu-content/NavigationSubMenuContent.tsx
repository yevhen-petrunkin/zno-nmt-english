import { MenubarItem } from '@/components/ui/menubar';
import { TestSessions } from '@/lib/constants/testSessions';
import { TestSessionId } from '@/lib/types/testSession';
import Link from 'next/link';
import React from 'react';

import { SubMenuTypes } from '../../lib/constants/subMenuOptions';
import getTasksSubMenuLabelByOptionId from '../../lib/helpers/getTasksSubMenuLabelByOptionId';
import { NavBarSubOption } from '../../lib/types/navbarTypes';
import { SubMenuType } from '../../lib/types/subMenuTypes';

const NavigationSubMenuContent = ({
    option,
    type,
}: {
    option: NavBarSubOption;
    type: SubMenuType;
}) => {
    const pathnameBase =
        type === SubMenuTypes.test ? SubMenuTypes.test : SubMenuTypes.tasks;

    return (
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
                                  {type === SubMenuTypes.test
                                      ? TestSessions[subOption as TestSessionId]
                                            .label
                                      : getTasksSubMenuLabelByOptionId(
                                            subOption,
                                        )}
                              </Link>
                          </MenubarItem>
                      ))
                    : null}
            </div>
        </div>
    );
};

export default NavigationSubMenuContent;
