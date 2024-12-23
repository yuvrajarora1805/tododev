import React from 'react';
import type { Category, Status, TodoFilters } from '../types/todo';

interface TodoFiltersProps {
  filters: TodoFilters;
  onFilterChange: (filters: TodoFilters) => void;
  availableTags: string[];
}

export default function TodoFilters({ filters, onFilterChange, availableTags }: TodoFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      <h2 className="font-semibold text-lg">Filters</h2>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={filters.category || ''}
          onChange={(e) => onFilterChange({
            ...filters,
            category: e.target.value as Category || undefined
          })}
          className="w-full px-3 py-2 border rounded-md"
        >
          <option value="">All Categories</option>
          <option value="urgent">Urgent</option>
          <option value="delegate">Delegate</option>
          <option value="hold">Hold</option>
          <option value="scheduled">Scheduled</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select
          value={filters.status || ''}
          onChange={(e) => onFilterChange({
            ...filters,
            status: e.target.value as Status || undefined
          })}
          className="w-full px-3 py-2 border rounded-md"
        >
          <option value="">All Statuses</option>
          <option value="completed">Completed</option>
          <option value="ongoing">Ongoing</option>
          <option value="deferred">Deferred</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Tags</label>
        <select
          multiple
          value={filters.tags || []}
          onChange={(e) => onFilterChange({
            ...filters,
            tags: Array.from(e.target.selectedOptions, option => option.value)
          })}
          className="w-full px-3 py-2 border rounded-md"
        >
          {availableTags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
        <p className="text-xs text-gray-500">Hold Ctrl/Cmd to select multiple tags</p>
      </div>

      <button
        onClick={() => onFilterChange({})}
        className="w-full py-2 text-sm text-blue-600 hover:text-blue-800"
      >
        Clear Filters
      </button>
    </div>
  );
}