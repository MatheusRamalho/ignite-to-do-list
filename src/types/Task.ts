export interface TaskType {
    id: string
    title: string
    isComplete?: boolean
    onDeleteTask: (taskId: string) => void
    onToggleTask: (taskId: string) => void
}
