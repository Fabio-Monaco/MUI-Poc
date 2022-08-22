import { MobileButtonMui } from "./MobileButtonMui";
import { ButtonMui } from "./ButtonMui";

import { useMediaQuery, useTheme } from "@mui/material";

export const MainButtonsMui = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMatch ? (
        <>
          <MobileButtonMui />
        </>
      ) : (
        <>
          <ButtonMui />
        </>
      )}
    </>
  );
};
