import GlobalStyle from './styles/global';

import { NewTask } from './components/NewTask'
import { Task } from './components/Task'
import { ProgressTask } from './components/ProgressTask'

export const App = () => {
	return (
		<div className="app">
			<GlobalStyle />

			<div className="wrapper">
				<NewTask />

				<main className="content">
					<ProgressTask
						tasks={100}
						completedTasks={25}
					/>

					<Task />
				</main>
			</div>
		</div>
	)
}
