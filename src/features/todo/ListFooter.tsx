import {
  $filters,
  $taskList,
  deleteAllComplete,
  setFilters,
} from "@/features/todo/todo-store";
import { useStore } from "@nanostores/react";
import { css } from "@styled-system/css";
import { listFooter } from "./styles";

export const ListFooter = () => {
  const taskList = useStore($taskList);

  return (
    <div className={listFooter}>
      <span>
        {`${
          taskList.filter((task) => !task.completed && task.active).length
        } items left`}
      </span>
      <div className={css({ display: { base: "none", md: "block" } })}>
        <Filters />
      </div>
      <button onClick={() => deleteAllComplete()}>Clear Completed</button>
    </div>
  );
};

export const Filters = () => {
  const {status} = useStore($filters);

  return (
    <div className="filter">
      <input
        type="radio"
        
        id="all"
        name="filter"
        value="all"
        onChange={(e) => setFilters({ status: "all" })}
      />
      <label htmlFor="all" className={css(status == 'all' && {color: 'todo.blue'})}>All</label>
      <input
        type="radio"
        
        id="active"
        name="filter"
        value="active"
        onChange={(e) => setFilters({ status: "active" })}
      />
      <label htmlFor="active" className={css(status == 'active' && {color: 'todo.blue'})}>Active</label>
      <input
        type="radio"
        
        id="completed"
        name="filter"
        value="completed"
        onChange={(e) => setFilters({ status: "completed" })}
      />
      <label htmlFor="completed" className={css(status == 'completed' && {color: 'todo.blue'})}>Completed</label>
    </div>
  );
};
