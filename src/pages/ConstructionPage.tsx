import PageContainer from "@/containers/pageContainer/PageContainer";

export default function ConstructionPage(){
    return(
        <PageContainer>
            <div className="h-[300px] w-[full] flex flex-col items-center justify-center">
                <img
                    src="construction.gif"
                    alt=""
                    className="max-w-[300px] mx-auto"
                />
                <h3 className="text-center font-semibold text-black/80 mt-5">This page is under development, please check back again later</h3>
            </div>
        </PageContainer>
        
    )
}