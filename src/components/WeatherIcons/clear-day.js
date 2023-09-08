import React from "react";

const ClearDay = ({ width, height, fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill={fill}
      d="M7.5 0v2h1V0zM4.434.822l-.868.5 1.002 1.733.866-.5zm7.132 0-1 1.733.868.5 1-1.733zM8 3a5 5 0 1 0 0 10A5 5 0 0 0 8 3zm-6.678.566-.5.868 1.733 1 .5-.868zm13.356 0-1.733 1 .5.868 1.733-1zM8 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zM0 7.5v1h2v-1zm14 0v1h2v-1zM2.555 10.566l-1.733 1 .5.868 1.733-1.002zm10.89 0-.5.868 1.733 1 .5-.868zm-8.879 2.38-1 1.732.868.5 1-1.733zm6.868 0-.868.5 1 1.732.868-.5zM7.5 14v2h1v-2z"
    />
  </svg>
);

export default ClearDay;
