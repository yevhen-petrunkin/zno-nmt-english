import { TaskCompetences } from '../constants/tasks';
import { DataByLanguage } from './types';

export type TaskCompetence =
    (typeof TaskCompetences)[keyof typeof TaskCompetences];

export type TaskCompetenceLabelData = Record<TaskCompetence, DataByLanguage>;
