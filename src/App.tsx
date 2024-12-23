import React, { useState, useCallback, useMemo } from 'react';
import { CheckSquare } from 'lucide-react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';
import type { Todo, TodoFilters as Filters } from './types/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filters, setFilters] = useState<Filters>({});

  const handleAddTodo = useCallback((newTodo: Omit<Todo, 'id' | 'createdAt'>) => {
    setTodos(prev => [...prev, {
      ...newTodo,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    }]);
  }, []);

  const handleStatusChange = useCallback((id: string, status: Todo['status']) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, status } : todo
    ));
  }, []);

  const handleDelete = useCallback((id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    todos.forEach(todo => todo.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags);
  }, [todos]);

  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      if (filters.category && todo.category !== filters.category) return false;
      if (filters.status && todo.status !== filters.status) return false;
      if (filters.tags?.length && !filters.tags.some(tag => todo.tags.includes(tag))) return false;
      return true;
    });
  }, [todos, filters]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <CheckSquare className="w-8 h-8 text-blue-500 mr-2" />
          <h1 className="text-3xl font-bold text-gray-900">Developer Todo List</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <TodoFilters
              filters={filters}
              onFilterChange={setFilters}
              availableTags={availableTags}
            />
          </div>

          <div className="lg:col-span-3 space-y-6">
            <TodoForm onSubmit={handleAddTodo} />
            <TodoList
              todos={filteredTodos}
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;