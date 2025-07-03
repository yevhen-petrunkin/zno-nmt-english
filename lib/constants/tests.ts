import { TestPartLabelData } from '../types/test';
import { RouteBasesMain } from './routeBases';

export const TestTypeLabels = {
    [RouteBasesMain.zno]: 'ЗНО',
    [RouteBasesMain.nmt]: 'НМТ',
} as const;

export const TestParts = {
    listening: 'listening',
    reading: 'reading',
    useOfLanguage: 'use-of-language',
    writing: 'writing',
} as const;

export const TaskTestPartLabels: TestPartLabelData = {
    [TestParts.listening]: {
        eng: 'Listening',
        ukr: 'РОЗУМІННЯ МОВИ НА СЛУХ (АУДІЮВАННЯ)',
    },
    [TestParts.reading]: {
        eng: 'Reading',
        ukr: 'ЧИТАННЯ',
    },
    [TestParts.useOfLanguage]: {
        eng: 'Use of English',
        ukr: 'ВИКОРИСТАННЯ МОВИ',
    },
    [TestParts.writing]: {
        eng: 'Writing',
        ukr: 'ПИСЬМО',
    },
} as const;
