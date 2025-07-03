import { TaskCompetences } from '@/lib/constants/tasks';
import { TaskCompetence } from '@/lib/types/task';

const getTaskCompetenceByTaskNumber = (
    taskNumber: number,
): TaskCompetence | null => {
    if (
        !taskNumber ||
        typeof taskNumber !== 'number' ||
        Number.isNaN(Number(taskNumber))
    ) {
        return null;
    }

    if (taskNumber >= 1 && taskNumber <= 3) {
        return TaskCompetences.listening;
    }

    if (taskNumber >= 4 && taskNumber <= 8) {
        return TaskCompetences.reading;
    }

    if (taskNumber === 9) {
        return TaskCompetences.writing;
    }

    return null;
};

export default getTaskCompetenceByTaskNumber;
