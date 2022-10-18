import { useState } from "react";
import { User, API } from "./types";

export function SignUp() {
//     const [firstName, setFirstNAme] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [age, setAge] = useState(0);
//     const [email, setEmail] = useState("");
//     const [password1, setPassword1] = useState("");
//     const [password2, setPassword2] = useState("");
//     const [gender, setGender] = useState("");
  
//     const [users, setUsers] = useState<User[]>([]);
  
//     function createNewUser() {
//       let newUser = {
//         firstName: firstName,
//         lastName: lastName,
//         age: age,
//         email: email,
//         password: password1,
//         gender: gender,
//       };
  
//       fetch(`${API}/sign-up`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newUser),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.error) {
//             alert(data.error);
//           } else {
//             ((newUser: User) => {
//           setUsers([...users, newUser]); 
//         } )      
//         }
//     }
// },
}