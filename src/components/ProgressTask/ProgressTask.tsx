interface ProgressTaskProps {
    tasksCount: number
    completedTasksCount: number
}

export function ProgressTask({
    tasksCount,
    completedTasksCount,
}: ProgressTaskProps) {
    return (
        <div className="flex items-center justify-between">
            <div className="font-bold text-blue-300 flex items-center justify-between gap-2">
                Tarefas criadas
                <span className="py-1 px-3 rounded-md bg-gray-700 text-base text-gray-200 inline-flex items-center justify-center">
                    {tasksCount}
                </span>
            </div>

            <div className="font-bold text-purple-300 flex items-center justify-between gap-2">
                Concluídas
                <span className="p-1 px-3 rounded-md bg-gray-700 text-base text-gray-200 inline-flex items-center justify-center">
                    {completedTasksCount} de {tasksCount}
                </span>
            </div>
        </div>
    )
}
