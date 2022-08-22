Objective of that app is to evaluate mainly the learning curve and the customizzation effort required using Material UI in application developement.

Few common components are used for the scope with also attention to navigation bar, left side drawer nav bar, and tables.

quality and usability of the documentation are a further point of attention

CUSTOMIZZATION
Theme
Is the object driving all the style, apparence, look&feel of all the components in all the app pages, MUI provides a default theme (see default theme at https://mui.com/material-ui/customization/default-theme/)

Components properties
selected based on applyed Theme

Resposiveness
Breakpoints: material ui uses breakpoint definition for to know how to scale itself to adapt the page to the screen size
main example: NavbarMui.tsx line 55

One-off customization
change the styles of one single instance of a component using The sx prop
main example: LinkMui.tsx

Global theme overrides
Material UI provides theme tools for managing style consistency between all components across all the user interface.
steps:
createTheme: App.tsx line 21
wrap with ThemeProvider App.tsx line 81

Use of external libs
steps:
import the external lib: styles.css
include the external lib in customTheme: App.tsx line 31
