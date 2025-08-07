import { FiMoreHorizontal } from "react-icons/fi"

export function ButtonPrimary({
    title,
    handleClick
}:{
    title: string,
    handleClick?: () => void
}){
    return(
        <button className="h-[38px] w-fit bg-[#4B8B9F] text-[#020303] text-[15px] font-medium rounded-full px-[22px] cursor-pointer hover:opacity-90 hover:scale-105 hover:shadow-md duration-200 ease-in-out" onClick={handleClick}>
            {title}
        </button>
    )
}

export function MoreButton({
    handleClick
}:{
    handleClick?: () => void
}){
    return(
        <div className="h-[38px] w-[38px] flex items-center justify-center text-[#1B2528] rounded-full border-2 border-[#D9DEE0] bg-white cursor-pointer hover:opacity-90 hover:scale-105 hover:shadow-md duration-200 ease-in-out" onClick={handleClick}>
            <FiMoreHorizontal size={20} />
        </div>
    )
}