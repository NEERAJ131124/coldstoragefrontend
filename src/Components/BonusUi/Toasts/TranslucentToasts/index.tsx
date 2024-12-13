import { useState } from "react";
import { Disc } from "react-feather";
import { Card, CardBody, Col, Toast, ToastBody } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { translucentToastSubTitle, translucentToastsData } from "../../../../Data/BonusUi/Toasts";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { TranslucentToastsTitle } from "../../../../Utils/Constants";
import CommonToast from "../Common/CommonToast";

export default function TranslucentToasts() {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);
  return (
    <Col md={6}>
      <Card className="overflow-hidden">
        <CommonCardHeader title={TranslucentToastsTitle} subTitle={translucentToastSubTitle} />
        <CardBody className="toast-rtl bg-dark">
          <div className="toast-container">
            <Toast isOpen={open}>
              <div className="toast-header">
                <Disc className="toast-icons toast-info" />
                <strong className="me-auto">{"Admiro Theme"}</strong>
                <small className="text-muted d-sm-block d-none">{"11 mins ago"}</small>
                <Btn close className="p-0" onClick={toggle}></Btn>
              </div>
              <ToastBody className="toast-dark">{"Hello, I'm a web-designer."}</ToastBody>
            </Toast>
            {translucentToastsData.map((data) => (
              <CommonToast key={data.id} icon={data.icon} strongText={data.strongText} smallClass={`d-sm-block d-none text-${data.smallClass}`} smallText={data.smallText} bodyText={data.bodyText} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
