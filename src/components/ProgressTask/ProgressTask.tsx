import { ProgressTaskWrapper } from "./ProgressTask.styles";
import { ProgressTaskProps } from "./ProgressTask.types";

export const ProgressTask = ({ tasksCount, completedTasksCount }: ProgressTaskProps) => {
    return (
        <ProgressTaskWrapper>
            <div className="">
                Tarefas criadas <span> {tasksCount} </span>
            </div>

            <div className="">
                Concluídas <span> {completedTasksCount} de {tasksCount} </span>
            </div>
        </ProgressTaskWrapper>
    );
}
