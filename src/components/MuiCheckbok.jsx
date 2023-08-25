import * as React from "react"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

export default function MuiCheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            sx={{
              color: "orange",
              "&.Mui-checked": {
                color: "#09f",
                //1976d2
              },
            }}
          />
        }
        label="Notifications"
      />
    </FormGroup>
  )
}
