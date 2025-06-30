export const ReadingTaskTypes = {
    simpleMatch4: 'simpleMatch',
    multipleChoice5: 'multipleChoice',
    match6: 'match',
    synonyms7: 'synonyms',
    grammar8: 'grammar',
} as const;

export const ReadingTaskNumbers = {
    [ReadingTaskTypes.simpleMatch4]: '4/1',
    [ReadingTaskTypes.multipleChoice5]: '5/2',
    [ReadingTaskTypes.match6]: '6/3',
    [ReadingTaskTypes.synonyms7]: '7/4',
    [ReadingTaskTypes.grammar8]: '8/5',
} as const;
