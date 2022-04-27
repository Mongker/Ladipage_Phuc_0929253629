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

function ProductTap({ data_product }) {
    const [refAnimation, isVisible] = useAnimation();
    return (
        <section className="fw" id="productTap" ref={refAnimation}>
            <img
                className="img-fluid bgrleaves leavesTop"
                src="/assets/images/lalefttop.png"
                alt=""
            />
            <img
                className="img-fluid bgrleaves leavesRight"
                src="/assets/images/laright.png"
                alt=""
            />
            <img
                className="img-fluid bgrleaves leavesBot"
                src="/assets/images/laleftbot.png"
                alt=""
            />
            <div className="container">
                <div className={`titleCenter ${isVisible && 'show_left'}`}>
                    <h5 className="title colortt1">
                        {data_product?.['PRODUCT_TITLE']
                            ? data_product['PRODUCT_TITLE']
                            : 'Mua một sở hữu chuỗi - Tặng 90 đêm nghỉ dưỡng 5* áp dụng trên toàn\n' +
                              'quốc'}
                    </h5>
                    <p>
                        {data_product?.['PRODUCT_CONTENT']
                            ? data_product['PRODUCT_CONTENT']
                            : 'Với đặc quyền: “MUA 1 – SỞ HỮU CHUỖI”, cư dân và những nhà đầu tư mua căn hộ\n' +
                              'tại Kim Bôi – Hòa Bình còn được chuyển điểm, đổi ngày nghỉ vô cùng linh hoạt\n' +
                              'trên tất cả các điểm đến của tập đoàn Apec khắp Việt Nam. APEC GROUP đang là\n' +
                              'chủ sở hữu hàng loạt dự án lớn như khu đô thị đáng sống nhất 2020 - Apec\n' +
                              'Royal Park Huế với tổng mức đầu tư 10.000 tỷ đồng, Apec Mandala Wyndham Mũi\n' +
                              'Né - top 10 khách sạn lớn nhất châu Á với gần 3000 phòng… cùng hàng loạt các\n' +
                              'khách sạn 5 sao tại: Phú Yên, Lạng Sơn, Bắc Giang, Hội An, Quy Nhơn, Yên\n' +
                              ' Bái...'}
                    </p>
                </div>
                <div className={`contentTap ${isVisible && 'show_right'}`}>
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                href="#tap1"
                                role="tab"
                                data-toggle="tab"
                            >
                                CĂN HỘ LA YÊN
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tap2" role="tab" data-toggle="tab">
                                CĂN HỘ LA VÂN
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tap3" role="tab" data-toggle="tab">
                                CĂN HỘ LA MINH
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane in active" id="tap1">
                            <div className="row">
                                <div className="col-lg-6 diagramImg">
                                    <img
                                        className="img-fluid"
                                        src="/assets/images/room%20Bowmore.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="col-lg-6 diagramItem">
                                    <div className="flex">
                                        <h6 className="floors">Tầng</h6>
                                        <h6 className="numberFloors">2 - 3 - 4 - 5 - 6</h6>
                                    </div>
                                    <div className="flex">
                                        <h6 className="floors">Diện tích</h6>
                                        <h6 className="numberFloors">32.9 m2</h6>
                                    </div>
                                    <div className="flex ItemPro">
                                        <div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">1</p>
                                                </div>
                                                <div>
                                                    <p>Sảnh căn hộ</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">2</p>
                                                </div>
                                                <div>
                                                    <p>Phòng ngủ</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">3</p>
                                                </div>
                                                <div>
                                                    <p>Kệ tivi</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">4</p>
                                                </div>
                                                <div>
                                                    <p>Bàn làm việc</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">5</p>
                                                </div>
                                                <div>
                                                    <p>Ghế thư giãn</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">6</p>
                                                </div>
                                                <div>
                                                    <p>Ban công</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">7</p>
                                                </div>
                                                <div>
                                                    <p>Vệ sinh</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">8</p>
                                                </div>
                                                <div>
                                                    <p>Bồn ngâm khoáng nóng</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">9</p>
                                                </div>
                                                <div>
                                                    <p>Tủ quần áo</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">10</p>
                                                </div>
                                                <div>
                                                    <p>Minibar</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">11</p>
                                                </div>
                                                <div>
                                                    <p>Kệ hành lý</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="img-fluid"
                                src="/assets/images/CH04A%20-%20Bowmore.jpg"
                                alt=""
                            />
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="tap2">
                            <div className="row">
                                <div className="col-lg-6 diagramImg">
                                    <img
                                        className="img-fluid"
                                        src="/assets/images/roomMacallan.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="col-lg-6 diagramItem">
                                    <div className="flex">
                                        <h6 className="floors">Tầng</h6>
                                        <h6 className="numberFloors">7 - 8 - 9</h6>
                                    </div>
                                    <div className="flex">
                                        <h6 className="floors">diện tích</h6>
                                        <h6 className="numberFloors">46.2 m2</h6>
                                    </div>
                                    <div className="flex ItemPro">
                                        <div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">1</p>
                                                </div>
                                                <div>
                                                    <p>Sảnh căn hộ</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">2</p>
                                                </div>
                                                <div>
                                                    <p>Lavabo</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">3</p>
                                                </div>
                                                <div>
                                                    <p>Phòng vệ sinh</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">4</p>
                                                </div>
                                                <div>
                                                    <p>Phòng tắm</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">5</p>
                                                </div>
                                                <div>
                                                    <p>Minibar</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">6</p>
                                                </div>
                                                <div>
                                                    <p>Treo đồ</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">7</p>
                                                </div>
                                                <div>
                                                    <p>Kệ tivi</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">8</p>
                                                </div>
                                                <div>
                                                    <p>Bàn làm việc</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">9</p>
                                                </div>
                                                <div>
                                                    <p>Tủ quần áo</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">10</p>
                                                </div>
                                                <div>
                                                    <p>Phòng ngủ</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">11</p>
                                                </div>
                                                <div>
                                                    <p>Sofa</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">12</p>
                                                </div>
                                                <div>
                                                    <p>Ghế thư giãn ngoài trời</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">13</p>
                                                </div>
                                                <div>
                                                    <p>Bể sục khoáng</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">14</p>
                                                </div>
                                                <div>
                                                    <p>Kệ hành lý</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">15</p>
                                                </div>
                                                <div>
                                                    <p>Bồn ngâm khoáng nóng</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="img-fluid"
                                src="/assets/images/CH17%20-%20Macallan.jpg"
                                alt=""
                            />
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="tap3">
                            <div className="row">
                                <div className="col-lg-6 diagramImg">
                                    <img
                                        className="img-fluid"
                                        src="/assets/images/roomHighland%20park.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="col-lg-6 diagramItem">
                                    <div className="flex">
                                        <h6 className="floors">Tầng</h6>
                                        <h6 className="numberFloors">10 - 11</h6>
                                    </div>
                                    <div className="flex">
                                        <h6 className="floors">diện tích</h6>
                                        <div>
                                            <h6 className="numberFloors">Tầng 1: 46.2 m2</h6>
                                            <h6 className="numberFloors">Tầng 2: 25.8 m2</h6>
                                        </div>
                                    </div>
                                    <div className="flex ItemPro">
                                        <div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">1</p>
                                                </div>
                                                <div>
                                                    <p>Sảnh căn hộ</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">2</p>
                                                </div>
                                                <div>
                                                    <p>Lavabo</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">3</p>
                                                </div>
                                                <div>
                                                    <p>Phòng vệ sinh</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">4</p>
                                                </div>
                                                <div>
                                                    <p>Phòng tắm</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">5</p>
                                                </div>
                                                <div>
                                                    <p>Minibar</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">6</p>
                                                </div>
                                                <div>
                                                    <p>Treo đồ</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">7</p>
                                                </div>
                                                <div>
                                                    <p>Kệ tivi</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">8</p>
                                                </div>
                                                <div>
                                                    <p>Bàn làm việc</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">9</p>
                                                </div>
                                                <div>
                                                    <p>Sofa bed</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">10</p>
                                                </div>
                                                <div>
                                                    <p>Ghế thư giãn</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">11</p>
                                                </div>
                                                <div>
                                                    <p>Bể sục khoáng</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">12</p>
                                                </div>
                                                <div>
                                                    <p>Cầu thang</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">13</p>
                                                </div>
                                                <div>
                                                    <p>Tủ quần áo</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">14</p>
                                                </div>
                                                <div>
                                                    <p>Phòng ngủ</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">15</p>
                                                </div>
                                                <div>
                                                    <p>Bồn ngâm khoáng nóng</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">16</p>
                                                </div>
                                                <div>
                                                    <p>Tắm tráng</p>
                                                </div>
                                            </div>
                                            <div className="flex itemForm">
                                                <div>
                                                    <p className="number">17</p>
                                                </div>
                                                <div>
                                                    <p>Kệ hành lý</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="img-fluid"
                                src="/assets/images/CH31%20-%20Highland%20park.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

ProductTap.propTypes = {};

ProductTap.defaultProps = {};

export default ProductTap;
