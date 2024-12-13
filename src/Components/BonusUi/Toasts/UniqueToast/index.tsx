import { useState } from "react";
import { Card, CardBody, Col, Toast } from "reactstrap";
import { Btn, Image } from "../../../../AbstractElements";
import { colorsSchemeSubTitle } from "../../../../Data/BonusUi/Toasts";
import { dynamicImage } from "../../../../Utils";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { UniqueToastTitle } from "../../../../Utils/Constants";
import UniqueToastContent from "../Common/UniqueToastContent";

export default function UniqueToast() {
  const [visible, setVisible] = useState(true);
  const toggle = () => setVisible(!visible);
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonCardHeader title={UniqueToastTitle} subTitle={colorsSchemeSubTitle} />
        <CardBody className="toast-rtl">
          <Toast isOpen={visible}>
            <div className="toast-img toast-headet">
              <Image className="rounded me-2" src={dynamicImage(`other-images/profile.png`)} alt="profile" />
              <strong className="me-auto">{"Admiro Theme"}</strong>
              <Btn close className="p-0" onClick={toggle}></Btn>
            </div>
            <UniqueToastContent visible={visible} setVisible={setVisible} />
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
}
