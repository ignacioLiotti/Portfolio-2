import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={14}
    height={16}
    viewBox={"0 0 14 16"}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.8 9c-.897 0-1.328.5-2.8.5-1.472 0-1.9-.5-2.8-.5A4.201 4.201 0 0 0 0 13.2v1.3A1.5 1.5 0 0 0 1.5 16h11a1.5 1.5 0 0 0 1.5-1.5v-1.3C14 10.881 12.119 9 9.8 9Zm3.2 5.5c0 .275-.225.5-.5.5h-11a.501.501 0 0 1-.5-.5v-1.3C1 11.434 2.434 10 4.2 10c.612 0 1.222.5 2.8.5 1.575 0 2.188-.5 2.8-.5 1.766 0 3.2 1.434 3.2 3.2v1.3ZM7 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-7c1.653 0 3 1.347 3 3S8.653 7 7 7 4 5.653 4 4s1.347-3 3-3Z"
      fill="currentColor"
    />
  </svg>
)

export default SvgComponent
