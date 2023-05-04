import { useState } from 'react'
import { Trash } from '@phosphor-icons/react'

import { TaskWrapper } from './Task.styles'
import { TaskProps } from './Task.types'

export const Task = ({ id, title, isComplete = false, onDeleteTask }: TaskProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleDeleteTask = (id: string) => {
        onDeleteTask(id);
    }

    return (
        <TaskWrapper id={id}>
            <input
                type="checkbox"
                checked={isComplete}
                onChange={event => setIsChecked(event.target.checked)}
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
