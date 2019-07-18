import { Task } from '../interfaces';
declare const tasks: Task[];
export declare const taskCategories: {
    waitingTasks: Task[];
    ongoingTasks: {
        myTasks: Task[];
        someoneTasks: Task[];
    };
    finishedTasks: {
        myTasks: Task[];
        someoneTasks: Task[];
    };
};
export default tasks;
