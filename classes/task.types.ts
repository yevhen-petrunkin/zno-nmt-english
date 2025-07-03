import { TestSessionId } from '@/lib/types/testSession';

export interface TaskConfig {
    testId: string;
    testSession: TestSessionId;
    taskId: string;
    taskNumber: number;
    questionNumbers: number[];
    answerLetters: string[];
}
