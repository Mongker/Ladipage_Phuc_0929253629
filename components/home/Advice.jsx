/**
 * Copyright 2016-present, Bkav, Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author monglv@bkav.com on 16/04/2022
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import useAnimation from '../hooks/useAnimation';
// import PropTypes from 'prop-types';

function Advice({data_video}) {
    const [refAnimation, isVisible] = useAnimation(500);
    const [refAnimation1, isVisible2] = useAnimation(500);
    const idYoutube = data_video?.['VIDEO_YOUTUBE'] && typeof data_video['VIDEO_YOUTUBE'] === 'string' && data_video['VIDEO_YOUTUBE'].split('/')[data_video['VIDEO_YOUTUBE'].split('/').length - 1]

    const array = [
        {
            title: 'Bước 1: Tắm tráng',
            content: 'Tắm tráng, dội qua nước nóng và ngâm chân để quen với nước ở nhiệt độ cao.',
        },
        {
            title: 'Bước 2: Tắm khoáng nóng',
            content:
                'Ngâm mình thư thái giản trong các bể nước khoáng 5 - 15 phút mỗi lần, tùy sức khỏe mỗi người.',
        },
        {
            title: 'Bước 3: Xông hơi nóng',
            content:
                'Xông hơi ở 80 - 85 độ C khoảng 15 phút để da sạch, thông thoáng, giúp các tinh chất khoáng thẩm thấu vào cơ thể đạt mức cao nhất.',
        },
        {
            title: 'Bước 4: Xông hơi lạnh',
            content:
                'Xông hơi lạnh hoặc ngâm mình trong bể lạnh giúp sẽ khít lỗ chân lông, làn da trở nên mềm ẩm, chống lãi hóa.',
        },
        {
            title: 'Bước 5: Nghỉ ngơi',
            content:
                'Thấm khô cơ thể, mặc quần áo, sấy đầu, chăm sóc da, nghỉ ngơi ăn uống bổ sung dinh dưỡng cân đối và khoa học',
        },
    ];
    return (
        <>
            <section className={'container_advice'} id={'#suggestion'} ref={refAnimation}>
                <div className={`title colortt1 ${isVisible && 'show_left'}`}>
                    <h1 className={'custom_title'}>Lời khuyên của chuyên gia</h1>
                </div>
                {
                    data_video?.['IMAGE'] &&  <img className={`img_advice`} src={data_video?.['IMAGE'] ? data_video?.['IMAGE'] : `./assets/images/bacsi.webp`} alt="" />
                }
                {
                    data_video?.['VIDEO_SYSTEM'] &&
                    <video
                        className={'video_advice'}
                        width="100%"
                        height="300px"
                        autoPlay
                        controls
                        muted
                        loop
                    >
                        <source src={data_video['VIDEO_SYSTEM']} type="video/mp4" />
                    </video>
                }
                {
                    data_video?.['VIDEO_YOUTUBE'] &&
                    <iframe
                        width="100%"
                        height="300px"
                        src={`https://www.youtube.com/embed/${idYoutube}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={'video_advice'}
                    />
                }
                {/*<img className={'img_advice'} src={'./assets/images/bacsi.webp'} />*/}
                <div className={`container_content ${isVisible && 'show_right'}`}>
                    <p>
                        <b>
                            Theo thầy thuốc ưu tú, Ths., BS. Nguyễn Thị Hằng - nguyên Phó viện
                            trưởng Viện Nghiên cứu Y dược Cổ truyền Tuệ Tĩnh, Học viện Y dược học Cổ
                            truyền Việt Nam
                        </b>
                    </p>
                    <p className={'content_advice'}>
                        Các thành phần có lợi từ khoáng: Trong khoáng nóng có nhiều ion khoáng chất
                        dưới dạng muối. Ví dụ, natri clorua khi tắm sẽ đọng trên da giúp hạn chế ra
                        mồ hôi, làm ẩm da, làm ấm cơ thể từ bên trong, kích thích tuần hoàn máu,
                        giảm căng cơ, có giá trị điều trị một số bệnh về khớp, tiêu hóa. Nồng độ pH
                        7,14 (tính kiềm nhẹ) thể hiện khả năng sát trùng vết thương tốt. Axit
                        metasilic (H2SiO3) và boric (HBO2) có tác dụng điều trị viêm loét đường tiêu
                        hóa, sỏi tiết niệu và nhiều bệnh lý về da, đặc biệt ngăn ngừa, hỗ trợ điều
                        trị bệnh lý ngoài da như chàm, vảy nến, các sẩn ngứa mạn tính… Magnesium,
                        lithium, carbon dioxide, sulfur, calcium… trong nước khoáng nóng giúp tăng
                        khả năng miễn dịch, chống một số bệnh lý mạn tính về xương khớp, tim mạch,
                        hô hấp, làm chậm quá trình lão hóa, giúp tinh thần sảng khoái.
                    </p>
                </div>
                <div className={`container_content ${isVisible && 'show_left'}`}>
                    <i>Các bước tắm khoáng khoa học:</i>
                </div>

                <div ref={refAnimation1}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginTop: 15,
                        }}
                    >
                        <div className={`root1 border-radius_20px ${isVisible2 && 'show_right'}`}>
                            <div className={'root1_text'}>Quy trình tắm OSEN</div>
                        </div>
                    </div>
                    <div className={'root2'}>
                        {array.map((item) => (
                            <div
                                key={item.title}
                                className={`root2_item1 ${isVisible2 && 'show_left'}`}
                            >
                                <div className={'root2_title padding_12px_20px border-radius_20px'}>
                                    {item.title}
                                </div>
                                <div className={'margin_12px_20px'}>{item.content}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`container_content ${isVisible2 && 'show_right'}`}>
                    <p>
                        APEC Mandala Retreats Kim Bôi tọa lạc trên mảnh đất có vị trí hòa mình cùng
                        thiên nhiên tuyệt đẹp, nằm giữa thung lũng được bao quanh bởi những ngọn đồi
                        sương giúp mang lại nhiều trải nhiệm tự nhiên thú vị. Đặc biệt, vị trí của
                        dự án sở hữu lợi thế kết nối thuận lợi giữa các khu giải trí, du lịch sinh
                        thái nổi bật của địa phương như Chỉ cách trung tâm Hà Nội 90 phút di chuyển
                        theo tuyến 2 tuyến đường duy nhất là bạn có thể đặt chân đến thiên đường
                        suối khoáng.
                    </p>
                </div>
            </section>
            <style jsx global>{`
                .text_title {
                    color: #1c7430;
                }
                .container {
                    margin: 0 auto;
                }
                @media only screen and (max-width: 767px) {
                    .title {
                        font-size: 25px;
                        margin-bottom: 20px;
                        line-height: 38px;
                    }
                }
            `}</style>
            <style jsx>{`
                .container_advice {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    margin: 40px 0;
                    width: 100%;
                }
                .img_advice {
                    border-radius: 20px;
                    object-fit: cover;
                    width: 50%;
                    height: 50%;
                    text-align: center;
                    margin-bottom: 15px;
                }
                .video_advice {
                  border-radius: 20px;
                    object-fit: cover;
                    width: 50%;
                    text-align: center;
                    margin-bottom: 15px;
                }
                .container_content {
                    width: 80%;
                    margin-top: 15px;
                }
                .content_advice {
                    margin: 0 auto;
                }
                .root1 {
                    border: 1px solid #1c7430 !important;
                    color: #0b2e13;
                }
                .border-radius_20px {
                    border-radius: 0.75em;
                }
                .root2 {
                    flex-wrap: wrap;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }
                .margin_12px_20px {
                    margin: 12px 20px;
                }
                .padding_12px_20px {
                    padding: 12px 20px;
                }
                .root1_text {
                    font-size: 30px;
                    margin: 12px 20px;
                    font-weight: 800;
                }
                .root2_item1 {
                    border: 1px solid #1c7430 !important;
                    border-radius: 20px;
                    color: #0b2e13;
                    margin: 12px 20px;
                    width: 175px;
                    text-align: center;
                }
                .root2_title {
                    background-color: #1e7e34;
                    color: wheat;
                    border: 1px solid #1c7430 !important;
                }
                .custom_title::before {
                    position: absolute;
                    content: '';
                    width: 7%;
                    height: 2px;
                    background-color: #1bb580;
                    margin: 0 auto;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                }
                @media (min-width: 0px) and (max-width: 767px) {
                    .custom_title {
                        text-align: center;
                        font-size: 25px !important;
                    }
                    .video_advice {
                      height: 100%;
                      width: 90%;
                    }
                    .root2_item1 {
                        width: 145px;
                    }
                }
            `}</style>
        </>
    );
}

export default Advice;
