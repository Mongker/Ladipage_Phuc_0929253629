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

function HeaderView({ setIsOpen }) {
    return (
        <header id="header">
            <div className="headerTop">
                <div className="container">
                    <div className="flex_between">
                        <h1 className="logo">
                            <a href="#banner">
                                <img
                                    className="img-fluid imgLogo"
                                    src="/assets/images/logo.png"
                                    alt=""
                                />
                                <img
                                    className="img-fluid imgLogoScroll"
                                    src="/assets/images/logo.png"
                                    alt=""
                                />
                            </a>
                        </h1>
                        <a
                            onClick={() => setIsOpen(true)}
                            className="test"
                            style={{ color: 'red', cursor: 'pointer' }}
                        >
                            Đăng ký ngay
                        </a>
                        <div className="toggleMenu">
                            <span className="mobile_btn"></span>
                        </div>
                        <div className="menuScroll">
                            <nav>
                                <a href="#banner">Trang chủ</a>
                                <a href="#overView">Mặt bằng</a>
                                <a href="#location">Vị trí</a>
                                <a href="#sectionSlide">Tiện ích</a>
                                <a href="#productTap">Loại căn</a>
                                <a href="#news">Tin tức</a>
                                <a href="#registration">Liên hệ</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu">
                <nav>
                    <a href="#banner">Trang chủ</a>
                    <a href="#overView">Mặt bằng</a>
                    <a href="#location">Vị trí</a>
                    <a href="#sectionSlide">Tiện ích</a>
                    <a href="#productTap">Loại căn</a>
                    <a href="#news">Tin tức</a>
                    <a href="#registration">Liên hệ</a>
                </nav>
            </div>
        </header>
    );
}

HeaderView.propTypes = {};

HeaderView.defaultProps = {};

export default HeaderView;
