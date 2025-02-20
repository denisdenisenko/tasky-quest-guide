
import { Check, Trash } from "lucide-react";
import { Todo } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div
      className={cn(
        "group flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg border transition-all duration-200 animate-slide-up hover:shadow-sm",
        todo.completed && "bg-gray-50"
      )}
    >
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <button
          onClick={() => onToggle(todo.id)}
          className={cn(
            "flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
            todo.completed
              ? "border-purple-500 bg-purple-500 text-white"
              : "border-gray-300 hover:border-purple-500"
          )}
        >
          {todo.completed && <Check className="w-3 h-3" />}
        </button>
        <span
          className={cn(
            "text-sm text-gray-900 transition-all duration-200 truncate",
            todo.completed && "text-gray-500 line-through"
          )}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 sm:group-hover:opacity-100 transition-opacity duration-200 p-2 hover:text-red-500"
      >
        <Trash className="w-4 h-4" />
      </button>
    </div>
  );
};

export default TodoItem;
