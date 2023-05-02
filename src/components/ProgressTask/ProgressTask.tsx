import { ProgressTaskWrapper } from "./ProgressTask.styles";
import { ProgressTaskProps } from "./ProgressTask.types";

export const ProgressTask = ({ tasks, completedTasks }: ProgressTaskProps) => {
    return (
        <ProgressTaskWrapper>
            <div className="">
                Tarefas criadas <span> {tasks} </span>
            </div>

            <div className="">
                Concluídas <span> {completedTasks} de {tasks} </span>
            </div>
        </ProgressTaskWrapper>
    );
}
