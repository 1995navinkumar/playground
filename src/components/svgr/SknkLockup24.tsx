import * as React from "react";
import type { SVGProps } from "react";
const SvgSknkLockup24 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={24}
    aria-label="sknk"
    style={{
      display: "block",
      flex: "none",
    }}
    viewBox="0 0 372 112"
    {...props}
  >
    <defs>
      <mask
        id="sknk-lockup-24_svg__a"
        width={96}
        height={96}
        x={0}
        y={8}
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#FFF"
          d="M21 8h54a21 21 0 0 1 21 21v54a21 21 0 0 1-21 21H21A21 21 0 0 1 0 83V29A21 21 0 0 1 21 8"
        />
        <path d="M20 8h13l10 96H30ZM63 8h13l-10 96H53Z" />
      </mask>
    </defs>
    <path
      fill="currentColor"
      d="M0 8h96v96H0z"
      mask="url(#sknk-lockup-24_svg__a)"
    />
    <text
      x={132}
      y={86}
      fill="currentColor"
      fontFamily="Inter Tight, system-ui, -apple-system, sans-serif"
      fontSize={96}
      fontWeight={500}
      letterSpacing={-4.3}
    >
      {"sknk"}
    </text>
  </svg>
);
export default SvgSknkLockup24;
