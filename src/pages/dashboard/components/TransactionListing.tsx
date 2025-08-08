import { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import StatusPill from "@/components/general/StatusPill";

type SortField = 'date' | 'remark' | 'amount' | 'currency' | 'type';
type SortDirection = 'asc' | 'desc' | null;

export default function TransactionListing({ transactions }: { transactions: Transaction[] }) {
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortField(null);
        setSortDirection(null);
      } else {
        setSortDirection('asc');
      }
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (!sortField || !sortDirection) return 0;

    let aValue: any = a[sortField];
    let bValue: any = b[sortField];

    if (sortField === 'date') {
      aValue = new Date(aValue).getTime();
      bValue = new Date(bValue).getTime();
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }

    if (aValue < bValue) {
      return sortDirection === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const getSortIcon = (field: SortField) => {
    if (sortField !== field || sortDirection === null) {
      return <MdArrowDropDown size={22} className="opacity-50" />;
    }
    return sortDirection === 'asc' 
      ? <MdArrowDropUp size={22} className="text-blue-600" />
      : <MdArrowDropDown size={22} className="text-blue-600" />;
  };

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px] text-[#15272D]">
              <div 
                className="cursor-pointer flex items-center gap-1 hover:text-blue-600 transition-colors"
                onClick={() => handleSort('date')}
              >
                Date{getSortIcon('date')}
              </div>
            </TableHead>
            <TableHead className="text-[#15272D]">
              <div 
                className="cursor-pointer flex items-center gap-1 hover:text-blue-600 transition-colors"
                onClick={() => handleSort('remark')}
              >
                Remark{getSortIcon('remark')}
              </div>
            </TableHead>
            <TableHead className="text-[#15272D]">
              <div 
                className="cursor-pointer flex items-center gap-1 hover:text-blue-600 transition-colors"
                onClick={() => handleSort('amount')}
              >
                Amount{getSortIcon('amount')}
              </div>
            </TableHead>
            <TableHead className="text-[#15272D]">
              <div 
                className="cursor-pointer flex items-center gap-1 hover:text-blue-600 transition-colors"
                onClick={() => handleSort('currency')}
              >
                Currency{getSortIcon('currency')}
              </div>
            </TableHead>
            <TableHead className="text-[#15272D]">
              <div 
                className="cursor-pointer flex items-center gap-1 hover:text-blue-600 transition-colors"
                onClick={() => handleSort('type')}
              >
                Type{getSortIcon('type')}
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedTransactions.map(({
            date,
            amount,
            currency,
            remark,
            type
          }, index) => (
            <TableRow
              key={index}
              className="h-[58px]"
            >
              <TableCell>{date}</TableCell>
              <TableCell>{remark}</TableCell>
              <TableCell>
                {type === "Credit" ? '+' : '-'}
                {currency === "USD" && '$'}
                {amount.toLocaleString()}
              </TableCell>
              <TableCell>{currency}</TableCell>
              <TableCell>
                <StatusPill status={type} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}