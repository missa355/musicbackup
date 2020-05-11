import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function Checkboxes() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = event => {
    setChecked(event.target.checked);
    console.log(event.target.checked);
  };

  return (
    <div>
        <FormControlLabel
        control={
            <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
            style={{color:"rgba(103, 58, 183, 1)"}}
          />
        }
        label="Public"

        style={{marginLeft:"0px"}}
      />

    </div>
  );
}
