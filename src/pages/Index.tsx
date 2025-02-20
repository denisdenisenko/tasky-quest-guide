
import { useState } from "react";
import { Todo } from "@/lib/types";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import EmptyState from "@/components/EmptyState";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { toast } = useToast();

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos((prev) => [newTodo, ...prev]);
    toast({
      description: "Task added successfully",
    });
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    toast({
      description: "Task deleted successfully",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Tasks</h1>
            <p className="text-sm text-gray-500">
              Stay organized and productive with your daily tasks
            </p>
          </div>
          <AddTodo onAdd={addTodo} />
          {todos.length > 0 ? (
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
