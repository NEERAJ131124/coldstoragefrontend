import { useState } from "react";
import { Bell } from "react-feather";
import { Card, CardBody, Col, Toast, ToastBody } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { stackingToastsData, stackingToastsSubTitle } from "../../../../Data/BonusUi/Toasts";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { StackingToastsTitle } from "../../../../Utils/Constants";
import CommonToast from "../Common/CommonToast";

export default function StackingToasts() {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);
  return (
    <Col md={6}>
      <Card>
        <CommonCardHeader title={StackingToastsTitle} subTitle={stackingToastsSubTitle} />
        <CardBody className="toast-rtl">
          <div className="toast-container position-static">
            <Toast isOpen={open}>
              <div className="toast-header">
                <Bell className="toast-icons toast-primary" />
                <strong className="me-auto">{"Admiro Theme"}</strong>
                <small className="text-danger">{"just now"}</small>
                <Btn close className="p-0" onClick={toggle}></Btn>
              </div>
              <ToastBody className="toast-dark">{"Hello, I'm a web-designer."}</ToastBody>
            </Toast>
            {stackingToastsData.map((data) => (
              <CommonToast key={data.id} icon={data.icon} strongText={data.strongText} smallClass="text-muted" smallText={data.smallText} bodyText={data.bodyText} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
