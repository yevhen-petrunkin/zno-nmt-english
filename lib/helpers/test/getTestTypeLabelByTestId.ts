import { INVALID_OPTION_LABEL } from '@/features/navigation-bar/lib/constants/navBarConstants';
import { TestTypeLabels } from '@/lib/constants/tests';
import parseTestIdString from '@/lib/helpers/test/parseTestIdString';

/**
 * Returns a label for a test, given its id.
 * If the id is invalid, null is returned.
 * @param {string} testId The test ID string
 * @returns {string} the label based on the test type
 */
const getTestTypeLabelByTestId = (testId: string): string => {
    const optionData = parseTestIdString(testId);

    if (!optionData) {
        return INVALID_OPTION_LABEL;
    }

    const testTypeLabel = TestTypeLabels[optionData.testType];

    return testTypeLabel
        ? `${testTypeLabel} ${optionData.testYear}`
        : INVALID_OPTION_LABEL;
};

export default getTestTypeLabelByTestId;
