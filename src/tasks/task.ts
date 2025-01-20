import {Priority, Status, Task} from "../schemas/task.ts";

export const tasks: Task[] = [
    {
        title: 'Do Market Research',
        id: 'BUS-1',
        status: 'todo',
        priority: 'high',
        points: 5,
    },
    {
        title: 'Do Exercise',
        id: 'BUS-4',
        status: 'todo',
        priority: 'low',
        points: 5,
    },
    {
        title: 'Running',
        id: 'BUS-5',
        status: 'todo',
        priority: 'low',
        points: 5,
    },
    {
        title: 'Read Books',
        id: 'BUS-6',
        status: 'todo',
        priority: 'medium',
        points: 5,
    },
    {
        title: 'Go Hiking',
        id: 'BUS-7',
        status: 'todo',
        priority: 'low',
        points: 5,
    },
    {
        title: 'Competitor analysis',
        id: 'BUS-2',
        status: 'in-progress',
        priority: 'medium',
    },
    {
        title: 'Develop Business Strategy',
        id: 'BUS-3',
        status: 'done',
        priority: 'low',
        points: 8,
    }
]

export const statuses: Status[] = ['todo', 'in-progress', 'done'];
export const priorities: Priority[] = ['low', 'medium', 'high'];
