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
AboutUs.propTypes = {};
AboutUs.defaultProps = {};
function AboutUs() {
    return(
        <section className="fw" id="aboutUs">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 formCol">
                        <img className="img-fluid" src="/assets/images/imgAbout.png" alt=""/>
                    </div>
                    <div className="col-lg-4 formCol aboutContent">
                        <h5 className="title colortt1">Sở hữu căn hộ <br /> KHOÁNG TRỊ LIỆU ĐÍCH THỰC TẠI
                            GIA <br /> tiên phong tại Việt Nam
                        </h5>
                        <p>Tổ hợp nghỉ dưỡng trị liệu sức khỏe bằng khoáng nóng tự nhiên Apec Mandala Retreats Kim
                            Bôi là dự án nằm
                            trong chiến
                            lược thực hiện sứ mệnh chăm sóc sức khỏe người Việt một cách toàn diện của Tập đoàn
                            Apec.</p>
                        <p>
                            Nằm trên thủ phủ khoáng nóng quý giá nhất Miền Bắc tại Hòa Bình, mặt trước là cánh
                            đồng bát ngát, phía sau
                            được bao phủ
                            bởi những dãy núi đá hùng vỹ, APEC Mandala Retreats Kim Bôi như một thung lũng thơ
                            mộng hữu tình giữa
                            thiên nhiên hoang
                            sơ. Bước chân vào không gian của Mandala, chủ nhân hoàn toàn đắm mình trong những dải
                            xanh thiên nhiên
                            tuyệt mỹ. Đặc
                            biệt, toàn bộ các căn hộ của dự án đều sở hữu bể bơi khoáng nóng dẫn từ nguồn khoáng
                            tự nhiên tới từng
                            phòng, mang lại
                            cảm giác riêng tư - "riêng một khoảng trời, riêng một đẳng cấp."
                        </p>
                    </div>
                </div>
            </div>
            <img className="bgrAboutus img-fluid bgr" src="/assets/images/bgr1.png" alt=""/>
        </section>
    );
}

export default AboutUs;
