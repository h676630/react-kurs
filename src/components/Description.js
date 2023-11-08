import React, {useState} from "react";
import { Typography, Box, Button, Slider, Stack, Switch, TextField} from "@mui/material";
import { VolumeDown, VolumeUp } from "@mui/icons-material";

const Description = () => {
  // Teksten nedenfor kan redigeres av kursdeltakerne for å tilpasse beskrivelsen
  const descriptionText =
    "Start dagen din med oversikt og inspirasjon. Her på Daily får du tilgang til dine viktigste oppgaver, dagens vær og en daglig dose med inspirasjon.";

  const [value, setValue] = useState("")
  console.log(value)
  
  const [checked, setChecked] = useState(false);
  console.log(checked)

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        En ny dag, en ny mulighet
      </Typography>
      <Typography variant="body1">{descriptionText}</Typography>

      <TextField 
      id="outlined-basic" 
      label="hei hei" 
      variant="outlined"
      value={value}
      onChange={(e) => setValue(e.target.value)} 
       />

      <Switch 
      value={checked}
      onChange={(e)=> setChecked(e.target.checked)}
       />

     
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
      <VolumeDown />
      <Slider aria-label="Volume"/>
      <VolumeUp />
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      </Box>
  );
};

export default Description;
