import { toggleTask, type Task as TaskType } from "@/features/todo/todo-store";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DeleteButton from "./DeleteButton";
import { task as taskClass } from "./styles";

export const Task = ({ task }: { task: TaskType }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <article className={`${taskClass} task`} key={task.id} ref={setNodeRef} style={style}>
      <input
        type="checkbox"
        id={`check-${task.id}`}
        name={`taskCheck-${task.id}`}
        defaultChecked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <label htmlFor={`check-${task.id}`} className="checkIcon"></label>

      <span
        {...attributes}
        {...listeners}
        className={`${task.completed ? "completed" : ""}`}
        id={`name-${task.id}`}
      >{task.name}</span>
      <DeleteButton id={task.id} />
    </article>
  );
};
