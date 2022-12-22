import React from "react";
import "./App.css";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { MutableRef } from "./components/refs/MutableRef";

function App() {
  return (
    <div className='App'>
      <UserContextProvider>
        <User />
        <MutableRef />
      </UserContextProvider>
    </div>
  );
}

export default App;
