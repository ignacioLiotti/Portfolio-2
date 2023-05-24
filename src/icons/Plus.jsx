import * as React from "react"

const Plus = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.528 0h.914c.126 0 .228.138.228.308v15.384c0 .17-.102.308-.228.308h-.914c-.126 0-.228-.138-.228-.308V.308c0-.17.102-.308.228-.308Z"
      fill="currentColor"
    />
    <path
      d="M16 7.548v.914c0 .126-.138.228-.308.228H.308C.138 8.69 0 8.588 0 8.462v-.914c0-.126.138-.228.308-.228h15.384c.17 0 .308.102.308.228Z"
      fill="currentColor"
    />
  </svg>
)

export default Plus
