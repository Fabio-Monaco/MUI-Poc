import "./styles.css";
import { GridDataTable } from "./components/GridDataTable";
import { MuiTypography } from "./components/MuiTypography";
import { MainButtonsMui } from "./components/MainButtonsMui";
import { NavbarMui } from "./components/NavbarMui";
import { LinkMui } from "./components/LinkMui";
import { BreadcrumbsMui } from "./components/BreadcrumbsMui";
import { EditableDataGridMui } from "./components/EditableDataGridMui";
import { createTheme, colors, ThemeProvider } from "@mui/material";

// Module augmentation is needed in order to make the new variant available
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

const innerDefaultTheme = createTheme();

// use 'let' insted of 'const' to use theme composition (multiple steps)
let customTheme = createTheme({
  palette: {
    primary: {
      main: colors.green[500]
    },
    secondary: {
      main: colors.orange[500]
    }
  }

  // ### Uncomment typography section to apply external font library
  // typography: {
  //   fontFamily: 'Silkscreen',
  //   fontWeightRegular: 400,
  //   fontWeightBold: 700,
  // }
});

// the component button variant block defines a new button variant

customTheme = createTheme(customTheme, {
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "dashed" },
          style: {
            textTransform: "none",
            //without theme composition customTheme is not recognized cause it's not yet inizialized
            border: `2px dashed ${customTheme.palette.primary.main}`,
            color: customTheme.palette.primary.main
          }
        },
        {
          props: { variant: "dashed", color: "secondary" },
          style: {
            border: `2px dashed ${customTheme.palette.secondary.main}`,
            color: customTheme.palette.secondary.main
          }
        },
        {
          props: { variant: "dashed", size: "large" },
          style: {
            borderWidth: 4
          }
        },
        {
          props: { variant: "dashed", color: "secondary", size: "large" },
          style: {
            fontSize: 18
          }
        }
      ]
    }
  }
});

export default function App() {
  return (
    // Uncomment ThemeProvider start and end tags to aplly custom theme
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <BreadcrumbsMui />
        <NavbarMui />
        {/* <MuiTypography /> */}

        {/* <ThemeProvider theme= {innerDefaultTheme}> */}
        <LinkMui />
        {/* </ThemeProvider> */}

        <MainButtonsMui />
        {/* <GridDataTable /> */}
        <EditableDataGridMui />
      </div>
    </ThemeProvider>
  );
}
