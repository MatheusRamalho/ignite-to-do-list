'use client'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { TaskType } from '@/types/Task'

import { NewTask } from '@/components/NewTask'
import { ProgressTask } from '@/components/ProgressTask'
import { Task } from '@/components/Task'

export default function Home() {
    const handleAddNewTask = (taskTitle: string) => {
        const newTaskList = [...tasks]

        newTaskList.push({
            id: uuidv4(),
            title: taskTitle,
            isComplete: false,
            onDeleteTask: handleDeleteTask,
            onToggleTask: handleAddNewTask,
        })

        setTasks(newTaskList)
    }

    const handleDeleteTask = (id: string) => {
        const newTaskList = [...tasks]

        newTaskList.filter((element) => {
            if (element.id === id) {
                const index = newTaskList.indexOf(element)
                newTaskList.splice(index, 1)

                return false
            }

            return true
        })

        setTasks(newTaskList)
    }

    const handleToggleCheck = (id: string) => {
        const newTaskList = [...tasks]

        newTaskList.filter((element) => {
            if (element.id === id) {
                const index = newTaskList.indexOf(element)

                newTaskList[index].id = element.id
                newTaskList[index].title = element.title
                newTaskList[index].isComplete = element.isComplete === false
                newTaskList[index].onDeleteTask = element.onDeleteTask
                newTaskList[index].onToggleTask = element.onToggleTask

                return false
            }

            return true
        })

        setTasks(newTaskList)
    }

    const [tasks, setTasks] = useState<TaskType[]>([
        {
            id: uuidv4(),
            isComplete: false,
            title: '01 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquam aliquid magni animi incidunt velit, soluta porro sunt ipsa a deserunt neque tempore laborum vitae?',
            onDeleteTask: handleDeleteTask,
            onToggleTask: handleToggleCheck,
        },
        {
            id: uuidv4(),
            isComplete: false,
            title: '02 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquam aliquid magni animi incidunt velit, soluta porro sunt ipsa a deserunt neque tempore laborum vitae?',
            onDeleteTask: handleDeleteTask,
            onToggleTask: handleToggleCheck,
        },
        {
            id: uuidv4(),
            isComplete: true,
            title: '03 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquam aliquid magni animi incidunt velit, soluta porro sunt ipsa a deserunt neque tempore laborum vitae?',
            onDeleteTask: handleDeleteTask,
            onToggleTask: handleToggleCheck,
        },
        {
            id: uuidv4(),
            isComplete: false,
            title: '04 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquam aliquid magni animi incidunt velit, soluta porro sunt ipsa a deserunt neque tempore laborum vitae?',
            onDeleteTask: handleDeleteTask,
            onToggleTask: handleToggleCheck,
        },
        {
            id: uuidv4(),
            isComplete: true,
            title: '05 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquam aliquid magni animi incidunt velit, soluta porro sunt ipsa a deserunt neque tempore laborum vitae?',
            onDeleteTask: handleDeleteTask,
            onToggleTask: handleToggleCheck,
        },
    ])

    const totalTasks = tasks.length
    const completeTasks = tasks.filter((task) => task.isComplete === true)
    const totalCompleteTasks = completeTasks.length

    return (
        <div className="h-full flex flex-col items-start">
            <NewTask onNewTask={handleAddNewTask} />

            <main className="container mx-auto max-w-[1024px] p-4 pt-32">
                <ProgressTask
                    tasksCount={totalTasks}
                    completedTasksCount={totalCompleteTasks}
                />

                <div className="mt-8">
                    {tasks &&
                        tasks.map((task) => {
                            return (
                                <Task
                                    key={task.id}
                                    id={task.id}
                                    title={task.title}
                                    isComplete={task.isComplete}
                                    onDeleteTask={handleDeleteTask}
                                    onToggleTask={handleToggleCheck}
                                />
                            )
                        })}
                </div>
            </main>
        </div>
    )
}
