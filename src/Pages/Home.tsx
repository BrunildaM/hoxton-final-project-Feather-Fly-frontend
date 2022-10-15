import { Buttons } from "../Components/Buttons";
import { SignUpForm } from "../Components/SignUpForm";

export function Home () {
    return (
        <div>
            <Buttons variant="signIn">Sign in</Buttons>
            <Buttons variant="signUp">Sign up</Buttons>
            <SignUpForm />
        </div>
    )
}