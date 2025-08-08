import { MdArrowDropDown } from "react-icons/md";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import StatusPill from "@/components/general/StatusPill";

export default function TransactionListing({transactions}:{transactions: Transaction[]}){
    return(
        <div className="w-full">
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[400px] text-[#15272D]">
                        <div className="cursor-pointer flex items-center gap-1">
                            Date<MdArrowDropDown size={22} />
                        </div>
                    </TableHead>
                    <TableHead className="text-[#15272D]">
                        <div className="cursor-pointer flex items-center gap-1">
                            Remark<MdArrowDropDown size={22} />
                        </div>
                    </TableHead>
                    <TableHead className="text-[#15272D]">
                        <div className="cursor-pointer flex items-center gap-1">
                            Amount<MdArrowDropDown size={22} />
                        </div>
                    </TableHead>
                    <TableHead className="text-[#15272D]">
                        <div className="cursor-pointer flex items-center gap-1">
                            Currency<MdArrowDropDown size={22} />
                        </div>
                    </TableHead>
                    <TableHead className="text-[#15272D]">
                        <div className="cursor-pointer flex items-center gap-1">
                            Type<MdArrowDropDown size={22} />
                        </div>
                    </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {transactions.map(({
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