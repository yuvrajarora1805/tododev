# Developer Todo List

A comprehensive task management application designed specifically for developers, featuring advanced categorization, status tracking, and filtering capabilities.

![Developer Todo List](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072)

## Features

### Task Categories
- 🚨 **Urgent**: High-priority tasks requiring immediate attention
- 👥 **Delegate**: Tasks that can be assigned to team members
- ⏸️ **Hold**: Tasks temporarily paused or blocked
- 📅 **Scheduled**: Time-specific tasks with planned execution dates

### Task Statuses
- ✅ **Completed**: Finished tasks
- 🔄 **Ongoing**: Tasks currently in progress
- ⏳ **Deferred**: Postponed tasks for later consideration

### Advanced Features
- **Tag System**: Flexible tagging for better task organization
- **Smart Filtering**: Filter tasks by any combination of:
  - Categories
  - Statuses
  - Tags
- **Scheduling**: Set specific dates and times for tasks
- **Real-time Updates**: Instant status and category updates

## Technology Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── TodoForm.tsx    # Task creation form
│   ├── TodoList.tsx    # Task list display
│   └── TodoFilters.tsx # Filtering interface
├── types/              # TypeScript definitions
│   └── todo.ts         # Todo-related types
└── App.tsx             # Main application component
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Live Demo

Visit the live application: [Developer Todo List](https://enchanting-pie-c8a632.netlify.app)
