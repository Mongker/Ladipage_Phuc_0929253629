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

function OverView({ data_overview }) {
    const [refAnimation, isVisible] = useAnimation(500);
    return (
        <section className="fw" id="overView" ref={refAnimation}>
            <img className="img-fluid bgr bgrOverView" src="/assets/images/bgr2.png" alt="" />
            <div className="overViewContent containerFix">
                <h5 className={`title coloreffect ${isVisible && 'show_left'}`}>
                    {data_overview?.['TITLE'] && data_overview['TITLE']}
                </h5>
                <div className={`row`}>
                    <div className={`col-lg-3 formCol ${isVisible && 'show_right'}`}>
                        <div className={`row ${isVisible & 'show_right'}`}>
                            <div className="data col-lg-12 col-6">
                                <p>Tổng diện tích</p>
                                <h6 className="coloreffect">
                                    {data_overview?.['S'] && data_overview['S']} m2
                                </h6>
                            </div>
                            <div className="data col-lg-12 col-6">
                                <p>Phân khu</p>
                                <h6 className="coloreffect">
                                    {data_overview?.['PHAN_KHU'] && data_overview['PHAN_KHU']}
                                </h6>
                            </div>
                            <div className="data col-lg-12 col-6">
                                <p>Mandala Signature Hotel</p>
                                <h6 className="coloreffect">
                                    {' '}
                                    {data_overview?.['HOTEL'] && data_overview['HOTEL']} căn
                                </h6>
                            </div>
                            <div className="data col-lg-12 col-6">
                                <p>Anamia Villas</p>
                                <h6 className="coloreffect">
                                    {data_overview?.['ANAMIA_VILLAS'] &&
                                        data_overview['ANAMIA_VILLAS']}{' '}
                                    căn
                                </h6>
                            </div>
                            <div className="data col-lg-12 col-6">
                                <p>La Sen Sky Villas</p>
                                <h6 className="coloreffect">
                                    {data_overview?.['LA_SEN_SKY_VILLAS'] &&
                                        data_overview['LA_SEN_SKY_VILLAS']}{' '}
                                    căn
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-9 formCol MapOverView ${isVisible && 'show_right'}`}>
                        <img
                            className="img-fluid bgrMapOverView"
                            src="/assets/images/imgTongquan_white.png"
                            alt=""
                        />
                        <div className="row">
                            <div className="col-lg-4 col-md-4 traffic">
                                <h6>Giao thông</h6>
                                <div className="row">
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">01</p>
                                            </div>
                                            <div>
                                                <p>Cổng vào</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">13</p>
                                            </div>
                                            <div>
                                                <p>Sảnh Sala Ball room</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">02</p>
                                            </div>
                                            <div>
                                                <p>Bãi đỗ xe</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">20</p>
                                            </div>
                                            <div>
                                                <p>Sảnh La Sen Spa</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">03</p>
                                            </div>
                                            <div>
                                                <p>Welcome Zone</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">24</p>
                                            </div>
                                            <div>
                                                <p>Sảnh La Sen Sky Villas</p>
                                            </div>
                                        </div>
                                        <p></p>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">07</p>
                                            </div>
                                            <div>
                                                <p>Sảnh Mandala Sirgnature Hotel</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 construction">
                                <h6>Công trình</h6>
                                <div className="row">
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">06</p>
                                            </div>
                                            <div>
                                                <p>Mandala Pool Bar</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">21</p>
                                            </div>
                                            <div>
                                                <p>La Sen Public Onsen</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">08</p>
                                            </div>
                                            <div>
                                                <p>Mandala Signature Hotel</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">22</p>
                                            </div>
                                            <div>
                                                <p>La Sen Treatment Spa</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">11</p>
                                            </div>
                                            <div>
                                                <p>Reception Zone</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">23</p>
                                            </div>
                                            <div>
                                                <p>La Sen Massage</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">14</p>
                                            </div>
                                            <div>
                                                <p>Sala Ball Room</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">25</p>
                                            </div>
                                            <div>
                                                <p>La Sen Sky Villas</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">15</p>
                                            </div>
                                            <div>
                                                <p>Anamia Villas</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">26</p>
                                            </div>
                                            <div>
                                                <p>La Sen Sky Fall</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol"></div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">27</p>
                                            </div>
                                            <div>
                                                <p>Sky Onsen Garden</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 Utilities">
                                <h6>Tiện Ích</h6>
                                <div className="row">
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">04</p>
                                            </div>
                                            <div>
                                                <p>Bể cảnh quan</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">16</p>
                                            </div>
                                            <div>
                                                <p>Thác cảnh quan</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">05</p>
                                            </div>
                                            <div>
                                                <p>Chòi nghỉ</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">17</p>
                                            </div>
                                            <div>
                                                <p>Vườn Anamia</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">09</p>
                                            </div>
                                            <div>
                                                <p>Mineral Public Pool</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">18</p>
                                            </div>
                                            <div>
                                                <p>Vườn thiền La Hán</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">10</p>
                                            </div>
                                            <div>
                                                <p>Public Jacuzzi</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">19</p>
                                            </div>
                                            <div>
                                                <p>Vườn Bách Thụ</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">12</p>
                                            </div>
                                            <div>
                                                <p>Tre House - Kid Zone</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 formCol">
                                        <div className="flex itemForm">
                                            <div>
                                                <p className="number">28</p>
                                            </div>
                                            <div>
                                                <p>Nhà xe đạp Eco Path</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

OverView.propTypes = {};

OverView.defaultProps = {};

export default OverView;
