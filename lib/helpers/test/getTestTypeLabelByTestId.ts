import { INVALID_OPTION_LABEL } from '@/features/navigation-bar/lib/constants/navBarConstants';
import { RouteBasesMain } from '@/lib/constants/routeBases';
import parseTestIdString from '@/lib/helpers/test/parseTestIdString';

const optionMapObj = {
    [RouteBasesMain.zno]: 'ЗНО',
    [RouteBasesMain.nmt]: 'НМТ',
};

/**
 * Returns a label for a test, given its type.
 * If the id is invalid, null is returned.
 * @param {string} testType the type of the test ('zno' or  'nmt')
 * @returns {string} the label based on the test type
 */
const getTestTypeLabelByTestId = (testType: string): string => {
    const optionData = parseTestIdString(testType);

    if (!optionData) {
        return INVALID_OPTION_LABEL;
    }

    const testTypeLabel: string = optionMapObj[optionData.testType];

    return testTypeLabel
        ? `${testTypeLabel} ${optionData.testYear}`
        : INVALID_OPTION_LABEL;
};

export default getTestTypeLabelByTestId;
