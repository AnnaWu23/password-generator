import {
  Slider,
  Checkbox,
  Box,
  Typography,
  FormControlLabel,
} from "@mui/material";
import React from "react";

const PasswordOptions = ({ options, setOptions }) => {
  const handleChange = (e) => {
    setOptions((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };
  return (
    <div className="options">
      <Typography>Password Length: {options.length} </Typography>
      <Slider
        min={4}
        max={32}
        value={options.length}
        onChange={(e, value) => {
          // The problem with this method is that, when you quickly change the value, it might not be able to catch the latest value
          // Concurrency issue
          // setOptions({ ...options, length: value });
          // Solution: Use the previous state to update the states
          setOptions((prev) => ({ ...prev, length: value }));
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={options.useUppercase}
            onChange={(e) => {
              handleChange(e);
            }}
            name="useUppercase"
          />
        }
        label="Include Uppercase"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={options.useLowercase}
            onChange={(e) => {
              handleChange(e);
            }}
            name="useLowercase"
          />
        }
        label="Include Lowercase"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={options.useNumbers}
            onChange={(e) => {
              handleChange(e);
            }}
            name="useNumbers"
          />
        }
        label="Include Numbers"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={options.useSymbols}
            onChange={(e) => {
              handleChange(e);
            }}
            name="useSymbols"
          />
        }
        label="Include Symbols"
      />
    </div>
  );
};

export default PasswordOptions;
