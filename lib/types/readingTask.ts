import {
    ReadingTaskNumbers,
    ReadingTaskTypes,
} from '../constants/readingTasks';

export type ReadingTaskType =
    (typeof ReadingTaskTypes)[keyof typeof ReadingTaskTypes];

export type ReadingTaskNumber =
    (typeof ReadingTaskNumbers)[keyof typeof ReadingTaskNumbers];
