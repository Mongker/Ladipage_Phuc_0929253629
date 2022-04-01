/**
 * Copyright 2016-present, Bkav, Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author monglv@bkav.com on 01/04/2022
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
// import PropTypes from 'prop-types';

function RegistrationViews() {
    return (
        <section className="fw" id="registration">
            <div className="row row_rev">
                <div className="col-lg-6 pd0">
                    <img className="img-fluid" src="/assets/images/imgRes.jpg" alt="" />
                </div>
                <div className="col-lg-6 pd0 contentRegistration">
                    <h5 className="title coloreffect">
                        ĐĂNG KÝ NHẬN BẢNG GIÁ, CHÍNH SÁCH VÀ TIẾN ĐỘ DỰ ÁN
                    </h5>
                    <form method="POST">
                        <div className="row">
                            <div className="col-lg-6 formGroup">
                                <label htmlFor="">Họ và tên</label>
                                <input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    className="form-control"
                                />
                            </div>
                            <div className="col-lg-6 formGroup">
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
                            <button type="button" id="btnSubmit" onClick={() => {}}>
                                Đăng ký ngay <i className="fas fa-arrow-right" />
                            </button>
                        </div>
                        <p id="message" />
                    </form>
                </div>
            </div>
        </section>
    );
}

RegistrationViews.propTypes = {};

RegistrationViews.defaultProps = {};

export default RegistrationViews;
