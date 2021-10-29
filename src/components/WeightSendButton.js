import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";

import {initializeApp} from "firebase/app";
import {getDatabase, ref, child, push, update} from "firebase/database";

import config from "../config.json";

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

function WeightSendButton(props) {
  let {date, weight, userName} = props;
  const newPostKey = push(child(ref(db), "posts")).key;
  const updates = {};

  let sendData = (date, weight) => {
    const postData = {
      date: date,
      weight: weight,
    };

    updates["/" + userName + "/" + newPostKey] = postData;
    return update(ref(db), updates);
  };

  let isYYYYMMDD = (str) => {
    if (str === null || str.length !== 8 || isNaN(str)) {
      return false;
    }
    let y = parseInt(str.substr(0, 4));
    let m = parseInt(str.substr(4, 2)) - 1;
    let d = parseInt(str.substr(6, 2));
    let dt = new Date(y, m, d);
    return y === dt.getFullYear() && m === dt.getMonth() && d === dt.getDate();
  };

  let isKgWeight = (weight) => {
    if (weight.length === 0) {
      return false;
    }
    return weight >= 0 && weight < 100 ? true : false;
  };

  let flag = isYYYYMMDD(date) && isKgWeight(weight) ? false : true;

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => sendData(date, weight)}
        disabled={flag}
      >
        Send
      </Button>
    </div>
  );
}

export default WeightSendButton;
