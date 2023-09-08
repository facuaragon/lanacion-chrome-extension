import React from "react";

const Snow = ({ width, height, fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    {...props}
  >
    <g fill={fill} color="#000">
      <path
        d="M8.56.084C6.672.085 5.068 1.249 4.301 2.912l-.055.113-.121.01C2.38 3.162 1 4.672 1 6.508 1 8.427 2.5 10 4.357 10h8.125C13.874 10 15 8.818 15 7.385c0-1.087-.653-2-1.578-2.393l-.121-.05-.01-.13C13.172 2.194 11.115.086 8.562.084zm0 1c2.004.001 3.635 1.652 3.731 3.773v.016l.06.748.677.291v.002c.57.242.973.785.973 1.47 0 .91-.692 1.616-1.518 1.616H4.36C3.069 9 2 7.905 2 6.508c0-1.334.988-2.388 2.198-2.477l.705-.049.305-.648v-.002c.618-1.343 1.872-2.247 3.351-2.248z"
        fontFamily="sans-serif"
        fontWeight={400}
        overflow="visible"
        style={{
          lineHeight: "normal",
          InkscapeFontSpecification: "sans-serif",
          textIndent: 0,
          textAlign: "start",
          textDecorationLine: "none",
          textTransform: "none",
          marker: "none",
        }}
      />
      <path
        d="m9 11.5-1 .2v1.234l-1.155-.667-.5.866L7.5 13.8l-1.155.667.5.866L8 14.666V16h1v-1.334l1.155.667.5-.866L9.5 13.8l1.155-.667-.5-.866L9 12.934zm-4.516-.599-.688.138v.85L3 11.429l-.344.597.795.46-.795.458.344.597.796-.46V14h.688v-.919l.796.46.344-.597-.795-.459.795-.46-.344-.596-.796.46zm9.016-.458-.79.158v.975l-.914-.527-.395.685.913.527-.913.527.395.685.914-.528V14h.79v-1.055l.913.528.396-.685-.914-.527.914-.527-.396-.685-.913.527z"
        overflow="visible"
        style={{
          marker: "none",
        }}
      />
    </g>
  </svg>
);

export default Snow;
