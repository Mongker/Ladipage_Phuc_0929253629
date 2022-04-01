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

function FooterView() {
    return (
        <footer className="fw" id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xs-15 col-md-15 col-lg-15">
                        <h1 className="logo">
                            <a href="#banner">
                                <img className="img-fluid" src="/assets/images/logo.png" alt="" />
                            </a>
                        </h1>
                    </div>
                    <div className="col-xs-15 col-sm-15 col-md-15 col-lg-15 formCol">
                        <h6 className="titleFooter">ĐỊA CHỈ DỰ ÁN</h6>
                        <p>
                            <i className="fas fa-map-marker-alt"></i>Xóm Mớ Đá, xã Hạ Bì, huyện Kim
                            Bôi, tỉnh Hòa Bình
                        </p>
                    </div>
                    <div className="col-xs-15 col-sm-15 col-md-15 col-lg-15 formCol">
                        <h6 className="titleFooter">hotline</h6>
                        <p>
                            <i className="fas fa-phone-alt"></i>
                            <a href="tel:0961323969">0961323969</a>
                        </p>
                    </div>
                    <div className="col-xs-15 col-sm-15 col-md-15 col-lg-15 formCol">
                        <h6 className="titleFooter">email</h6>
                        <p>
                            <i className="far fa-envelope"></i>apecmandalakimboi@idjf.vn
                        </p>
                    </div>
                    <div className="col-xs-15 col-sm-15 col-md-15 col-lg-15 formCol">
                        <h6 className="titleFooter">fanpage</h6>
                        <p>Apec Mandala Sky Villas Kim Boi</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

FooterView.propTypes = {};

FooterView.defaultProps = {};

export default FooterView;
