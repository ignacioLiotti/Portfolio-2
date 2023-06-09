import * as React from "react"

const Cross = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Zm0 14.968A6.967 6.967 0 0 1 1.032 8c0-3.829 3.1-6.968 6.968-6.968 3.829 0 6.968 3.1 6.968 6.968 0 3.829-3.1 6.968-6.968 6.968Zm3.058-9.203L8.823 8l2.235 2.236a.387.387 0 0 1 0 .548l-.274.274a.387.387 0 0 1-.549 0L8 8.823l-2.235 2.235a.387.387 0 0 1-.549 0l-.274-.274a.387.387 0 0 1 0-.549L7.177 8 4.942 5.765a.387.387 0 0 1 0-.549l.274-.274a.387.387 0 0 1 .549 0L8 7.177l2.236-2.235a.387.387 0 0 1 .548 0l.274.274a.393.393 0 0 1 0 .549Z"
      fill="currentColor"
    />
  </svg>
)

export default Cross
