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
import useAnimation from '../hooks/useAnimation';
// import PropTypes from 'prop-types';

function SectionSlideViews() {
    const [refAnimation, isVisible] = useAnimation();
    return (
        <section className="fw" id="sectionSlide" ref={refAnimation}>
            <img className="img-fluid bgrSlide bgr" src="/assets/images/bgrslide.jpg" alt="" />
            <div className={`slideContent`}>
                <div className={`row ${isVisible && 'show_left'}`}>
                    <div className={`col-lg-6 textSlide`}>
                        <h5 className="title coloreffect">
                            Ân hạn nợ gốc vô thời hạn - Chỉ 50% GTCH để nhận bàn giao
                        </h5>
                        <p>
                            Khách hàng chỉ cần đóng 15% giá trị căn hộ (tương đương 180 triệu) để ký
                            kết hợp đồng mua bán, và đóng lũy tiến 50% giá trị căn hộ để nhận bàn
                            giao nhà. Phần còn lại sẽ được ân hạn vô thời hạn và trả lãi khoảng 4,2
                            triệu/tháng, tương đương lãi suất từ 9%/năm.
                        </p>
                        <p>
                            Khách hàng có thể đóng tiền gốc bất cứ khi nào, không lo phạt thanh toán
                            trước hạn, không lo duyệt hồ sơ vay vốn, không cần tài sản đảm bảo.
                            Trong khi đó, sau khi nhận bàn giao, khách hàng nhận căn hộ có thể khai
                            thác vận hành luôn, tạo ra dòng tiền bền vững, gần như “ngay lập tức”
                        </p>
                    </div>
                    <div className="col-lg-6 pd0">
                        <div className="slide1">
                            <div className="item">
                                <img
                                    className="img-fluid"
                                    src="/assets/images/1.%20Sky%20Roman%20Fall.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="item">
                                <img
                                    className="img-fluid"
                                    src="/assets/images/2.%202_KBHB_Condotel_Sanvuon_210406.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="item">
                                <img
                                    className="img-fluid"
                                    src="/assets/images/3.%20KBHB_PCTI_BeBoi_fr2_OP2.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="item">
                                <img
                                    className="img-fluid"
                                    src="/assets/images/4.%20Lasen%20Treatment%20Spa.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="item">
                                <img
                                    className="img-fluid"
                                    src="/assets/images/5.%20KBHB_PCTI_Condoltel_VuonLaHan.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="item">
                                <img
                                    className="img-fluid"
                                    src="/assets/images/6.%20KBHB_NhaHoiNghi_ViewTamMatHoiNghi_Op2.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="item">
                                <img
                                    className="img-fluid"
                                    src="/assets/images/imgslide11.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`row row_reverse ${isVisible && 'show_right'}`}>
                    <div className={`col-lg-6 textSlide ${isVisible && 'show_right'}`}>
                        <h5 className="title coloreffect">
                            APEC MANDALA – THIÊN ĐƯỜNG NGHỈ DƯỠNG & SỨC KHỎE
                        </h5>
                        <p>
                            Apec Mandala được núi rừng ban tặng nguồn khoáng nóng tự nhiên hình
                            thành trên các vỉa đá vôi 250 triệu năm tuổi, tích tụ Canxi, Natri,
                            Kali,…. Dòng nước giàu kiềm, giàu khoáng chất này được dẫn đến từng căn
                            hộ, khởi nguồn cho nền tảng sức khỏe viên mãn, hỗ trơ điều trị các bệnh
                            về dạ dày, cơ xương khớp… và phòng ngừa ung thư sớm Đặc biệt, trung tâm
                            hợp tác Y khoa quốc tế Apec Medical nằm tại trung tâm dự án, nơi quy tụ
                            các bác sỹ giỏi và đội ngũ y tế làm việc 24/7
                        </p>
                    </div>
                    <div className="col-lg-6 pd0">
                        <div className="slide2">
                            <div className="item">
                                <img
                                    className="img-fluid"
                                    src="/assets/images/1.%20Sky%20Villas%20View.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="item">
                                <img
                                    className="img-fluid"
                                    src="/assets/images/2.Mandala%20Signature%20Hotel.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="item">
                                <img
                                    className="img-fluid"
                                    src="/assets/images/3.%20Anamia%20Villas.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="item">
                                <img
                                    className="img-fluid"
                                    src="/assets/images/Villa%20-%20view%201.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="item">
                                <img
                                    className="img-fluid"
                                    src="/assets/images/Villa%20-%20view%202.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="item">
                                <img
                                    className="img-fluid"
                                    src="/assets/images/Villa%20-%20view%203.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="item">
                                <img
                                    className="img-fluid"
                                    src="/assets/images/Villa%20-%20view%204.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="item">
                                <img
                                    className="img-fluid"
                                    src="/assets/images/Sky%20Villa_N%c3%a1%c2%bb%c2%99i%20th%c3%a1%c2%ba%c2%a5t%20minh%20h%c3%a1%c2%bb%c2%8da%20(Bowmore).html"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

SectionSlideViews.propTypes = {};

SectionSlideViews.defaultProps = {};

export default SectionSlideViews;
