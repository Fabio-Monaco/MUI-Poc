import { Stack, Link } from "@mui/material";
export const LinkMui = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      {/* uncomment the sx prop to apply custom right margin and color to the single link component  */}
      <Link /*sx={{mr: 5}}   sx={{color: "#000000"}} */ href="#">
        PrimaryColorLink
      </Link>
      <Link href="#" color="secondary">
        SecondaryColorLink
      </Link>
    </Stack>
  );
};
