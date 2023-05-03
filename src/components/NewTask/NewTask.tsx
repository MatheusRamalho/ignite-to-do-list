import { FormEvent, useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'

import { NewTaskWrapper } from './NewTask.styles'
import { NewTaskProps } from './NewTask.types'

import logoSvg from '../../assets/logo-full.svg'

export const NewTask = ({ onNewTask }: NewTaskProps) => {
    const [newTask, setNewTask] = useState('');

    const handleCreateNewTask = (event: FormEvent) => {
        event.preventDefault();
        onNewTask(newTask);
        setNewTask('');
    }

    return (
        <NewTaskWrapper>
            <img
                src={logoSvg}
                alt="Logo Todo, escrito to em azul e do em roxo, com um desenho de um foguete"
            />

            <div className="new-task-wrapper">
                <form
                    className="new-task-form"
                    id="formBanner"
                    onSubmit={handleCreateNewTask}
                >
                    <input
                        required
                        type="text"
                        id="new-task-input"
                        name="new-text-input"
                        placeholder='Adicione uma nova tarefa...'
                        value={newTask}
                        onChange={event => setNewTask(event.target.value)}
                    />

                    <button type="submit">
                        Criar
                        <PlusCircle size={20} weight="fill" />
                    </button>
                </form>
            </div>
        </NewTaskWrapper>
    );
}
