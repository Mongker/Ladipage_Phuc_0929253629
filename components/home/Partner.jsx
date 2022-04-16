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

function Partner() {
    const [refAnimation, isVisible] = useAnimation();
    return (
        <section className="fw" id="partner" ref={refAnimation}>
            {/*<img*/}
            {/*    className="img-fluid bgrleaves leavesRightBot"*/}
            {/*    src="/assets/images/larightBot.png"*/}
            {/*    alt=""*/}
            {/*/>*/}
            <div className="container">
                <h5 className={`title colortt1 ${isVisible && 'show_right'}`}>
                    Đối tác phát triển dự án
                </h5>
                <div className={`slidePartner`}>
                    <div className="item">
                        <a href="#">
                            <img className="img-fluid" src="/assets/images/apec.png" alt="" />
                            <h6>Đơn vị phát triển dự án</h6>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img className="img-fluid" src="/assets/images/cenhomes.png" alt="" />
                            <h6>Đơn vị phân phối chính thức</h6>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img className="img-fluid" src="/assets/images/kume.png" alt="" />
                            <h6>Đơn vị thiết kế nội thất</h6>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img className="img-fluid" src="/assets/images/fuhuc.png" alt="" />
                            <h6>Đơn vị thi công</h6>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img className="img-fluid" src="/assets/images/mandala.png" alt="" />
                            <h6>Đơn vị quản lý vận hành</h6>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

Partner.propTypes = {};

Partner.defaultProps = {};

export default Partner;
