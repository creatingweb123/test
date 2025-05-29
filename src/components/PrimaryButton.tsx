const PrimaryButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
    >
      {children}
    </button>
  );
  export default PrimaryButton;