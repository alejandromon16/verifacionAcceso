import { FC } from "react";

interface Props {
  onClick: () => void;
}

const XButton: FC<Props> = ({ onClick }) => {
  return (
    <button 
     style={{background: "none", border:"none" }}
     onClick={onClick}>
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path
          fill="Black"
          d="M18.3 5.7L12 12l6.3 6.3a1 1 0 1 1-1.4 1.4L10.6 13 4.3 19.3a1 1 0 1 1-1.4-1.4L8.9 12 2.6 5.7A1 1 0 0 1 3.9 4.3L10.6 11l6.3-6.3a1 1 0 0 1 1.4 1.4z"
        />
      </svg>

    </button>
  );
};

export default XButton;
