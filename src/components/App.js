import React, {useState} from "react";
import "./css/App.css";
import SignIn from "./SignIn";
import ManageWeight from "./ManageWeight";

function App() {
  let [name, setName] = useState("");
  let [nextPage, setNextPage] = useState(false);

  if (nextPage === true) {
    return <ManageWeight userName={name} />;
  } else {
    return <SignIn setName={setName} setNextPage={setNextPage} />;
  }
}

export default App;
