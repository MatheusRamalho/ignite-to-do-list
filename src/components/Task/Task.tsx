// import { useState } from 'react'
import { Trash } from '@phosphor-icons/react'

import { TaskWrapper } from './Task.styles'
import { TaskProps } from './Task.types'

export const Task = ({ id, title, isComplete = false }: TaskProps) => {
    // const [isChecked, setIsChecked] = useState(false);

    const handleToggleStatusTask = () => {
        if (isComplete === true) {
            isComplete = false;
        } else {
            isComplete = true;
        }
    }

    const handleDeleteTask = (id: string) => {
        console.log(id);
    }

    return (
        <TaskWrapper id={id}>
            <input
                type="checkbox"
                checked={isComplete}
                // onChange={e => setIsChecked(e.target.checked)}
                onClick={handleToggleStatusTask}
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
