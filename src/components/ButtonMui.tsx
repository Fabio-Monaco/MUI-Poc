import { Button, Stack } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export const ButtonMui = () => {
  return (
    // stack here doesn't have breakpoints assigned so isn't responsive, but buttons automatically are resizing
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddAPhotoIcon />}
        >
          primary
        </Button>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<AddAPhotoIcon />}
        >
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        {/* dashed button will appear 'dashed' only if custom theme is applied */}
        <Button variant="dashed" color="success">
          DASHED custom
        </Button>
      </Stack>
    </Stack>
  );
};
