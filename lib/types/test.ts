import { TestParts, TestTypeLabels } from '../constants/tests';
import { RouteBaseMain } from './routeBase';
import { DataByLanguage } from './types';

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

export type TestPart = (typeof TestParts)[keyof typeof TestParts];

export type TestPartLabelData = Record<TestPart, DataByLanguage>;
