import React, { Fragment } from "react";
import { toast } from "react-toastify";
import ConfigDB from "../../Config/ThemeConfig";
import { Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { Btn, P } from "../../AbstractElements";
import CopyToClipboard from "react-copy-to-clipboard";
import { ConfigurationProp } from "../../Types/Layout.type";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxToolkit/Store";

export default function ConfigurationClass({ modalToggle, modal }: ConfigurationProp) {
  const { layout_type, sideBarIconType } = useSelector((state: RootState) => state.themeCustomizer);

  const handleThemeCopy = () => {
    toast.success("Code Copied to clipboard !", {
      position: "bottom-right",
      autoClose: 3000,
      closeOnClick: true,
      theme: "light",
    });
  };

  const configDB = ConfigDB;
  return (
    <Fragment>
      <Modal isOpen={modal} toggle={modalToggle} className="modal-body" centered={true} >
        <ModalHeader toggle={modalToggle}>{'Configuration'}</ModalHeader>
        <ModalBody>
          <Container fluid={true} className="bd-example-row">
            <Row>
              <P>{"To replace our design with your desired theme. Please do configuration as mention"}</P>
              <P> <b> {"Path : src > config > ThemeConfig.tsx "}</b></P>
            </Row>
            <pre>
              <code>
                <div> {"export const ConfigDB ="}&#123;</div>
                <div>   {"settings"}&#58; &#123;</div>
                <div>     {"layout_type"}&#58; '{layout_type}',</div>
                <div>     {"layout_class"}&#58; '{ConfigDB.settings.layout_class}',</div>
                <div>     {"sidebar"}&#58; &#123;</div>
                <div>       {"type"}&#58; '{ConfigDB.settings.sidebar.type}',</div>
                <div>       {"iconType"}&#58; '{sideBarIconType}',</div>
                <div>     &#125;,</div>
                <div>     {"sidebar_setting"}&#58; '{ConfigDB.settings.sidebar_setting}',</div>
                <div>   &#125;,</div>
                <div>   {"color"}&#58; &#123;</div>
                <div>     {"primary_color"}&#58; '{ConfigDB.color.primary_color}',</div>
                <div>     {"secondary_color"}&#58; '{ConfigDB.color.secondary_color}',</div>
                <div>     {"mix_background_layout"}&#58; '{ConfigDB.color.mix_background_layout}',</div>
                <div>   &#125;,</div>
                <div>   {"router_animation"}&#58; '{ConfigDB.router_animation}'</div>
                <div> &#125;</div>
              </code>
            </pre>
          </Container>
        </ModalBody>
        <ModalFooter>
          <CopyToClipboard text={JSON.stringify(configDB)}>
            <Btn color="primary" className="notification" onClick={handleThemeCopy} >{'Copy text'}</Btn>
          </CopyToClipboard>
          <Btn color="secondary" onClick={modalToggle}> {'Cancel'}</Btn>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};