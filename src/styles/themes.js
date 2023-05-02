import { headingStyle } from "./headingStyles";
import { textStyle } from "./textStyles";

const override = {
  components: {
    ...headingStyle,
    ...textStyle,
  },
  colors: {
    primary_1: "#35424a",
    primary_2: "#ff4500",
    primary_3: "#f4f4f4",
    primary_4: "#ffffff",

  },
  fonts: {
    Arial: "Arial",
    Helvetica: "Helvetica",
    sansSerif:"sans-serif",
  },
};
export default override;
