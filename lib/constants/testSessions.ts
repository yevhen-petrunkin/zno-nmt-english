import { TestSessionData } from '../types/testSession';

export const TestSessionIds = {
    demo: 'demo',
    main: 'main',
    extra: 'extra',
} as const;

export const TestSessionLabels = {
    [TestSessionIds.demo]: 'Пробна сесія',
    [TestSessionIds.main]: 'Основна сесія',
    [TestSessionIds.extra]: 'Додаткова сесія',
} as const;

export const TestSessions: TestSessionData = {
    [TestSessionIds.demo]: {
        id: TestSessionIds.demo,
        label: TestSessionLabels.demo,
    },
    [TestSessionIds.main]: {
        id: TestSessionIds.main,
        label: TestSessionLabels.main,
    },
    [TestSessionIds.extra]: {
        id: TestSessionIds.extra,
        label: TestSessionLabels.extra,
    },
} as const;
