import * as React from "react";
const Pokeball = (props) => (
  <svg
    width="480px"
    height="48px"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
      stroke="black"
      strokeWidth={4}
      strokeLinejoin="round"
    />
    <circle
      cx={24}
      cy={24}
      r={6}
      fill="#2F88FF"
      stroke="black"
      strokeWidth={4}
      strokeLinejoin="round"
    />
    <path
      d="M30 24H44"
      stroke="black"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 24H18"
      stroke="black"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={24} cy={24} r={2} fill="white" />
  </svg>
);
export default Pokeball;
