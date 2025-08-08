import { FiMoreHorizontal } from "react-icons/fi";

interface BalanceCardProps {
    title: string,
    value: number,
    currency?: string,
    percentageChange: number
}

export default function BalanceCard({title, value, currency, percentageChange}:BalanceCardProps){
    return(
        <div className="w-full rounded-2xl bg-[#34616F10] p-[25px]">
            <div className="flex items-center justify-between">
                <p className="text-[17px] font-bold text-[#1B2528]">{title}</p>
                <div className="cursor-pointer hover:scale-105 duration-200 ease-in-out">
                    <FiMoreHorizontal size={22} />
                </div>
            </div>
            <h2 className="text-[#1B2528] font-bold text-[34px] mt-[15px]">{currency && currency}{value.toLocaleString()}</h2>
            <p className="text-sm text-[#3E7383] font-medium mt-[4px]">
                {percentageChange > 0
                    ? `+${percentageChange}%`
                    : `${percentageChange}%`
                }
            </p>
        </div>
    )
}