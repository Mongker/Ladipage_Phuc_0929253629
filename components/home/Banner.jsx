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

function BannerView() {
    return (
        <section className="fw" id="banner">
            <div className="video-container banner">
                {/*<video width="100%" autoPlay loop muted playsInline*/}
                {/*       src="./assets/images/Voice_TVC 15s Kim Boi.mp4" />*/}
                <img className="img-fluid" src="/assets/images/banner.jpg" alt="" />
            </div>
            <style jsx>{`
                @media (min-width: 0px) and (max-width: 767px) {
                    .banner {
                        margin-top: 48px;
                    }
                }
            `}</style>
        </section>
    );
}

BannerView.propTypes = {};

BannerView.defaultProps = {};

export default BannerView;
