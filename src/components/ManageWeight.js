import React, {useState, useEffect} from "react";
import {initializeApp} from "firebase/app";
import {getDatabase, ref, onValue} from "firebase/database";

import InputWeight from "./InputWeight";
import WeightSendButton from "./WeightSendButton";
import WeightShowButton from "./WeightShowButton";
import Fig from "./Fig";

import config from "../config.json";

const textStyle = {
  textAlign: "center",
  color: "blue",
  fontSize: "4rem",
};

const buttonStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: "30px",
  marginBottom: "20px",
};

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId,
};

// Initialize Firebase
initializeApp(firebaseConfig);
let db = getDatabase();

function ManageWeight() {
  let [date, setDate] = useState("");
  let [weight, setWeight] = useState(-1);
  let [data, setData] = useState([]);

  return (
    <>
      <p style={textStyle}>Welcome!!</p>
      <InputWeight setDate={setDate} setWeight={setWeight} />
      <div style={buttonStyle}>
        <WeightSendButton date={date} weight={weight} />
        <WeightShowButton data={data} setData={setData} />
      </div>
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <Fig data={data} />
      </div>
    </>
  );
}
export default ManageWeight;
