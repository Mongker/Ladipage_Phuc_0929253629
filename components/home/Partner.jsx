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

function Partner({data_partner}) {
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
                    {
                        data_partner.map(item => (
                            <div className="item" key={item._id}>
                                <a href={item.link_blank}>
                                    <img className="img-fluid" src={item.image_link} alt={item} />
                                    <h6>{item.title}</h6>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

Partner.propTypes = {};

Partner.defaultProps = {};

export default Partner;
