import { TestTypeLabels } from '../constants/tests';
import { RouteBaseMain } from './routeBase';

export type TestType = RouteBaseMain;

export type TestIdData = {
    testType: TestType;
    testYear: string;
};

export type TestTypeLabel =
    (typeof TestTypeLabels)[keyof typeof TestTypeLabels];

export interface TestTypeData {
    testType: TestType;
    testTypeLabel: TestTypeLabel;
}
