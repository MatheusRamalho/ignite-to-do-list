import { useState } from 'react'
import { Trash } from '@phosphor-icons/react'

import { TaskWrapper } from './Task.styles'
import { TaskProps } from './Task.types'

export const Task = ({ }: TaskProps) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <TaskWrapper>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />

            <p className={`${isChecked && 'line-through'}`}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquam aliquid magni animi incidunt velit, soluta porro sunt ipsa a deserunt neque tempore laborum vitae? </p>

            <button type="button" title="Deletar tarefa">
                <Trash size={24} color="#808080" />
            </button>
        </TaskWrapper>
    );
}
