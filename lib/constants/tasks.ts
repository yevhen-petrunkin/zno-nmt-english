import { TaskCompetenceLabelData } from '../types/task';

export const TaskCompetences = {
    reading: 'reading',
    listening: 'listening',
    speaking: 'speaking',
    writing: 'writing',
} as const;

export const TaskCompetenceLabels: TaskCompetenceLabelData = {
    [TaskCompetences.reading]: {
        eng: 'Reading',
        ukr: 'Читання',
    },
    [TaskCompetences.listening]: {
        eng: 'Listening',
        ukr: 'Аудіювання',
    },
    [TaskCompetences.speaking]: {
        eng: 'Speaking',
        ukr: 'Говоріння',
    },
    [TaskCompetences.writing]: {
        eng: 'Writing',
        ukr: 'Письмо',
    },
} as const;
