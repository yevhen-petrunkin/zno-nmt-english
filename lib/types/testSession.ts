import { TestSessionIds } from '../constants/testSessions';

export type TestSessionId =
    (typeof TestSessionIds)[keyof typeof TestSessionIds];

export type TestSession = {
    id: TestSessionId;
    label: string;
};

export type TestSessionData = Record<TestSessionId, TestSession>;
