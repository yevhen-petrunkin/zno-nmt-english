import { TEST_TYPE_REGEX } from '../patterns/test';
import { RouteBaseMain } from '../types/routeBase';
import { TestIdData } from '../types/test';

/**
 * Parses a test ID string and extracts the test type and year.
 * The test ID must match the TEST_TYPE_REGEX pattern.
 *
 * @param {string} testId - The test ID string to parse.
 * @returns {object | null} An object containing the testType and testYear
 * if the testId is valid, otherwise null.
 */
const parseTestIdString = (testId: string): TestIdData | null => {
    if (!TEST_TYPE_REGEX.test(testId)) {
        return null;
    }

    const [testType, testYear] = testId.split('_');

    return {
        testType: testType as RouteBaseMain,
        testYear,
    };
};

export default parseTestIdString;
