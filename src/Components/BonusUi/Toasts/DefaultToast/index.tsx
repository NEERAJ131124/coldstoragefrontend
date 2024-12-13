import { useState } from "react";
import { Card, CardBody, Col, Toast, ToastBody } from "reactstrap";
import { Btn, Image } from "../../../../AbstractElements";
import { colorsSchemeSubTitle } from "../../../../Data/BonusUi/Toasts";
import { dynamicImage } from "../../../../Utils";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { DefaultToastTitle } from "../../../../Utils/Constants";

export default function DefaultToast() {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonCardHeader title={DefaultToastTitle} subTitle={colorsSchemeSubTitle} />
        <CardBody className="toast-rtl">
          <Toast className="default-show-toast" isOpen={open}>
            <div className="toast-img toast-header">
              <Image className="rounded me-2" src={dynamicImage(`other-images/profile.png`)} alt="profile" />
              <strong className="me-auto">{"Admiro Theme"}</strong>
              <small className="d-sm-block d-none">{"10 min ago"}</small>
              <Btn close className="p-0" onClick={toggle}></Btn>
            </div>
            <ToastBody className="toast-dark">
              <strong className="text-success">{"Well done!"}</strong> {"You successfully read this important message."}
            </ToastBody>
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
}
