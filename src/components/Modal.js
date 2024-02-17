import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBG">
      {children}
    </div>,
    document.getElementById('modal')

  );
}

export { Modal }