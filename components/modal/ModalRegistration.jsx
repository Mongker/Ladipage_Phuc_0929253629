/**
 * Copyright 2016-present, Bkav, Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author monglv@bkav.com on 02/04/2022
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React, { useState } from 'react';
import Modal from 'react-modal';
// import PropTypes from 'prop-types';
Modal.setAppElement('#web_app');

function ModalRegistration({ isOpen, setIsOpen }) {
    if (typeof window === 'undefined') return <React.Fragment />;
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: window?.innerWidth < 400 ? '100%' : '450px',
            zIndex: 1,
            backgroundColor: '#073634',
        },
        overlay: {
            backgroundColor: 'rgb(96 96 96 / 75%)',
        },
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen('')}
            contentLabel="Example Modal"
            //@ts-ignore
            style={customStyles}
        >
            <div className="row contentRegistration containerModal">
                <h5 className="coloreffect">ĐĂNG KÝ NHẬN BẢNG GIÁ, CHÍNH SÁCH VÀ TIẾN ĐỘ DỰ ÁN</h5>
                <form method="POST">
                    <div className="row">
                        <div className="col-lg-6 formGroup" style={{ color: '#2b877c' }}>
                            <label htmlFor="">Họ và tên</label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                className="form-control"
                            />
                        </div>
                        <div className="col-lg-6 formGroup" style={{ color: '#2b877c' }}>
                            <label htmlFor="">Số điện thoại</label>
                            <input
                                type="text"
                                id="phonenumber"
                                name="phonenumber"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="btnSubmit btnStyle">
                        <button type="button" id="btnSubmit">
                            Đăng ký ngay <i className="fas fa-arrow-right" />
                        </button>
                    </div>
                    <p id="message" />
                </form>
            </div>
            <style jsx>{`
                .containerModal {
                    position: relative;
                    z-index: 1000000000;
                }
            `}</style>
        </Modal>
    );
}

ModalRegistration.propTypes = {};

ModalRegistration.defaultProps = {};

export default ModalRegistration;
