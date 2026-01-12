import { $filters, $taskList, updateList } from "@/features/todo/todo-store";
import { closestCenter, DndContext, type DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useStore } from "@nanostores/react";
import { css } from "@styled-system/css";
import { Filters, ListFooter } from "./ListFooter";
import NewTask from "./NewTask";
import { list, listFooter, wrapper } from "./styles";
import { Task } from "./Task";

export const TaskList = () => {
  const taskList = useStore($taskList);
  const filters = useStore($filters);

  const filteredList = taskList.filter((task) => {
    if (filters.status === "all") return true;
    if (filters.status === "active") return task.active === true;
    if (filters.status === "completed") return task.completed === true;
  });

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (!over) return;
    if (active.id !== over.id) {
      const oldIndex = taskList.findIndex((task) => task.id === active.id);
      const newIndex = taskList.findIndex((task) => task.id === over.id);
      updateList(arrayMove(taskList, oldIndex, newIndex));
    }
  };
  return (
    <>
      <div className={wrapper}>
        <NewTask />
      </div>

      <div className={`${wrapper} ${list}`}>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={filteredList}
            strategy={verticalListSortingStrategy}
          >
            {filteredList.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </SortableContext>
        </DndContext>
        <ListFooter />
      </div>
      <div className={css({ display: { base: "block", md: "none" } })}>
        <div className={`${listFooter} list-mobile`}>
          <Filters />
        </div>
      </div>
    </>
  );
};
