// import React, { useState } from 'react';
// import { Button, Modal } from 'antd';

import { Button, Modal } from "antd";

import { PropsWithChildren } from "react";
interface AntModalProps extends PropsWithChildren {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string
    wrapClassName?: string | undefined
    width?: string | number;
 
}
const AntModal = ({ children, title, isModalOpen, width, wrapClassName, setIsModalOpen}: AntModalProps) => {




    // const showModal = () => {
    //     setIsModalOpen(true);
    // };

    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            <Modal
            style={{ top: 20 }}
                title={[
                    <h2 className="text-lg">{title}</h2>
                ]}
           
                wrapClassName={wrapClassName}
                width={width}
                closable={{ 'aria-label': 'دکمه بستن مودال' }}
                open={isModalOpen}
 
                // onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        لغو
                    </Button>,
                ]}
            >
                {children}
            </Modal>
        </>
    );
};

export default AntModal;