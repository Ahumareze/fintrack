export default function StatusPill({ status }: { status: Status }) {
    const statusColorMap: Record<Status, string> = {
      Active: "bg-[#087A2E]",
      Debit: "bg-red-500",
      Credit: "bg-blue-500",
    };
  
    const color = statusColorMap[status];
  
    return (
      <div className="flex items-center gap-2 rounded-full bg-[#34616F12] text-[#1B2528] text-[15px] px-3 py-1 text-sm">
        <div className={`h-[6px] w-[6px] rounded-full ${color}`} />
        {status}
      </div>
    );
}  