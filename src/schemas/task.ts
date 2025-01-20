export interface Task {
  title: string
  id: string
  status: Status
  priority: Priority
  points?: number
}

export type Status = 'todo' | 'in-progress' | 'done'
export type Priority = 'low' | 'medium' | 'high'
