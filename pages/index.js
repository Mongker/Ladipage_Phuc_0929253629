import React, { useCallback, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import BannerView from '../components/home/Banner';
import LocationView from '../components/home/LocationViews';
import OverView from '../components/home/OverView';
import AboutUs from '../components/home/AboutUsView';
import HeaderView from '../components/home/HeaderViews';
import SectionSlideViews from '../components/home/SectionSlideViews';
import ProductTap from '../components/home/Product Tap';
import FooterView from '../components/home/Footer';
import NewsViews from '../components/home/NewsViews';
import Partner from '../components/home/Partner';
import Advice from '../components/home/Advice';
// import RegistrationViews from '../components/home/RegistrationViews';

const ModalRegistration = dynamic(import('../components/modal/ModalRegistration'));

async function getDataGoogleSheet(id = '/') {
    const res = await fetch(`http://103.57.222.215:4040/api/google_sheet/client${id}`);
    return await res.json();
}

// export async function getStaticPaths() {
//     return {
//         paths: [],
//         fallback: false,
//     };
// }

// export async function getStaticProps(context) {
export async function getServerSideProps() {
    const data_header = await getDataGoogleSheet('/1642400825'); // Header
    const data_video = await getDataGoogleSheet('/1310981046'); // Video
    const data_overview = await getDataGoogleSheet('/1475976919'); // OverView
    const data_location = await getDataGoogleSheet('/1813597616'); // Location
    const data_section_slide = await getDataGoogleSheet('/1968707698'); // Section
    const data_product = await getDataGoogleSheet('/1318880518'); // Product
    const data_video_advice = await getDataGoogleSheet('/1226334748'); // Video Advice
    const data_footer = await getDataGoogleSheet('/356671284'); // Video Advice

    return {
        props: {
            data_header,
            data_video,
            data_overview,
            data_location,
            data_section_slide,
            data_product,
            data_video_advice,
            data_footer,
        },
    };
}

// export async function getServerSideProps(context) {
//     console.log('x: ', process.env.domainAPI); // MongLV log fix bug
//     const res = await fetch(`${process.env.domainAPI}/api/google_sheet/client`)
//     const data = await res.json()
//     return {
//         props: {},
//     }
// }

export default function Home({
    data_header,
    data_video,
    data_overview,
    data_location,
    data_section_slide,data_product, data_video_advice, data_footer
}) {
    const [isOpen, _setIsOpen] = useState(false);

    const refElementA = useRef(null);

    const setIsOpen = useCallback((value) => {
        _setIsOpen(value);
    }, []);

    return (
        <React.Fragment>
            <Head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Apec Mandala Retreats Kim Boi</title>
                <meta name="title" content="Apec Mandala Retreats Kim Boi" />
                <meta name="description" content="Apec Mandala Retreats Kim Boi." />

                <meta property="og:title" content="Apec Mandala Retreats Kim Boi" />
                <meta property="og:description" content="Apec Mandala Retreats Kim Boi." />
                <meta property="og:type" content="Website" />
                <meta property="og:url" content="https://mandalahotel.com.vn/" />
                <meta property="og:email" content="welcome@mandalahotel.com.vn" />
                <meta property="og:image" content="../mandalahotel.com.vn/assets/img/seo.html" />
            </Head>
            <div className="wrapper fw">
                <div className="hotline-phone-ring-wrap">
                    <div className="hotline-phone-ring">
                        <div className="hotline-phone-ring-circle" />
                        <div className="hotline-phone-ring-circle-fill" />
                        <div className="hotline-phone-ring-img-circle">
                            <a href="tel:0961323969" className="pps-btn-img">
                                <img
                                    src="/assets/images/phone.png"
                                    alt="Gọi điện thoại"
                                    width="50"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="hotline-bar">
                        <a href="tel:0961323969">
                            <span className="text-hotline">0961323969</span>
                        </a>
                    </div>
                </div>
                <div className="scrollTop">
                    <div className="flex">
                        <img className="img-fluid" src="/assets/images/scroll.png" alt="" />
                    </div>
                </div>
                <a id={'id_scroll'} ref={refElementA} />
                <HeaderView data_header={data_header} setIsOpen={setIsOpen} />
                <BannerView />
                <AboutUs data_video={data_video} />
                <OverView data_overview={data_overview} />
                <LocationView data_location={data_location} />
                <SectionSlideViews data_section_slide={data_section_slide} />
                <ProductTap data_product={data_product} />
                <NewsViews />
                <Partner />
                {/*<RegistrationViews />*/}
                <Advice data_video={data_video_advice} />
                <FooterView data_footer={data_footer} />
                <ModalRegistration isOpen={isOpen} setIsOpen={setIsOpen} />
                <div className={'ifc'} />
            </div>
        </React.Fragment>
    );
}
