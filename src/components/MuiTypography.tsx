import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">H1) Tipography</Typography>
      {/* gutterBottom increase linespace bottom */}
      <Typography variant="h2" gutterBottom>
        H2) regards text
      </Typography>
      {/* component prop does't change the look but just the semantic 
          inspection on html element will show h1 but it looks like h3 */}
      <Typography variant="h3" component="h1">
        H3) style,
      </Typography>
      <Typography variant="subtitle1">
        subtitle1) font, color, and general
      </Typography>
      <Typography variant="subtitle2">
        subtitle2) customization of all
      </Typography>
      <Typography variant="body1">
        body1) the text, labels and so on in the site
      </Typography>
    </div>
  );
};
