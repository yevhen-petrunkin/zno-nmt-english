import { SubMenuTypes } from '../constants/subMenuOptions';

export type SubMenuType = (typeof SubMenuTypes)[keyof typeof SubMenuTypes];
