import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert">
      {children}
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Alert;
