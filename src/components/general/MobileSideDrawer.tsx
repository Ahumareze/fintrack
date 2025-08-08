import { FiX } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from "motion/react";

const pages : {title: string, link: string}[] = [
    {
        title: 'Dashboard',
        link: '/'
    },
    {
        title: 'Transactions',
        link: '/transactions'
    },
    {
        title: 'Reports',
        link: '/reports'
    },
    {
        title: 'Settings',
        link: '/settings'
    }
]
export default function MobileSideDrawer({showDrawer, handleClose}:{showDrawer: boolean, handleClose: () => void}){
    const location = useLocation()

    return(
        <AnimatePresence mode="wait">
            {showDrawer && (
                <motion.div 
                    className='fixed top-0 left-0 h-screen w-full bg-black/30 z-[1000] flex backdrop-blur-md'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    <motion.div 
                        className="bg-white h-full w-[300px] flex flex-col gap-2 px-[20px] pt-3"
                        initial={{translateX: -200}}
                        animate={{translateX: 0}}
                        exit={{translateX: -200}}
                    >
                        <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#f5f5f5] duration-200 ease-in-out mb-5" onClick={handleClose}>
                            <FiX size={22} />
                        </div>
                        {pages.map(({
                            title,
                            link
                        }, index) => {
                            const isActive = location.pathname === link
                            
                            return(
                                <a href={link} key={index}>
                                    <div className={`w-full rounded-full py-[8px] px-[20px]  ${isActive ? 'bg-[#DCE4E7]' : 'bg-white'}`}>
                                        <p className={`text-[15px] font-medium  ${isActive ? 'text-[#3A6C7B]' : 'text-[#1B2528]'}`}>{title}</p>
                                    </div>
                                </a>
                            )
                        })}
                    </motion.div>
                    <div className='flex flex-1 h-full' onClick={handleClose} />
                </motion.div>
            )}
        </AnimatePresence>
    )
}