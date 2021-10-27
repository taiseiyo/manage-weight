import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import {makeStyles, StylesProvider} from "@material-ui/core/styles";
import "./InputWeight.css";

const formStyle = {
  display: "flex",
  justifyContent: "space-evenly",
};

const inputLabelStyle = {
  textAlign: "center",
  color: "blue",
  fontSize: "3rem",
};

const inputStyle = {
  height: "60px",
  color: "green",
  fontSize: "1.5rem",
};

function InputWeight(props) {
  let {setDate, setWeight} = props;

  return (
    <div style={formStyle}>
      <FormControl>
        <InputLabel htmlFor="name-simple" style={inputLabelStyle}>
          Date
        </InputLabel>

        <StylesProvider injectFirst>
          <Input style={inputStyle} onChange={(e) => setDate(e.target.value)} />
        </StylesProvider>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="name-simple" style={inputLabelStyle}>
          Weight
        </InputLabel>

        <StylesProvider injectFirst>
          <Input
            style={inputStyle}
            onChange={(e) => setWeight(e.target.value)}
          />
        </StylesProvider>
      </FormControl>
    </div>
  );
}

export default InputWeight;
