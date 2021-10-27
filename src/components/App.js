import React, {useState} from "react";
import "./App.css";
import SignIn from "./SignIn";
import ManageWeight from "./ManageWeight";

import config from "../config.json";

function App() {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");

  let correctName = config.correctName;
  let correctPassword = config.correctPassword;

  if (correctName.includes(name) && correctPassword.includes(password)) {
    return <ManageWeight />;
  } else {
    return <SignIn setName={setName} setPassword={setPassword} />;
  }
}

export default App;
