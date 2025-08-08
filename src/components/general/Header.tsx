import { FiSearch, FiMenu } from "react-icons/fi";
import { IoGridOutline } from "react-icons/io5";
import MobileSideDrawer from "./MobileSideDrawer";
import { useState } from "react";

export default function Header(){
    const [showMobileDrawer, setShowMobileDrawer] = useState<boolean>(false);
    return(
        <>
            <div className="w-full bg-white flex items-center justify-between gap-10 px-[20px] md:px-[50px] py-[15px]">
                <div className="flex items-center gap-5">
                    <div className="h-[40px] w-[40px] rounded-full flex md:hidden items-center justify-center cursor-pointer hover:bg-[#f5f5f5] duration-200 ease-in-out" onClick={() => setShowMobileDrawer(true)}>
                        <FiMenu size={22} />
                    </div>
                    <a href="/">
                        <img
                            src="icons/logo.svg"
                            alt=""
                            className="h-[32px]"
                        />
                    </a>
                </div>
                <div className="flex items-center gap-5">
                    <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#f5f5f5] duration-200 ease-in-out">
                        <FiSearch size={22} />
                    </div>
                    <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#f5f5f5] duration-200 ease-in-out">
                        <IoGridOutline size={22} />
                    </div>
                    <img 
                        className="h-[40px] w-[40px] rounded-full cursor-pointer object-cover" 
                        src="images/avatar.png"
                        alt=""
                    />
                </div>
            </div>
            <MobileSideDrawer 
                showDrawer={showMobileDrawer} 
                handleClose={() => setShowMobileDrawer(false)}
            />
        </>
    )
}