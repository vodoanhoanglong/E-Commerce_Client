import {
  createTheme,
  ThemeProvider as MUIProvider,
  ThemeOptions,
  StyledEngineProvider,
  CssBaseline,
} from '@mui/material';
import { useMemo } from 'react';
import ComponentsOverrides from './overrides';
import palette from './palette';
import shadows, { customShadows } from './shadows';
import typography from './typography';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 8 },
      typography,
      shadows,
      customShadows,
    }),
    [],
  );
  const theme = createTheme(themeOptions);
  theme.components = ComponentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIProvider>
    </StyledEngineProvider>
  );
}
