const loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-900 border-t-transparent"></div>
    </div>
  );
};

export default loading;
