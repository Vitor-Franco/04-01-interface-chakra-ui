import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    highlightColor: '#FFBA08',
    darkTextAndHeadingColor: '#47585B',
    lightTextAndHeadingColor: '#F5F8FA',
    darkInfoColor: '#999999',
    lightInfoColor: '#DADADA',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {},
    },
  },
});
