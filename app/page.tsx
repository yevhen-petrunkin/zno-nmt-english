import Task from '@/classes/Task';
import SectionHero from '@/sections/section-hero/SectionHero';

export default function Home() {
    const task = new Task({
        testId: 'nmt_2023',
        testSession: 'extra',
        taskId: 'dfgwrtyqw98ys9gq',
        taskNumber: Number('4'),
        questionNumbers: [17, 18, 19, 20, 21],
        answerLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    });

    console.log('getTestId', task.getTestId());
    console.log('getTestSession', task.getTestSession());
    console.log('getTestType', task.getTestType());
    console.log('getTestYear', task.getTestYear());
    console.log('getTestLabel', task.getTestLabel());
    console.log('getTaskId', task.getTaskId());
    console.log('getTaskNumber', task.getTaskNumber());
    console.log('getTaskTitle', task.getTaskTitle());
    console.log('getTaskLabel', task.getTaskLabel());
    console.log('getTaskInstruction', task.getTaskInstruction());
    return <SectionHero />;
}
