export interface Task {
  title: string
  id: string
  status: Status
  points?: number
}

export type Status = 'todo' | 'in-progress' | 'done'
