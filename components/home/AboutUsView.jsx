import useAnimation from '../hooks/useAnimation';
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
import usePostData from '../hooks/usePostData';

function AboutUs({ data_video, isOpen }) {
    const { name, setName, phone, setPhone, handleSubmit } = usePostData();
    const [refAnimation, isVisible] = useAnimation(500);
    const idYoutube =
        data_video?.['VIDEO_YOUTUBE'] &&
        typeof data_video['VIDEO_YOUTUBE'] === 'string' &&
        data_video['VIDEO_YOUTUBE'].split('/')[data_video['VIDEO_YOUTUBE'].split('/').length - 1];
    const className = `border_radius`;
    return (
        <section className="fw" id="aboutUs" ref={refAnimation}>
            <div className="container container_custom">
                <div className="row">
                    <div
                        className={`col-lg-8 formCol border_radius ${
                            isVisible ? 'show_left' : 'display_none_left'
                        }`}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {data_video?.['IMAGE'] && (
                            <img
                                className={`img-fluid ${className}`}
                                src={
                                    data_video?.['IMAGE']
                                        ? data_video?.['IMAGE']
                                        : `/assets/images/imgAbout.png`
                                }
                                alt=""
                            />
                        )}
                        {data_video?.['VIDEO_SYSTEM'] && (
                            <video
                                className={`${className} bgrSystem`}
                                width="100%"
                                height="96%"
                                autoPlay
                                controls
                                muted
                                loop
                            >
                                <source src={data_video['VIDEO_SYSTEM']} type="video/mp4" />
                            </video>
                        )}
                        {data_video?.['VIDEO_YOUTUBE'] && (
                            <iframe
                                width="100%"
                                height="96%"
                                src={`https://www.youtube.com/embed/${idYoutube}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className={className}
                            />
                        )}
                    </div>
                    <div
                        className={`col-lg-4 formCol aboutContent contentRegistration1 border_radius ${
                            isVisible ? 'show_right' : 'display_none_right'
                        }`}
                    >
                        <h5 className="title coloreffect font_size_custom">
                            ĐĂNG KÝ NHẬN BẢNG GIÁ, CHÍNH SÁCH VÀ TIẾN ĐỘ DỰ ÁN
                        </h5>
                        <form method="POST" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6 formGroup text">
                                    <label htmlFor="">Họ và tên</label>
                                    <input
                                        type="text"
                                        id="fullname"
                                        name="fullname"
                                        className="form-control"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </div>
                                <div className="col-lg-6 formGroup text">
                                    <label htmlFor="">Số điện thoại</label>
                                    <input
                                        type="text"
                                        id="phonenumber"
                                        name="phonenumber"
                                        className="form-control"
                                        value={phone}
                                        onChange={(event) => setPhone(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div
                                className="btnSubmit btnStyle custom_btn"
                                style={{ cursor: 'pointer' }}
                            >
                                <button
                                    className={'btnSubmit_border'}
                                    type="button"
                                    id="btnSubmit"
                                    onClick={handleSubmit}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Đăng ký ngay <i className="fas fa-arrow-right" />
                                </button>
                            </div>
                            <p id="message" />
                        </form>
                    </div>
                </div>
            </div>
            <img
                onClick={handleSubmit}
                className="bgrAboutus img-fluid bgr"
                src="/assets/images/bgr1.png"
                alt=""
            />
            <style jsx>{`
                .container_custom {
                    position: relative;
                    z-index: '${isOpen} ? 0 : 10';
                }
                .contentRegistration1 {
                    background-color: #083932;
                    margin-top: 10px;
                    height: 450px;
                }
                .border_radius {
                    border-radius: 1em;
                }
                .font_size_custom {
                    font-size: 30px;
                    text-align: center;
                }
                .text {
                    color: white;
                }
                .bgrSystem {
                    background-color: #083932;
                    border-radius: 1em;
                }
                @media (min-width: 0px) and (max-width: 767px) {
                    .bgrAboutus {
                        display: none;
                    }
                    #aboutUs::before {
                        display: block;
                        height: 46%;
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: 59%;
                        content: '';
                        background-image: url(/assets/images/bgrabout.jpg);
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: top;
                    }
                }
            `}</style>
        </section>
    );
}

export default AboutUs;
