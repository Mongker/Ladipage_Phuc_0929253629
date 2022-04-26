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

const itemIdsSlide1 = [
    '/assets/images/1.Sky_Roman_Fall.jpg',
    '/assets/images/2.%202_KBHB_Condotel_Sanvuon_210406.jpg',
    '/assets/images/3.%20KBHB_PCTI_BeBoi_fr2_OP2.jpg',
    '/assets/images/4.%20Lasen%20Treatment%20Spa.jpg',
    '/assets/images/5.%20KBHB_PCTI_Condoltel_VuonLaHan.jpg',
    '/assets/images/6.%20KBHB_NhaHoiNghi_ViewTamMatHoiNghi_Op2.jpg',
    '/assets/images/imgslide11.jpg'
];
const itemIdsSlide2 = [
    '/assets/images/1.%20Sky%20Villas%20View.jpg',
    '/assets/images/2.Mandala%20Signature%20Hotel.jpg',
    '/assets/images/3.%20Anamia%20Villas.jpg',
    '/assets/images/Villa%20-%20view%201.jpg',
    '/assets/images/Villa%20-%20view%202.jpg',
    '/assets/images/Villa%20-%20view%203.jpg',
    '/assets/images/Villa%20-%20view%204.jpg',
];

function SectionSlideViews({ data_section_slide }) {
    const [refAnimation, isVisible] = useAnimation();
    return (
        <section className="fw" id="sectionSlide" ref={refAnimation}>
            <img className="img-fluid bgrSlide bgr" src="/assets/images/bgrslide.jpg" alt="" />
            <div className={`slideContent`}>
                <div className={`row ${isVisible && 'show_left'}`}>
                    <div className={`col-lg-6 textSlide`}>
                        <h5 className="title coloreffect" title={'SECTION_SLIDE_TITLE'}>
                            {data_section_slide?.['SECTION_SLIDE_TITLE']
                                ? data_section_slide['SECTION_SLIDE_TITLE']
                                : 'Ân hạn nợ gốc vô thời hạn - Chỉ 50% GTCH để nhận bàn giao'}
                        </h5>
                        <p title={'SECTION_SLIDE_CONTENT1'}>
                            {data_section_slide?.['SECTION_SLIDE_CONTENT1']
                                ? data_section_slide?.['SECTION_SLIDE_CONTENT1']
                                : 'Khách hàng chỉ cần đóng 15% giá trị căn hộ (tương đương 180 triệu) để ký\n' +
                                  '                            kết hợp đồng mua bán, và đóng lũy tiến 50% giá trị căn hộ để nhận bàn\n' +
                                  '                            giao nhà. Phần còn lại sẽ được ân hạn vô thời hạn và trả lãi khoảng 4,2\n' +
                                  '                            triệu/tháng, tương đương lãi suất từ 9%/năm.'}
                        </p>
                        <p title={'SECTION_SLIDE_CONTENT2'}>
                            {
                                data_section_slide?.['SECTION_SLIDE_CONTENT2']
                                ? data_section_slide['SECTION_SLIDE_CONTENT2']
                                : '' +
                                  'Khách hàng có thể đóng tiền gốc bất cứ khi nào, không lo phạt thanh toán\n' +
                                  'trước hạn, không lo duyệt hồ sơ vay vốn, không cần tài sản đảm bảo.\n' +
                                  'Trong khi đó, sau khi nhận bàn giao, khách hàng nhận căn hộ có thể khai\n' +
                                  'thác vận hành luôn, tạo ra dòng tiền bền vững, gần như “ngay lập tức”'
                            }
                        </p>
                    </div>
                    <div className="col-lg-6 pd0">
                        <div className="slide1">{
                            itemIdsSlide1.map((item) => {
                                return (
                                    <div key={item} className="item">
                                        <img
                                            className="img-fluid"
                                            src={item}
                                            alt=""
                                        />
                                    </div>
                                )
                            })
                        }</div>
                    </div>
                </div>
                <div className={`row row_reverse ${isVisible && 'show_right'}`}>
                    <div className={`col-lg-6 textSlide ${isVisible && 'show_right'}`}>
                        <h5 className="title coloreffect" title={'SECTION_SLIDE_TITLE2'}>
                            {data_section_slide?.['SECTION_SLIDE_TITLE2']
                                ? data_section_slide['SECTION_SLIDE_TITLE2']
                                : ' APEC MANDALA – THIÊN ĐƯỜNG NGHỈ DƯỠNG & SỨC KHỎE'}
                        </h5>
                        <p title={'SECTION_SLIDE_CONTENT4'}>
                            {data_section_slide?.['SECTION_SLIDE_CONTENT4']
                                ? data_section_slide['SECTION_SLIDE_CONTENT4']
                                : 'Apec Mandala được núi rừng ban tặng nguồn khoáng nóng tự nhiên hình\n' +
                                  'thành trên các vỉa đá vôi 250 triệu năm tuổi, tích tụ Canxi, Natri,\n' +
                                  'Kali,…. Dòng nước giàu kiềm, giàu khoáng chất này được dẫn đến từng căn\n' +
                                  'hộ, khởi nguồn cho nền tảng sức khỏe viên mãn, hỗ trơ điều trị các bệnh\n' +
                                  'về dạ dày, cơ xương khớp… và phòng ngừa ung thư sớm Đặc biệt, trung tâm\n' +
                                  'hợp tác Y khoa quốc tế Apec Medical nằm tại trung tâm dự án, nơi quy tụ\n' +
                                  'các bác sỹ giỏi và đội ngũ y tế làm việc 24/7'}
                        </p>
                    </div>
                    <div className="col-lg-6 pd0">
                        <div className="slide2">
                            {
                                itemIdsSlide2.map((item) => {
                                    return (
                                        <div className="item" key={item}>
                                            <img
                                                className="img-fluid"
                                                src={item}
                                                alt=""
                                            />
                                        </div>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionSlideViews;
