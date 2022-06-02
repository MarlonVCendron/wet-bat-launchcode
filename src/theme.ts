import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  components: {
    Divider: {
      baseStyle: {
        borderWidth: '2px',
        borderColor: 'gray.300',
      },
    },
    FormLabel: {
      baseStyle: {
        m: 0,
        p: 4,
        pb: 0,
        textTransform: 'uppercase',
        color: 'gray.400',
        fontSize: 14,
      },
    },
    Input: {
      variants: {
        dashboard: {
          field: {
            border: 'none',
            bg: 'inherit',
            fontSize: 18,
            color: 'brand.200',
          },
        },
      },
    },
    Select: {
      variants: {
        dashboard: {
          field: {
            border: 'none',
            bg: 'inherit',
            fontSize: 18,
            color: 'brand.200',
          },
        },
      },
    },
  },
  colors: {
    brand: {
      100: '#5bbfba',
      200: '#5f6caf',
      300: '#e7f0c3',
      400: '#f0cf85',
      500: '#a4d4ae',
      600: '#4264c9',
    },
    primary: '#5f6caf',
    bg: {
      100: '#edf0f9',
      200: '#e6e6e6',
      300: '#ccd0dc',
      400: '#efeff7',
    },
  },
});
