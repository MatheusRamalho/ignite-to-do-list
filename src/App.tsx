import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import GlobalStyle from './styles/global'

import { TaskProps } from './components/Task/Task.types'

import { NewTask } from './components/NewTask'
import { ProgressTask } from './components/ProgressTask'
import { Task } from './components/Task'

export const App = () => {
	const handleAddNewTask = (taskTitle: string) => {
		let newTaskList = [...tasks];

		newTaskList.push({
			id: uuidv4(),
			title: taskTitle,
			isComplete: false,
			onDeleteTask: handleDeleteTask,
			onToggleTask: handleAddNewTask,
		});

		setTasks(newTaskList);
	}

	const handleDeleteTask = (id: string) => {
		let newTaskList = [...tasks];

		newTaskList.filter((element) => {
			if (element.id === id) {
				var index = newTaskList.indexOf(element);
				newTaskList.splice(index, 1);
			}
		});

		setTasks(newTaskList);
	}

	const handleToggleCheck = (id: string) => {
		let newTaskList = [...tasks];

		newTaskList.filter((element) => {
			if (element.id === id) {
				var index = newTaskList.indexOf(element);

				newTaskList[index].id = element.id;
				newTaskList[index].title = element.title;
				newTaskList[index].isComplete = element.isComplete === false ? true : false;
				newTaskList[index].onDeleteTask = element.onDeleteTask;
				newTaskList[index].onToggleTask = element.onToggleTask;
			}
		});

		setTasks(newTaskList);
	}

	const [tasks, setTasks] = useState<TaskProps[]>([
		{ id: uuidv4(), isComplete: false, title: "01 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquam aliquid magni animi incidunt velit, soluta porro sunt ipsa a deserunt neque tempore laborum vitae?", onDeleteTask: handleDeleteTask, onToggleTask: handleToggleCheck },
		{ id: uuidv4(), isComplete: false, title: "02 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquam aliquid magni animi incidunt velit, soluta porro sunt ipsa a deserunt neque tempore laborum vitae?", onDeleteTask: handleDeleteTask, onToggleTask: handleToggleCheck },
		{ id: uuidv4(), isComplete: true, title: "03 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquam aliquid magni animi incidunt velit, soluta porro sunt ipsa a deserunt neque tempore laborum vitae?", onDeleteTask: handleDeleteTask, onToggleTask: handleToggleCheck },
		{ id: uuidv4(), isComplete: false, title: "04 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquam aliquid magni animi incidunt velit, soluta porro sunt ipsa a deserunt neque tempore laborum vitae?", onDeleteTask: handleDeleteTask, onToggleTask: handleToggleCheck },
		{ id: uuidv4(), isComplete: true, title: "05 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquam aliquid magni animi incidunt velit, soluta porro sunt ipsa a deserunt neque tempore laborum vitae?", onDeleteTask: handleDeleteTask, onToggleTask: handleToggleCheck },
	]);

	const totalTasks = tasks.length;
	const completeTasks = tasks.filter(task => task.isComplete === true);
	const totalCompleteTasks = completeTasks.length;

	return (
		<div className="app">
			<GlobalStyle />

			<div className="app-wrapper">
				<NewTask onNewTask={handleAddNewTask} />

				<main className="app-main">
					<ProgressTask
						tasksCount={totalTasks}
						completedTasksCount={totalCompleteTasks}
					/>

					<div className="app-content">
						{tasks && tasks.map(task => {
							return (
								<Task
									key={task.id}
									id={task.id}
									title={task.title}
									isComplete={task.isComplete}
									onDeleteTask={handleDeleteTask}
									onToggleTask={handleToggleCheck}
								/>
							);
						})}
					</div>
				</main>
			</div>
		</div>
	)
}
