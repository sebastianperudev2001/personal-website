export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto"></div>
        <p className="font-mono text-sm text-gray-600">Loading component...</p>
      </div>
    </div>
  );
}
