import { useState } from "react";
import { Toast, ToastBody } from "reactstrap";
import { Btn, Image } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Utils";

export default function TopRightToast() {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);
  const handleClick = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 8000);
  };
  return (
    <>
      <Btn color="primary" id="liveToast" onClick={handleClick}>
        {"Top-right toast"}
      </Btn>
      <div className="toast-container position-fixed top-0 end-0 p-3 toast-index toast-rtl">
        <Toast id="liveToast" isOpen={visible}>
          <div className="toast-img toast-header">
            <Image className="rounded me-2" src={dynamicImage(`other-images/profile.png`)} alt="profile" />
            <strong className="me-auto">{"Admiro Theme"}</strong>
            <small>{"5 min ago"}</small>
            <Btn close className="p-0" onClick={toggle}></Btn>
          </div>
          <ToastBody className="toast-dark">{"Hello, I'm a web-designer."}</ToastBody>
        </Toast>
      </div>
    </>
  );
}
