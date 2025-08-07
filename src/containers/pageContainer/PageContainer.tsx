import type { ReactNode } from "react";
import Header from "../../components/general/Header";

export default function PageContainer({children}:{children: ReactNode}){
    return(
        <div className="w-screen bg-white h-screen">
            <Header />
            <div className="w-screen h-fit bg-blue-500 grid grid-cols-[320px_1fr]">
                <div className="w-full bg-green-500">

                </div>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>
        
    )
}