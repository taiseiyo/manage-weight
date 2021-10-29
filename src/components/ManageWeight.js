import React, {useState, useEffect} from "react";

import InputWeight from "./InputWeight";
import WeightSendButton from "./WeightSendButton";
import WeightShowButton from "./WeightShowButton";
import Fig from "./Fig";

import "./css/ManageWeight.css";

const textStyle = {
  textAlign: "center",
  color: "blue",
  fontSize: "4rem",
};

const buttonStyle = {
  display: "flex",
  justifyContent: "space-around",
  marginTop: "20px",
  marginBottom: "20px",
};

function ManageWeight(props) {
  let {userName} = props;
  let [date, setDate] = useState("");
  let [weight, setWeight] = useState(-1);
  let [data, setData] = useState([]);

  return (
    <div className="overall overall_v2">
      <>
        <p style={textStyle}>Welcome!!</p>
        <InputWeight setDate={setDate} setWeight={setWeight} />
        <div style={buttonStyle}>
          <WeightSendButton date={date} weight={weight} userName={userName} />
          <WeightShowButton data={data} setData={setData} userName={userName} />
        </div>
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
          <Fig data={data} />
        </div>
      </>
    </div>
  );
}
export default ManageWeight;
