import { TestSessionIds } from '../constants/testSessions';

export type TestSessionId =
    (typeof TestSessionIds)[keyof typeof TestSessionIds];
