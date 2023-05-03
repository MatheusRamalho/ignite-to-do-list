import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import GlobalStyle from './styles/global'

import { TaskProps } from './components/Task/Task.types'

import { NewTask } from './components/NewTask'
import { ProgressTask } from './components/ProgressTask'
import { Task } from './components/Task'

export const App = () => {
	const [tasks, setTasks] = useState<TaskProps[]>([
		{ id: uuidv4(), isComplete: false, title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquam aliquid magni animi incidunt velit, soluta porro sunt ipsa a deserunt neque tempore laborum vitae?" },
		{ id: uuidv4(), isComplete: false, title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquam aliquid magni animi incidunt velit, soluta porro sunt ipsa a deserunt neque tempore laborum vitae?" },
		{ id: uuidv4(), isComplete: true, title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquam aliquid magni animi incidunt velit, soluta porro sunt ipsa a deserunt neque tempore laborum vitae?" },
		{ id: uuidv4(), isComplete: false, title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquam aliquid magni animi incidunt velit, soluta porro sunt ipsa a deserunt neque tempore laborum vitae?" },
		{ id: uuidv4(), isComplete: true, title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquam aliquid magni animi incidunt velit, soluta porro sunt ipsa a deserunt neque tempore laborum vitae?" },
	]);

	const totalTasks = tasks.length;
	const completeTasks = tasks.filter(task => task.isComplete === true);
	const totalCompleteTasks = completeTasks.length;

	const handleAddNewTask = (taskTitle: string) => {
		let newTaskList = [...tasks];

		newTaskList.push({
			id: uuidv4(),
			title: taskTitle,
			isComplete: false,
		});

		setTasks(newTaskList);
	}

	return (
		<div className="app">
			<GlobalStyle />

			<div className="wrapper">
				<NewTask onNewTask={handleAddNewTask} />

				<main className="main">
					<ProgressTask
						tasksCount={totalTasks}
						completedTasksCount={totalCompleteTasks}
					/>

					<div className="content">
						{tasks && tasks.map(task => {
							return (
								<Task
									key={task.id}
									id={task.id}
									title={task.title}
									isComplete={task.isComplete}
								/>
							);
						})}
					</div>
				</main>
			</div>
		</div>
	)
}
