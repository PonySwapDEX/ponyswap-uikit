import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <image
        href="data:image/png;base64,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"
        width="90"
      ></image>
    </Svg>
  );
};

export default Icon;
