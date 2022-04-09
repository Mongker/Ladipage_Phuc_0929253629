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
AboutUs.propTypes = {};
AboutUs.defaultProps = {};
function AboutUs() {
    return (
        <section className="fw" id="registration">
            <div className="row">
                <div className="col-lg-6 pd0"  style={{ background: '#fafaf9'}}>
                    {/*<video*/}
                    {/*    width="100%"*/}
                    {/*    height="100%"*/}
                    {/*    autoPlay*/}
                    {/*    loop*/}
                    {/*    muted*/}
                    {/*    playsInline*/}
                    {/*    src="http://103.57.222.215:4040/api/file/levanmong/9-4-2022/9beck-ccl7b.mp4"*/}
                    {/*/>*/}
                    {/*<iframe*/}
                    {/*    width="100%"*/}
                    {/*    height="100%"*/}
                    {/*    src="https://www.youtube.com/embed/VdBZNAOHYj4"*/}
                    {/*    title="YouTube video player"*/}
                    {/*    frameBorder="0"*/}
                    {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                    {/*    allowFullScreen*/}
                    {/*/>*/}
                    <img
                        className="img-fluid"
                        src="/assets/images/imgAbout.png"
                        alt=""
                        style={{ height: 500 }}
                    />
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
            <img className="bgrAboutus img-fluid bgr" src="/assets/images/bgr1.png" alt="" />
        </section>
    );
}

export default AboutUs;
