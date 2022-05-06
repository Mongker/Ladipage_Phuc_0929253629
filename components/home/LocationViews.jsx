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

function LocationView({ data_location }) {
    const [refAnimation, isVisible] = useAnimation();
    return (
        <section className="fw" id="location" ref={refAnimation}>
            <img className={`img-fluid bgrHDLoc bgr`} src="/assets/images/bgr3.png" alt="" />
            <div className="container">
                <div className="row row_rev">
                    <div className={`col-lg-8 ${isVisible && 'show_left'}`}>
                        <img
                            title={'LOCATION_IMAGE'}
                            className="img-fluid"
                            src={
                                data_location?.['LOCATION_IMAGE']
                                    ? data_location['LOCATION_IMAGE']
                                    : '/assets/images/loc1.png'
                            }
                            alt=""
                        />
                    </div>
                    <div className={`col-lg-4 ${isVisible && 'show_right'}`}>
                        <h5 title={'LOCATION_TITLE'} className={`title colortt1`}>
                            {data_location?.['LOCATION_TITLE']
                                ? data_location?.['LOCATION_TITLE']
                                : 'CĂN HỘ KHOÁNG TRỊ LIỆU GẦN HÀ NỘI'}
                        </h5>
                        <p title={'LOCATION_CONTENT1'}>
                            {data_location?.['LOCATION_CONTENT1']
                                ? data_location['LOCATION_CONTENT1']
                                : 'Nằm cách Hà Nội chỉ 90 phút di chuyển, APEC Mandala Retreats Kim Bôi\n' +
                                  'đích thị là điểm đến “đủ xa để riêng tư, đủ gần để tận hưởng”.'}
                        </p>
                        <p title={'LOCATION_CONTENT2'}>
                            {data_location?.['LOCATION_CONTENT2']
                                ? data_location['LOCATION_CONTENT2']
                                : 'Đặc biệt, mạch khoáng Kim Bôi thuộc dòng khoáng Bicarbonate đã được\n' +
                                  '                            Trung tâm Thông tin Công nghệ sinh học Quốc gia Hoa Kỳ chứng minh tốt\n' +
                                  '                            cho việc điều trị các bệnh xương khớp, chống loãng xương, thoái hóa\n' +
                                  '                            xương. Ngoài ra, nguồn khoáng này còn được xếp vào loại khoáng Sulphate\n' +
                                  '                            - Magie - Canxi có tác dụng chống oxy hóa, cải thiện da. Vì vậy nó cũng\n' +
                                  '                            được mệnh danh là nước khoáng Spa (SMW - Spa Mineral Water). Ngoài ra,\n' +
                                  '                            “thần dược” thiên nhiên tại đây còn được đánh giá có lợi cho hệ tiêu\n' +
                                  '                            hóa, tim mạch và tốt cho phụ nữ có thai.'}
                        </p>
                        <div className="btnStyle regisCar">
                            <a href="#aboutUs">
                                <button className="button">
                                    Đăng ký xe khách tham quan <i className="fas fa-arrow-right" />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img className={`img-fluid bgr bgrTBLoc`} src="/assets/images/bgrbottom.png" alt="" />
        </section>
    );
}

LocationView.propTypes = {};

LocationView.defaultProps = {};

export default LocationView;
