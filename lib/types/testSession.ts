import { TestSessionIds, TestSessionLabels } from '../constants/testSessions';

export type TestSessionId =
    (typeof TestSessionIds)[keyof typeof TestSessionIds];

export type TestSessionLabel =
    (typeof TestSessionLabels)[keyof typeof TestSessionLabels];

export type TestSession = {
    id: TestSessionId;
    label: TestSessionLabel;
};

export type TestSessionData = Record<TestSessionId, TestSession>;
