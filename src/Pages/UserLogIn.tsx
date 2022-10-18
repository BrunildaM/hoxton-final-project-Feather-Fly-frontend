import { Charts } from "../Components/Charts";
import { Capital } from "../Components/types";
type Props = {
    capitals: Capital[]
}

export function UserLogIn ({capitals}: Props) {
    return(
        <div>
            <Charts capitals= {capitals}/>
        </div>
    )
    
}