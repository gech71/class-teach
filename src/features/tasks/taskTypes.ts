export type TaskFilter = "all" | "completed" | "active";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}
