import type { ReactNode } from "react";
import Header from "../../components/general/Header";
import NavBar from "../../components/general/NavBar";

export default function PageContainer({children}:{children: ReactNode}){
    
    return(
        <div className="w-screen bg-white h-screen">
            <Header />
            <div className="w-screen h-fit grid grid-cols-[320px_1fr] px-[50px] gap-10">
                <NavBar />
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>
        
    )
}