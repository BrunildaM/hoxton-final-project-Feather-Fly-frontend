import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { SignInForm } from "./Components/SignInForm";
import { Capital, Flight, User } from "./Components/types";
import { AdminLogIn } from "./Pages/AdminLogIn";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { SearchedFlight } from "./Pages/SearchedFlights";
import { SignUp } from "./Pages/SignUp";
import { UserLogIn } from "./Pages/UserLogIn";

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [capitals, setCapitals] = useState<Capital[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/capitals")
      .then((res) => res.json())
      .then((capitals) => setCapitals(capitals));
  }, []);
  

  function signIn(data: any) {
    setCurrentUser(data.user);
    localStorage.token = data.token;
  }

  function signOut() {
    setCurrentUser(null);
    localStorage.removeItem("token");
  }

  useEffect(() => {
    if (localStorage.token) {
      fetch("http://localhost:4000/validate", {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            signIn(data);
          }
        });
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home capitals={capitals} />} />
          <Route path="/users/:id" element={<UserLogIn capitals={capitals} />} />
          {/* <Route path="/admins/:id" element={<AdminLogIn />} /> */}
          <Route path="/signUp" element={<SignUp signIn={signIn} /> } />
          <Route path="/signIn" element={<SignInForm signIn={signIn} />} />
          <Route path="/flights" element={<SearchedFlight />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
