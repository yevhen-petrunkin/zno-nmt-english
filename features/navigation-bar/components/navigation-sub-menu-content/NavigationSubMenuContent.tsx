import { MenubarItem } from '@/components/ui/menubar';
import Link from 'next/link';
import React from 'react';

import { INVALID_OPTION_LABEL } from '../../lib/constants/navBarConstants';
import { SubMenuTypes } from '../../lib/constants/subMenuOptions';
import getSubMenuLabelByOptionId from '../../lib/helpers/getSubMenuLabelByOptionId';
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
                                  {getSubMenuLabelByOptionId(subOption, type) ??
                                      INVALID_OPTION_LABEL}
                              </Link>
                          </MenubarItem>
                      ))
                    : null}
            </div>
        </div>
    );
};

export default NavigationSubMenuContent;
