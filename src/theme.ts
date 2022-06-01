import { extendTheme } from "@chakra-ui/react"

export default extendTheme({
  components: {
    Divider: {
      baseStyle: {
        borderWidth: "2px",
        borderColor: "gray.300",
      },
    },
  },
  colors: {
    brand: {
      100: "#5bbfba",
      200: "#5f6caf",
      300: "#e7f0c3",
      400: "#f0cf85",
      500: "#a4d4ae",
    },
    primary: "#5f6caf",
    bg: {
      100: "#edf0f9",
      200: "#e6e6e6",
      300: "#ccd0dc",
    },
  },
})
