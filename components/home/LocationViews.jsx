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

function LocationView() {
    return(
        <section className="fw" id="location">
            <img className="img-fluid bgrHDLoc bgr" src="/assets/images/bgr3.png" alt=""/>
            <div className="container">
                <div className="row row_rev">
                    <div className="col-lg-8">
                        <img className="img-fluid" src="/assets/images/loc1.png" alt=""/>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="title colortt1">
                            CĂN HỘ KHOÁNG TRỊ LIỆU GẦN HÀ NỘI
                        </h5>
                        <p>
                            Nằm cách Hà Nội chỉ 90 phút di chuyển, APEC Mandala Retreats Kim Bôi đích thị là điểm
                            đến “đủ xa để riêng tư, đủ gần để
                            tận hưởng”.
                        </p>
                        <p>Đặc biệt, mạch khoáng Kim Bôi thuộc dòng khoáng Bicarbonate đã được Trung tâm Thông tin
                            Công nghệ sinh học Quốc gia Hoa
                            Kỳ chứng minh tốt cho việc điều trị các bệnh xương khớp, chống loãng xương, thoái hóa
                            xương. Ngoài ra, nguồn khoáng này
                            còn được xếp vào loại khoáng Sulphate - Magie - Canxi có tác dụng chống oxy hóa, cải
                            thiện da. Vì vậy nó cũng được mệnh
                            danh là nước khoáng Spa (SMW - Spa Mineral Water). Ngoài ra, “thần dược” thiên nhiên
                            tại đây còn được đánh giá có lợi
                            cho hệ tiêu hóa, tim mạch và tốt cho phụ nữ có thai.</p>
                        <div className="btnStyle regisCar">
                            <a href="#registration">
                                <button className="button">Đăng ký xe khách tham quan <i
                                    className="fas fa-arrow-right"></i></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img className="img-fluid bgr bgrTBLoc" src="/assets/images/bgrbottom.png" alt=""/>
        </section>
    );
}

LocationView.propTypes = {};

LocationView.defaultProps = {};

export default LocationView;
