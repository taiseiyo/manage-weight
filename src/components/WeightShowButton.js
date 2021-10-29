import React from "react";
import Button from "@material-ui/core/Button";
import {initializeApp} from "firebase/app";
import {getDatabase, ref, onValue} from "firebase/database";

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

function WeightShowButton(props) {
  let {data, setData, userName} = props;
  let updateData = {};

  let receiveData = () => {
    const starCountRef = ref(db, userName);
    console.log(starCountRef);

    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((children) => {
        let val = children.val();
        updateData[val.date] = val.weight;
        setData({...data, ...updateData});
      });
    });
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => receiveData()}>
        Show
      </Button>
    </div>
  );
}

export default WeightShowButton;
