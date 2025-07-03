/**
 * Generates task instruction based on the task number.
 *
 * @param {Object} params - The parameters for the function.
 * @param {number} params.taskNumber - The task number to determine the instruction (as counted in ZNO test).
 * @param {string} [params.questionsRange=''] - The range of questions of the task (e.g. '1-5').
 * @param {string} [params.answersRange=''] - The range of answers of the task (e.g. 'A-D').
 * @returns {string} The generated instruction for the specified task number. If the task number
 * is not recognized, returns 'Instruction is not available'.
 */
const getTaskInstructionByTaskNumber = ({
    taskNumber,
    questionsRange = '',
    answersRange = '',
}: {
    taskNumber: number;
    questionsRange?: string;
    answersRange?: string;
}) => {
    switch (taskNumber) {
        case 4:
            return `See the elements (texts or pictures) below. Match choices (${answersRange}) to (${questionsRange}). There are three choices you do not need to use.`;
        case 5:
            return `Read the text below. For questions (${questionsRange}) choose the correct answer (${answersRange}).`;
        case 6:
            return `See the elements (texts or pictures) below. Match choices (${answersRange}) to (${questionsRange}). There are two choices you do not need to use.`;
        case 7:
            return `Read the text below. Choose from (${answersRange}) the one which best fits each space (${questionsRange}). There are two choices you do not need to use.`;
        case 8:
            return `Read the text below. For questions (${questionsRange}) choose the correct answer (${answersRange}).`;
        case 9:
            return `Read the text below. For questions (${questionsRange}) choose the correct answer (${answersRange}).`;
        default:
            return 'Instruction is not available';
    }
};

export default getTaskInstructionByTaskNumber;
