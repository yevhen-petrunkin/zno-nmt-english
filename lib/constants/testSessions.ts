import { TestSessionData } from '../types/testSession';

export const TestSessionIds = {
    demo: 'demo',
    main: 'main',
    extra: 'extra',
} as const;

export const TestSessions: TestSessionData = {
    [TestSessionIds.demo]: {
        id: TestSessionIds.demo,
        label: 'Пробна сесія',
    },
    [TestSessionIds.main]: {
        id: TestSessionIds.main,
        label: 'Основна сесія',
    },
    [TestSessionIds.extra]: {
        id: TestSessionIds.extra,
        label: 'Додаткова сесія',
    },
} as const;
