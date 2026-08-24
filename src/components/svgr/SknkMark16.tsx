import type { SVGProps } from "react";
const SvgSknkMark16 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    aria-label="sknk"
    style={{
      display: "block",
      flex: "none",
    }}
    viewBox="0 0 96 96"
    {...props}
  >
    <defs>
      <mask
        id="sknk-mark-16_svg__a"
        width={96}
        height={96}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#FFF"
          d="M21 0h54a21 21 0 0 1 21 21v54a21 21 0 0 1-21 21H21A21 21 0 0 1 0 75V21A21 21 0 0 1 21 0"
        />
        <path d="M20 0h13l10 96H30ZM63 0h13L66 96H53Z" />
      </mask>
    </defs>
    <path
      fill="currentColor"
      d="M0 0h96v96H0z"
      mask="url(#sknk-mark-16_svg__a)"
    />
  </svg>
);
export default SvgSknkMark16;
