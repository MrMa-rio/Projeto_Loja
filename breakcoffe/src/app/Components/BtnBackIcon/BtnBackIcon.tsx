import { useRouter } from "next/navigation"
import { BackIcon } from "./icon"

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
            <BackIcon />
            <p>Voltar</p>
        </div>
    )
}