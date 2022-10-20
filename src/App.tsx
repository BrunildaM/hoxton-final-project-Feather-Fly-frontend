import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { SignInForm } from "./Components/SignInForm";
import { API, Capital, Flight, User } from "./Components/types";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { SearchedFlight } from "./Pages/SearchedFlights";
import { SignUp } from "./Pages/SignUp";
import { UserLogIn } from "./Pages/UserLogIn";

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [capitals, setCapitals] = useState<Capital[]>([]);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/capitals")
      .then((res) => res.json())
      .then((capitals) => setCapitals(capitals));
  }, []);

  useEffect(() => {
    fetch(`${API}/flights`)
      .then((res) => res.json())
      .then((flights) => setFlights(flights));
  }, []);

  function signIn(data: any) {
    setCurrentUser(data.user);
    if (data.user.role === "admin") {
      setIsAdmin(true);
    }
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
      <Header currentUser={currentUser} signOut={signOut} />
      <main>
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={<Home capitals={capitals} flights={flights} />}
          />
          <Route
            path="/users/:id"
            element={
              <UserLogIn
                capitals={capitals}
                flights={flights}
                isAdmin={isAdmin}
                setFlights={setFlights}
              />
            }
          />
          <Route path="/signUp" element={<SignUp signIn={signIn} />} />
          <Route path="/signIn" element={<SignInForm signIn={signIn} />} />
          <Route path="/flights" element={<SearchedFlight />} />
          <Route path="/logOut" element={<SearchedFlight />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
