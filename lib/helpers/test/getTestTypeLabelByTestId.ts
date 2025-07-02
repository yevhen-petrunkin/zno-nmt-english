import { TestTypeLabels } from '@/lib/constants/tests';
import parseTestIdString from '@/lib/helpers/test/parseTestIdString';

/**
 * Returns a label for a test, given its id.
 * If the id is invalid, null is returned.
 * @param {string} testId The test ID string
 * @returns {string | null} the label based on the test type or null
 */
const getTestTypeLabelByTestId = (testId: string): string | null => {
    const optionData = parseTestIdString(testId);

    if (!optionData) {
        return null;
    }

    const testTypeLabel = TestTypeLabels[optionData.testType];

    return testTypeLabel ? `${testTypeLabel} ${optionData.testYear}` : null;
};

export default getTestTypeLabelByTestId;
