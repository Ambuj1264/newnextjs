import { StarIcon } from "@/utils/svg"

export const Rating=({value}:{value:number})=>{
    return <div className='flex items-center gap-1'><span>{value}</span> 
    <StarIcon/>
    </div>
}