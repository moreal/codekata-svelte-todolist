export interface TodoData {
  id: number,
  content: string;
  done: boolean;
  createdAt: Date;
  deadline: Date | null;
}

let filterDone = $state(false);
let todos = $state<TodoData[]>([]);

export function insertTodo(text: string) {
  todos = [...todos, {
    id: todos.length,
    content: text,
    done: false,
    deadline: null,
    createdAt: new Date(),
  }];
}

export function setFilter(value: boolean) {
  filterDone = value;
}

export function filteredTodos() {
  return filterDone ? todos : todos.filter(todo => !todo.done)
}
