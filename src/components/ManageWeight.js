import React, {useState, useEffect} from "react";

import InputWeight from "./InputWeight";
import WeightSendButton from "./WeightSendButton";
import WeightShowButton from "./WeightShowButton";
import Fig from "./Fig";

import "./css/ManageWeight.css";

const textStyle = {
  color: "blue",
  fontSize: "4rem",
  marginTop: "3rem",
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
        <div style={textStyle} className="popout">
          <span className="animation1">W</span>
          <span className="animation2">E</span>
          <span className="animation3">L</span>
          <span className="animation4">C</span>
          <span className="animation5">O</span>
          <span className="animation6">M</span>
          <span className="animation7">E</span>
          <span className="animation8">!</span>
        </div>

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
