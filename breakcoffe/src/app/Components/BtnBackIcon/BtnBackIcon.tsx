import { useRouter } from "next/navigation"
import  BackIcon  from "./icon.svg"
import Image from "next/image"

interface BtnProps {
    navigate: string
}

export const BtnBackIcon = ({navigate}:BtnProps) => {
    const router = useRouter()
    const handleNavigate = () =>{
        router.push(navigate)
    }
    return(
        <div onClick={handleNavigate} className="flex gap-2 cursor-pointer">
            <Image src={BackIcon} alt="Backicon" />
            <p>Voltar</p>
        </div>
    )
}