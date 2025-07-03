import { TestParts } from '@/lib/constants/tests';
import { TestPart } from '@/lib/types/test';

/**
 * Returns a test part based on the given task number.
 *
 * @param {number} taskNumber - The task number to determine the test part (as counted in ZNO test).
 * @returns {TestPart | null} the test part or null if the task number is not recognized.
 */
const getTestPartByTaskNumber = (taskNumber: number): TestPart | null => {
    if (
        !taskNumber ||
        typeof taskNumber !== 'number' ||
        Number.isNaN(Number(taskNumber))
    ) {
        return null;
    }

    if (taskNumber >= 1 && taskNumber <= 3) {
        return TestParts.listening;
    }

    if (taskNumber >= 4 && taskNumber <= 6) {
        return TestParts.reading;
    }

    if (taskNumber === 7 || taskNumber === 8) {
        return TestParts.useOfLanguage;
    }

    if (taskNumber === 9) {
        return TestParts.writing;
    }

    return null;
};

export default getTestPartByTaskNumber;
