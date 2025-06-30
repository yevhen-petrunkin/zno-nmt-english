import { MainRoutes } from '../constants/routes';

export type MainRoute = (typeof MainRoutes)[keyof typeof MainRoutes];
