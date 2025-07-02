import { TestSessionId } from '@/lib/types/testSession';

import { TaskConfig } from './task.types';

class Task {
    private readonly _testId: string;
    private readonly _testSession: TestSessionId;

    private readonly _taskId: string;
    private readonly _taskNumber: number;

    private readonly _questionNumbers: number[];
    private readonly _answerLetters: string[];

    constructor({
        testId,
        testSession,
        taskId,
        taskNumber,
        questionNumbers,
        answerLetters,
    }: TaskConfig) {
        this._testId = testId;
        this._testSession = testSession;
        this._taskId = taskId;
        this._taskNumber = taskNumber;
        this._questionNumbers = questionNumbers;
        this._answerLetters = answerLetters;
    }

    getTestId(): string {
        return this._testId;
    }

    getTestSession(): TestSessionId {
        return this._testSession;
    }

    getTaskId(): string {
        return this._taskId;
    }

    getTaskNumber(): number {
        return this._taskNumber;
    }
}

export default Task;
