import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import PasswordOptions from "./components/PasswordOption";
import PasswordDisplay from "./components/PasswordDisplay";
import { generatePassword } from "./utils/generatePassword";
import "./style.scss";
function App() {
  const [autoGenerate, setAutoGenerate] = useState(true);
  const [options, setOptions] = useState({
    length: 12,
    useUppercase: true,
    useLowercase: true,
    useNumbers: true,
    useSymbols: false,
  });
  const [password, setPassword] = useState(generatePassword(options));
  const handleGenerate = () => {
    const newPassword = generatePassword(options);
    setPassword(newPassword);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
  };
  // useEffect: 当options，autoGenerate变化时，自动生成密码
  useEffect(() => {
    if (autoGenerate) {
      const newPassword = generatePassword(options);
      setPassword(newPassword);
    }
  }, [options, autoGenerate]);
  console.log(options);
  return (
    <Box sx={{ width: "100vw", display: "flex", justifyContent: "center" }}>
      <Container maxWidth="sm" className="container">
        <Typography variant="h4" gutterBottom>
          Password Generator
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={autoGenerate}
              onChange={(e) => {
                setAutoGenerate(e.target.checked);
              }}
            />
          }
          label="Auto-generate password when option change"
        />
        <PasswordOptions
          options={options}
          setOptions={setOptions}
          autoGenerate={autoGenerate}
          handleGenerate={handleGenerate}
        />
        <PasswordDisplay
          password={password}
          showGenerateButton={!autoGenerate}
          handleGenerate={handleGenerate}
          handleCopy={handleCopy}
        />
      </Container>
    </Box>
  );
}

export default App;
