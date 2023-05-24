import * as React from "react"

const Tick = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Zm6.968 8c0 3.829-3.1 6.968-6.968 6.968A6.967 6.967 0 0 1 1.032 8c0-3.829 3.1-6.968 6.968-6.968 3.829 0 6.968 3.1 6.968 6.968Zm-6.694 2.793 3.71-3.712a.387.387 0 0 0 0-.549l-.23-.229a.387.387 0 0 0-.547 0L8 9.516l-3.21-3.21a.387.387 0 0 0-.548 0l-.23.23a.387.387 0 0 0 0 .548l3.71 3.713c.155.148.4.148.552-.004Z"
      fill="currentColor"
    />
  </svg>
)

export default Tick