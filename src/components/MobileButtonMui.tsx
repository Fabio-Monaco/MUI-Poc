import { Button, IconButton, Stack } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import InfoIcon from "@mui/icons-material/Info";
import DangerousIcon from "@mui/icons-material/Dangerous";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export const MobileButtonMui = () => {
  return (
    // stack here doesn't have breakpoints assigned so isn't responsive, but buttons automatically are resizing
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Txt</Button>
        <Button variant="contained">cont</Button>
        <Button variant="outlined">outln</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddAPhotoIcon />}
        >
          pri
        </Button>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<AddAPhotoIcon />}
        >
          sec
        </Button>
        <IconButton size="small" color="error" aria-label="error">
          <DangerousIcon />
        </IconButton>
      </Stack>
      <Stack spacing={2} direction="row">
        <IconButton
          size="small"
          edge="start"
          color="warning"
          aria-label="warning"
        >
          <WarningAmberIcon />
        </IconButton>

        <IconButton size="large" edge="start" color="info" aria-label="youtube">
          <InfoIcon />
        </IconButton>
        <IconButton size="small" edge="start" color="success" aria-label="info">
          <ThumbUpIcon />
        </IconButton>
        {/* dashed button will appear 'dashed' only if custom theme is applied */}
        <Button variant="dashed" color="success">
          cust
        </Button>
      </Stack>
    </Stack>
  );
};
