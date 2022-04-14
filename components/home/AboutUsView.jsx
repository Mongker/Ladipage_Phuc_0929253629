// /**
//  * Copyright 2016-present, Bkav, Corp.
//  * All rights reserved.
//  *
//  * This source code is licensed under the Bkav license found in the
//  * LICENSE file in the root directory of this source tree. An additional grant
//  * of patent rights can be found in the PATENTS file in the same directory.
//  *
//  * @author monglv@bkav.com on 01/04/2022
//  *
//  * History:
//  * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
//  */
//
// import React from 'react';
import useAnimation from '../hooks/useAnimation';
// // import PropTypes from 'prop-types';
// AboutUs.propTypes = {};
// AboutUs.defaultProps = {};
// function AboutUs() {
//     const [refAnimation, isVisible] = useAnimation();
//     return (
//         <React.Fragment>
//             <section className="fw" id="registration">
//                 <div className="row custom_row_about" ref={refAnimation}>
//                     <div className="col-lg-4 pd0 max-height" style={{ background: '#fafaf9' }}>
//                         {/*<video*/}
//                         {/*    width="100%"*/}
//                         {/*    height="100%"*/}
//                         {/*    autoPlay*/}
//                         {/*    loop*/}
//                         {/*    muted*/}
//                         {/*    playsInline*/}
//                         {/*    src="http://103.57.222.215:4040/api/file/levanmong/9-4-2022/9beck-ccl7b.mp4"*/}
//                         {/*/>*/}
//                         {/*<iframe*/}
//                         {/*    width="100%"*/}
//                         {/*    height="100%"*/}
//                         {/*    src="https://www.youtube.com/embed/VdBZNAOHYj4"*/}
//                         {/*    title="YouTube video player"*/}
//                         {/*    frameBorder="0"*/}
//                         {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
//                         {/*    allowFullScreen*/}
//                         {/*/>*/}
//                         {/*<img*/}
//                         {/*    className={`img-fluid ${isVisible ? 'show_left' : ''}`}*/}
//                         {/*    src="/assets/images/imgAbout.png"*/}
//                         {/*    alt=""*/}
//                         {/*    style={{ height: 500 }}*/}
//                         {/*/>*/}
//                         {
//                             <iframe
//                                 width="100%"
//                                 height="100%"
//                                 src="https://www.youtube.com/embed/InnGvaLVQ8Q"
//                                 title="YouTube video player"
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                                 className={`${isVisible ? 'show_left' : ''} media`}
//                             />
//                         }
//                     </div>
//                     <div className={'col-lg-2'} />
//                     <div
//                         className={`col-lg-4 pd0 contentRegistration contentRegistration1 max-height ${
//                             isVisible ? 'show_right' : ''
//                         }`}
//                     >
//                         <h5 className="title coloreffect font_size_custom">
//                             ĐĂNG KÝ NHẬN BẢNG GIÁ, CHÍNH SÁCH VÀ TIẾN ĐỘ DỰ ÁN
//                         </h5>
//                         <form method="POST">
//                             <div className="row">
//                                 <div className="col-lg-6 formGroup">
//                                     <label htmlFor="">Họ và tên</label>
//                                     <input
//                                         type="text"
//                                         id="fullname"
//                                         name="fullname"
//                                         className="form-control"
//                                     />
//                                 </div>
//                                 <div className="col-lg-6 formGroup">
//                                     <label htmlFor="">Số điện thoại</label>
//                                     <input
//                                         type="text"
//                                         id="phonenumber"
//                                         name="phonenumber"
//                                         className="form-control"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="btnSubmit btnStyle custom_btn">
//                                 <button
//                                     className={'btnSubmit_border'}
//                                     type="button"
//                                     id="btnSubmit"
//                                     onClick={() => {}}
//                                 >
//                                     Đăng ký ngay <i className="fas fa-arrow-right" />
//                                 </button>
//                             </div>
//                             <p id="message" />
//                         </form>
//                     </div>
//                 </div>
//                 <img
//                     className="bgrAboutus img-fluid bgr custom_bgr1"
//                     src="/assets/images/bgr1.png"
//                     alt=""
//                 />
//             </section>
//             <style jsx>{`
//                 .custom_row_about {
//                     //padding: 0 185px;
//                     position: absolute;
//                     display: flex;
//                     width: 100%;
//                     justify-content: center;
//                 }
//                 .max-height {
//                     max-height: 288px;
//                 }
//                 .media {
//                     border-radius: 20px;
//                 }
//                 .contentRegistration1 {
//                     padding: 0px 8px !important;
//                     border-radius: 20px;
//                     box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
//                 }
//                 .font_size_custom {
//                     font-size: 17px;
//                     text-align: center;
//                 }
//                 .custom_btn {
//                     margin-top: 0 !important;
//                 }
//                 @media (min-width: 0px) and (max-width: 767px) {
//                     .custom_row_about {
//                         position: unset;
//                         display: unset;
//                         width: 100%;
//                         justify-content: unset;
//                     }
//                     .max-height {
//                         max-height: unset;
//                     }
//                     .media {
//                         border-radius: unset;
//                     }
//                     .contentRegistration1 {
//                         margin-top: 5px;
//                         border-radius: unset;
//                         padding: 20px 12px !important;
//                     }
//                     .btnSubmit_border {
//                         border-radius: 1em;
//                     }
//                     .custom_bgr1 {
//                       display: none;
//                     }
//                 }
//             `}</style>
//         </React.Fragment>
//     );
// }
//
// export default AboutUs;
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
    const [refAnimation, isVisible] = useAnimation();
    return (
        <section className="fw" id="aboutUs" ref={refAnimation}>
            <div className="container">
                <div className="row">
                    <div className={`col-lg-8 formCol ${isVisible && 'show_left'}`}>
                        {/*<img className="img-fluid" src="/assets/images/imgAbout.png" alt="" />*/}
                        {
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/InnGvaLVQ8Q"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className={`${isVisible ? 'show_left' : ''} border_radius`}
                            />
                        }
                    </div>
                    <div
                        className={`col-lg-4 formCol aboutContent contentRegistration1 border_radius ${
                            isVisible && 'show_right'
                        }`}
                    >
                        <h5 className="title coloreffect font_size_custom">
                            ĐĂNG KÝ NHẬN BẢNG GIÁ, CHÍNH SÁCH VÀ TIẾN ĐỘ DỰ ÁN
                        </h5>
                        <form method="POST">
                            <div className="row">
                                <div className="col-lg-6 formGroup text">
                                    <label htmlFor="">Họ và tên</label>
                                    <input
                                        type="text"
                                        id="fullname"
                                        name="fullname"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-lg-6 formGroup text">
                                    <label htmlFor="">Số điện thoại</label>
                                    <input
                                        type="text"
                                        id="phonenumber"
                                        name="phonenumber"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="btnSubmit btnStyle custom_btn">
                                <button
                                    className={'btnSubmit_border'}
                                    type="button"
                                    id="btnSubmit"
                                    onClick={() => {}}
                                >
                                    Đăng ký ngay <i className="fas fa-arrow-right" />
                                </button>
                            </div>
                            <p id="message" />
                        </form>
                    </div>
                </div>
            </div>
            <img className="bgrAboutus img-fluid bgr" src="/assets/images/bgr1.png" alt="" />
            <style jsx>{`
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
                        content: "";
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
