import React from 'react';
import { CheckCircle2, Clock, AlertCircle, Users } from 'lucide-react';
import type { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  onStatusChange: (id: string, status: Todo['status']) => void;
  onDelete: (id: string) => void;
}

const categoryIcons = {
  urgent: <AlertCircle className="w-5 h-5 text-red-500" />,
  delegate: <Users className="w-5 h-5 text-purple-500" />,
  hold: <Clock className="w-5 h-5 text-yellow-500" />,
  scheduled: <Clock className="w-5 h-5 text-blue-500" />,
};

const statusColors = {
  completed: 'bg-green-100 text-green-800',
  ongoing: 'bg-blue-100 text-blue-800',
  deferred: 'bg-yellow-100 text-yellow-800',
};

export default function TodoList({ todos, onStatusChange, onDelete }: TodoListProps) {
  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              {categoryIcons[todo.category]}
              <div>
                <h3 className="font-semibold">{todo.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{todo.description}</p>
              </div>
            </div>
            <button
              onClick={() => onDelete(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <select
              value={todo.status}
              onChange={(e) => onStatusChange(todo.id, e.target.value as Todo['status'])}
              className={`text-sm px-3 py-1 rounded-full ${statusColors[todo.status]}`}
            >
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
              <option value="deferred">Deferred</option>
            </select>

            {todo.scheduledFor && (
              <span className="text-sm text-gray-500">
                📅 {new Date(todo.scheduledFor).toLocaleString()}
              </span>
            )}

            <div className="flex flex-wrap gap-2">
              {todo.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}