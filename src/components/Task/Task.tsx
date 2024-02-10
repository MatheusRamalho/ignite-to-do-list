import { Icon } from '../Icon'

interface TaskProps {
    id: string
    title: string
    isComplete?: boolean
    onDeleteTask: (taskId: string) => void
    onToggleTask: (taskId: string) => void
}

export function Task({
    id,
    title,
    isComplete = false,
    onDeleteTask,
    onToggleTask,
}: TaskProps) {
    const handleDeleteTask = (id: string) => {
        onDeleteTask(id)
    }

    const handleToggleTask = (id: string) => {
        onToggleTask(id)
    }

    return (
        <div
            id={id}
            className="flex items-start justify-between gap-6 p-6 mb-3 border border-gray-600 rounded-lg bg-gray-700"
        >
            <input
                className="
                    relative cursor-pointer size-0 mr-4 focus:shadow-none
                    before:content-[''] before:absolute before:top-0 before:left-0 before:size-6 before:rounded-full before:border-2 before:border-blue-500 before:bg-transparent
                    checked:before:border-purple-500 checked:before:bg-purple-500
                    checked:after:content-[''] checked:after:absolute checked:after:top-[5px] checked:after:left-[9px] checked:after:w-[0.313rem] checked:after:h-[0.625rem] checked:after:rounded-full checked:after:border-r-[3px] checked:after:border-b-[3px] checked:after:border-white checked:after:rotate-45
                    hover:checked:before:border-purple-300 hover:checked:before:bg-purple-300
                "
                type="checkbox"
                checked={isComplete}
                onChange={() => handleToggleTask(id)}
            />

            <p
                className={`flex-1 text-base text-gray-100 leading-[160%] ${
                    isComplete && '!text-gray-400 line-through'
                }`}
            >
                {title}
            </p>

            <button
                className="w-10 h-9 cursor-pointer p-1 border-none rounded-md bg-transparent flex items-center justify-center group bg-gray-600"
                type="button"
                title="Deletar tarefa"
                onClick={() => handleDeleteTask(id)}
            >
                <Icon
                    name="trash-2"
                    customClass="size-5 text-gray-300 group-hover:text-red-500"
                />
            </button>
        </div>
    )
}
