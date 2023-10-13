import TextField from "@mui/material/TextField";
import { Stack, Button } from "@mui/material";

function otherDetails({nextSteps}) {
  return (
    <div>
      <div className="otherdetails">
        <form>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
            <TextField
              type="email"
              variant="outlined"
              color="secondary"
              label="Email"
              autoComplete="userEmail"
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
              label="Phone"
              value=""
              autoComplete="userPhone"
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
              PREVIOUS
            </Button>
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default otherDetails;