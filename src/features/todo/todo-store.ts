import { persistentAtom } from "@nanostores/persistent";
import { computed } from "nanostores";

// Definiciones de tipos (iguales que en tu código original)
export interface Task {
  id: string;
  name: string;
  completed: boolean;
  active: boolean;
}

interface Filters {
  status: "all" | "completed" | "active";
}

interface State {
  taskList: Task[];
  filters: Filters;
  // No incluimos las acciones en la interfaz de estado persistido
}

// --- Estado Inicial ---
const initialTaskList: Task[] = [
  {
    name: "Complete online JavaScript course",
    id: "abc-001",
    completed: true,
    active: true,
  },
  {
    name: "Jog around the park 3x",
    id: "abc-002",
    completed: false,
    active: true,
  },
  {
    name: "10 minutes meditation",
    id: "abc-003",
    completed: false,
    active: true,
  },
  { name: "Read for 1h", id: "abc-004", completed: false, active: true },
  {
    name: "Pick up groceries",
    id: "abc-005",
    completed: false,
    active: true,
  },
  {
    name: "Complete Todo App on Fronted Mentor",
    id: "abc-006",
    completed: false,
    active: true,
  },
];

const initialState: State = {
  taskList: initialTaskList,
  filters: { status: "all" },
};

// --- Átomo Persistente Agrupado (única llave en localStorage) ---
const $internalTodoStore = persistentAtom<State>('todo-app-state:', initialState, {
  encode: (val: State) => JSON.stringify(val),
  decode: (str: string): State => {
    try {
      const parsed = JSON.parse(str);
      // Validación básica de la estructura
      if (parsed && typeof parsed === 'object') {
        // Validamos taskList
        const taskList: Task[] = Array.isArray(parsed.taskList) 
          ? parsed.taskList.map(t => ({
              id: typeof t.id === 'string' ? t.id : '',
              name: typeof t.name === 'string' ? t.name : 'Tarea sin nombre',
              completed: typeof t.completed === 'boolean' ? t.completed : false,
              active: typeof t.active === 'boolean' ? t.active : true,
            }))
          : initialTaskList;

        // Validamos filters
        const filters: Filters = parsed.filters && typeof parsed.filters === 'object' && 
                                 ['all', 'completed', 'active'].includes(parsed.filters.status)
          ? { status: parsed.filters.status as "all" | "completed" | "active" }
          : { status: "all" };

        return { taskList, filters };
      }
      return initialState; // Si la estructura no es válida, retornamos el estado inicial
    } catch (e) {
      console.error("Error parsing todo state from localStorage:", e);
      return initialState; // Si hay un error de parseo, retornamos el estado inicial
    }
  }
});

// --- Átomos Computados (Selectores) ---
// Estos átomos se derivan del átomo persistente agrupado para facilitar el uso en componentes.
export const $taskList = computed($internalTodoStore, state => state.taskList);
export const $filters = computed($internalTodoStore, state => state.filters);

// --- Funciones de Acción ---

/**
 * Agrega una nueva tarea a la lista.
 */
export function addTask(text: string): void {
  const state = $internalTodoStore.get();
  const newTask: Task = {
    id: crypto.randomUUID(), // Asumiendo que crypto.randomUUID() está disponible
    name: text,
    completed: false,
    active: true,
  };
  const newTaskList = [...state.taskList, newTask];
  $internalTodoStore.set({ ...state, taskList: newTaskList });
}

/**
 * Elimina una tarea específica por su ID.
 */
export function deleteTask(id: string): void {
  const state = $internalTodoStore.get();
  const newTaskList = state.taskList.filter(task => task.id !== id);
  $internalTodoStore.set({ ...state, taskList: newTaskList });
}

/**
 * Actualiza los filtros de visualización.
 */
export function setFilters(filters: Filters): void {
  const state = $internalTodoStore.get();
  $internalTodoStore.set({ ...state, filters });
}

/**
 * Alterna el estado de completado de una tarea específica por su ID.
 */
export function toggleTask(id: string): void {
  const state = $internalTodoStore.get();
  const newTaskList = state.taskList.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  $internalTodoStore.set({ ...state, taskList: newTaskList });
}

/**
 * Elimina todas las tareas que están marcadas como completadas.
 */
export function deleteAllComplete(): void {
  const state = $internalTodoStore.get();
  const newTaskList = state.taskList.filter(task => !task.completed);
  $internalTodoStore.set({ ...state, taskList: newTaskList });
}

/**
 * Reemplaza la lista de tareas completa con una nueva lista.
 * (Útil si se quiere cargar desde un servidor, por ejemplo)
 */
export function updateList(newList: Task[]): void {
  const state = $internalTodoStore.get();
  $internalTodoStore.set({ ...state, taskList: newList });
}

// --- Cómo usarlo en un componente React ---
// En lugar de usarTodoStore(state => state.taskList), etc.,
// ahora usarías:
// const taskList = useStore($taskList);
// const filters = useStore($filters);
// Y las acciones como addTask, deleteTask, etc. se importan directamente.
//
// Ejemplo:
// import { useStore } from '@nanostores/react';
// import { $taskList, $filters, addTask, deleteTask, toggleTask } from '@/stores/todo.store';
//
// const TodoComponent = () => {
//   const taskList = useStore($taskList);
//   const filters = useStore($filters);
//
//   // ... renderizado y manejo de eventos ...
//   const handleAdd = (text: string) => addTask(text);
//   const handleDelete = (id: string) => deleteTask(id);
//   const handleToggle = (id: string) => toggleTask(id);
//   // ...
// };