import TextField from "@mui/material/TextField";
import { Stack, Button } from "@mui/material";
import { useState } from "react";
import otherDetails from "./otherDetails.js";
// import FormLabel from '@mui/material/FormLabel';
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";

function BasicDetails() {
  let [step, setStep] = useState(1);

  let nextSteps = async () => {
    setStep(step++);
  };
  let prevSteps = async () => {
    setStep(step--);
  };
  return (
    <div>

      <div className="lineBox">
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
      <div className="trackingBox">
        <div className="step1Box"> STEP 1</div>
        <div className="step2Box"> STEP 2</div>
        <div className="step3Box"> COMPLETED</div>
      </div>
      <div className="form1Box">
        <form>
          {/* <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="First Name"
              autoComplete="userName"
              value=""
              required
              sx={{ mb: 4 }}
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="lastName"
              value=""
              autoComplete="userName"
              required
              sx={{ mb: 4 }}
            />
          </Stack>
          <div>
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              type="submit"
              fullWidth
              onClick={nextSteps}
            >
              NEXT
            </Button>
          </div> */}
          <div className=""> 
            <label className="">Full Name</label>
            <input type="text"  className="formControl"/>
          </div>
          <div className="">
            <button onClick={nextSteps}>Next</button>
          </div>
        </form>
      <otherDetails  nextSteps={nextSteps}/>
      </div>
     
    </div>
  );
}

export default BasicDetails;
