
import { ClipboardList } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center animate-fade-in">
      <div className="w-16 h-16 mb-4 rounded-full bg-gray-50 flex items-center justify-center">
        <ClipboardList className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">No tasks yet</h3>
      <p className="text-sm text-gray-500 max-w-sm">
        Add your first task and start being productive
      </p>
    </div>
  );
};

export default EmptyState;
