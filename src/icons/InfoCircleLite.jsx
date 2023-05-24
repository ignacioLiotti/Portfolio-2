import * as React from "react"
const InfoCircleLite = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M7 .903a6.098 6.098 0 1 1-.001 12.195A6.098 6.098 0 0 1 7 .903ZM7 0a7.001 7.001 0 1 0 .002 14.002A7.001 7.001 0 0 0 7 0ZM5.984 9.71h.339V6.323h-.34a.339.339 0 0 1-.338-.34v-.225c0-.187.152-.339.339-.339h1.355c.187 0 .338.152.338.34v3.95h.34c.186 0 .338.152.338.34v.225a.339.339 0 0 1-.339.339H5.984a.339.339 0 0 1-.339-.339v-.226c0-.187.152-.338.339-.338ZM7 2.935a.903.903 0 1 0 0 1.807.903.903 0 0 0 0-1.807Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default InfoCircleLite
