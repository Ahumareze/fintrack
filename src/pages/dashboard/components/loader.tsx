import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loader(){
    return(
        <div>
            <SkeletonTheme baseColor="#34616F10" highlightColor="#fff">
                
                <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
                    <Skeleton className="h-[150px]" borderRadius={15} />
                    <Skeleton className="h-[150px]" borderRadius={15}  />
                    <Skeleton className="h-[150px]" borderRadius={15}  />
                    <Skeleton className="h-[150px]" borderRadius={15}  />
                </div>
                <div className='mt-10 flex flex-col gap-5'>
                    {[1,2,3,4,5,6,7].map(num => (
                        <Skeleton className="h-[30px] w-[100px]" borderRadius={5} key={num} />
                    ))}
                </div>
            </SkeletonTheme>
        </div>
    )
}