import { useLocation } from 'react-router-dom'

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
export default function NavBar(){
    const location = useLocation()

    return(
        <div className="bg-white w-full flex flex-col gap-2 pl-[20px] md:pl-[50px]">
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
        </div>
    )
}