interface TabNavigationProps {
    selected: string,
    tabs: string[],
    handleSelect: (value: string) => void
}

export default function TabNavigation({selected, tabs, handleSelect}: TabNavigationProps){
    return(
        <div className="w-full flex items-bottom border-b border-[#49656E20] mt-5">
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={`px-[10px] cursor-pointer py-3 border-b text-[15px] font-medium ${selected === tab ? 'border-[#4B8B9F] text-[#437D8E]' : 'border-transparent text-[#15272D60]'} duration-400 ease-in-out`}
                    onClick={() => handleSelect(tab)}
                >
                    {tab}
                </div>
            ))}
        </div>
    )
}