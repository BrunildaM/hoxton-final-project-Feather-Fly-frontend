
import { SignUpForm } from "../Components/SignUpForm";
type Props = {
    signIn: (data: any) => void
}

export function SignUp ({signIn} : Props) {
    return (
        <div>
            <SignUpForm signIn={signIn} />
        </div>
    )
}