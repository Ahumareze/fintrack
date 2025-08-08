import { useEffect, useState } from "react";
import { ButtonPrimary, MoreButton } from "../../components/general/Buttons";
import StatusPill from "../../components/general/StatusPill";
import TabNavigation from "../../components/general/TabNavigation";
import PageContainer from "../../containers/pageContainer/PageContainer";
import BalanceCard from "../../components/general/BalanceCard";
import TransactionListing from "./components/TransactionListing";
import { dummyData } from "@/data/dummyData";
import UsersListing from "./components/UsersListing";
import Loader from "./components/loader";

export default function Dashboard(){
    const [selectedTab, setSelectedTab] = useState<string>("Overview");

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<DummyDataType | null>(null)

    useEffect(() => {
        handleFetchData();
    }, []);

    const handleFetchData = () => {
        setTimeout(() => {
            setData(dummyData)
            setIsLoading(false);
        }, 2000);
    }

    return(
        <PageContainer>
            <div className="w-full h-fit">
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
                <UsersListing />
                <TabNavigation
                    selected={selectedTab}
                    tabs={['Overview', 'Transactions']}
                    handleSelect={(tab) => setSelectedTab(tab)}
                />
                {isLoading && <Loader />}
                {!isLoading && data !== null && (
                    <div>
                        <div className="mt-10">
                            <h3 className="text-[20px] font-bold text-[#1B2528]">Summary</h3>
                            <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-5">
                                <BalanceCard
                                    title="Total Balance"
                                    value={7890}
                                    currency="$"
                                    percentageChange="+3%"
                                />
                                <BalanceCard
                                    title="Total Credits"
                                    value={7890}
                                    currency="$"
                                    percentageChange="+3%"
                                />
                                <BalanceCard
                                    title="Total Debits"
                                    value={7890}
                                    currency="$"
                                    percentageChange="+3%"
                                />
                                <BalanceCard
                                    title="Transactions"
                                    value={150}
                                    percentageChange="+10%"
                                />
                            </div>
                        </div>
                        <div className="mt-10">
                            <TransactionListing 
                                transactions={data.transactions} 
                            />
                        </div>
                    </div>
                )}
                <div className="h-[200px] w-full" />
            </div>
        </PageContainer>
    )
}