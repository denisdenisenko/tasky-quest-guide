
import { useState } from "react";
import { Plus } from "lucide-react";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-4 sm:mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:w-auto"
      >
        <Plus className="w-4 h-4" />
        Add
      </button>
    </form>
  );
};

export default AddTodo;
