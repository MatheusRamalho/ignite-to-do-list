import { Trash } from '@phosphor-icons/react'

import { TaskWrapper } from './Task.styles'
import { TaskProps } from './Task.types'

export const Task = ({ id, title, isComplete = false, onDeleteTask, onToggleTask }: TaskProps) => {
    const handleDeleteTask = (id: string) => {
        onDeleteTask(id);
    }

    const handleToggleTask = (id: string) => {
        onToggleTask(id);
    }

    return (
        <TaskWrapper id={id}>
            <input
                type="checkbox"
                checked={isComplete}
                onChange={() => handleToggleTask(id)}
            />

            <p className={`${isComplete && 'line-through'}`}> {title} </p>

            <button
                type="button"
                title="Deletar tarefa"
                onClick={() => handleDeleteTask(id)}
            >
                <Trash size={24} color="#808080" />
            </button>
        </TaskWrapper>
    );
}
