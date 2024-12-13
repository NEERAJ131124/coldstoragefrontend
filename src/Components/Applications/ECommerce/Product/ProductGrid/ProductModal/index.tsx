import React from 'react'
import { Col, Modal, ModalHeader, Row } from 'reactstrap';
import { ProductModalProps } from '../../../../../../Types/ECommerce.type';
import { Image } from '../../../../../../AbstractElements';
import { dynamicImage } from '../../../../../../Utils';
import ModalProductDetails from './ModalProductDetails';
import ProductQuantity from './ProductQuantity';

export default function ProductModal({ value, setOpenModal, dataId, modelData }: ProductModalProps) {
    const onCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <Modal size="lg" isOpen={value} toggle={onCloseModal} centered wrapClassName='product-box'>
            <ModalHeader color='transparent' toggle={onCloseModal}>
                <Row className="product-box product-modal-box">
                    <Col lg={6} className="product-img">
                        <Image alt="image" className="img-fluid" src={modelData?.image ? dynamicImage(modelData.image) : ""} />
                    </Col>
                    <Col lg={6} className="product-details text-start">
                        <ModalProductDetails modelData={modelData} />
                        <ProductQuantity dataId={dataId} modelData={modelData} />
                    </Col>
                </Row>
            </ModalHeader>
        </Modal>
    )
}