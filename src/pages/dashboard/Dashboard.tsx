import { useState } from "react";
import { ButtonPrimary, MoreButton } from "../../components/general/Buttons";
import StatusPill from "../../components/general/StatusPill";
import TabNavigation from "../../components/general/TabNavigation";
import PageContainer from "../../containers/pageContainer/PageContainer";

export default function Dashboard(){
    const [selectedTab, setSelectedTab] = useState<string>("Overview")
    return(
        <PageContainer>
            <div className="w-full">
                <div className="w-full flex items-center justify-between gap-10">
                    {/* title button goes here */}
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-2 cursor-pointer group">
                            <h1 className="text-[#1B2528] text-[34px] font-bold">Wallet Ledger</h1>
                            <img
                                src="icons/chevron-down.png"
                                alt=""
                                className="relative"
                            />
                        </div>
                        <StatusPill status="Active" />
                    </div>
                    {/* share buttons goes here */}
                    <div className="flex items-center gap-5">
                        <ButtonPrimary title="Share" />
                        <MoreButton />
                    </div>
                </div>
                {/* users listing */}
                <div className="flex items-center gap-2 group cursor-pointer mt-5">
                    <div className="flex items-center">
                        <div className="h-[32px] w-[32px] rounded-full bg-red-500 border-2 border-white z-10" />
                        <div className="h-[32px] w-[32px] rounded-full bg-red-500 border-2 border-white relative -translate-x-2 z-9 group-hover:translate-x-0 duration-200 ease-in-out" />
                        <div className="h-[32px] w-[32px] rounded-full bg-red-500 border-2 border-white relative -translate-x-4 z-8 group-hover:translate-x-0 duration-200 ease-in-out" />
                        <div className="h-[32px] w-[32px] rounded-full bg-red-500 border-2 border-white relative -translate-x-6 z-7 group-hover:translate-x-0 duration-200 ease-in-out" />
                    </div>
                    <p className="text-[#15272D65] text-[15px] -translate-x-6 group-hover:translate-x-0 duration-200 ease-in-out">Ava, Liam, Noah +12 others</p>
                </div>
                <TabNavigation
                    selected={selectedTab}
                    tabs={['Overview', 'Transactions']}
                    handleSelect={(tab) => setSelectedTab(tab)}
                />
                <div className="mt-10">
                    <h3 className="text-[20px] font-bold text-[#1B2528]">Summary</h3>
                </div>
            </div>
        </PageContainer>
    )
}