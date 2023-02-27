import { FC } from "react";

interface Props {
  size?: string;
  color?: string;
}

const Spinner: FC<Props> = ({ size = "50px", color = "#000" }) => {
  return (

    <div style={{display:"flex",justifyContent:"center",justifyItems:"center"}}>     
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        style={{ background: "none", display: "block", shapeRendering: "auto", width: size, height: size }}
      >
        <circle cx="50" cy="50" r="32" strokeWidth="8" stroke={color} strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
        </circle>
      </svg>
    </div>
  );
};




export default Spinner;
