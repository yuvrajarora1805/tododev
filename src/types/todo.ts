export type Category = 'urgent' | 'delegate' | 'hold' | 'scheduled';
export type Status = 'completed' | 'ongoing' | 'deferred';

export interface Todo {
  id: string;
  title: string;
  description: string;
  category: Category;
  status: Status;
  tags: string[];
  createdAt: Date;
  scheduledFor?: Date;
}

export interface TodoFilters {
  category?: Category;
  status?: Status;
  tags?: string[];
}