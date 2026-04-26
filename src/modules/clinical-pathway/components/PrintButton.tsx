import { Printer } from 'lucide-react';

type PrintButtonProps = {
  className?: string;
};

function PrintButton({ className = '' }: PrintButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 ${className}`}
    >
      <Printer size={16} />
      Print
    </button>
  );
}

export default PrintButton;
