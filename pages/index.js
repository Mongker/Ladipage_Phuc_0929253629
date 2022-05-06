import React, { useCallback, useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { NotificationContainer } from 'react-notifications';
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

const ModalRegistration = dynamic(import('../components/modal/ModalRegistration'), { ssr: false });

async function getDataGoogleSheet(id = '/') {
    const res = await fetch(`http://mandalakimboi.vn:4040//api/google_sheet/client${id}`);
    return await res.json();
}

// export async function getStaticPaths() {
//     return {
//         paths: [],
//         fallback: false,
//     };
// }

export async function getStaticProps() {
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
        revalidate: 10,
    };
}

export default function Home({
    data_header,
    data_video,
    data_overview,
    data_location,
    data_section_slide,
    data_product,
    data_video_advice,
    data_footer,
}) {
    const [isOpen, _setIsOpen] = useState(false);

    const refElementA = useRef(null);

    const setIsOpen = useCallback((value) => {
        _setIsOpen(value);
    }, []);

    useEffect(() => {
        let timer1 = setTimeout(() => setIsOpen(true), 5000);
        if (typeof window !== 'undefined') {
            (function (d, s, id) {
                var js,
                    fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
            })(document, 'script', 'facebook-jssdk');
            const chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute(
                'page_id',
                data_footer['ID_FACEBOOK'] ? data_footer['ID_FACEBOOK'] : '806932376075524',
            );
            chatbox.setAttribute('attribution', 'biz_inbox');
            window.fbAsyncInit = function () {
                FB?.init({
                    xfbml: true,
                    version: 'v13.0',
                });
            };
            window.fbAsyncInit();
        }
        return () => {
            clearTimeout(timer1);
        };
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
                <meta property="og:url" content="http://mandalakimboi.vn/" />
                {/*<meta property="og:email" content="welcome@mandalahotel.com.vn" />*/}
                <meta property="og:image" content="/assets/images/logo.png" />
                <meta property="og:image:alt" content="Apec Mandala Retreats Kim Boi" />
                <meta property="image" content="/assets/images/logo.png" />
            </Head>
            <div className="wrapper fw" style={{ overflowY: 'hidden' }}>
                <div className="hotline-phone-ring-wrap">
                    <div className="hotline-phone-ring">
                        <div className="hotline-phone-ring-circle" />
                        <div className="hotline-phone-ring-circle-fill" />
                        <div className="hotline-phone-ring-img-circle">
                            <a
                                href={`tel:0${data_footer?.['SDT'] ? `${data_footer['SDT']}` : ''}`}
                                className="pps-btn-img"
                            >
                                <img
                                    src="/assets/images/phone.png"
                                    alt="Gọi điện thoại"
                                    width="50"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="hotline-bar">
                        <a href={`tel:0${data_footer?.['SDT'] ? `${data_footer['SDT']}` : ''}`}>
                            <span className="text-hotline">
                                {data_footer?.['SDT'] ? `0${data_footer['SDT']}` : ''}
                            </span>
                        </a>
                    </div>
                </div>
                <div className="hotline-phone-zalo-wrap">
                    <div className="hotline-phone-ring">
                        <div className="hotline-phone-ring-circle" />
                        <div className="hotline-phone-ring-circle-fill" />
                        <div className="hotline-phone-ring-img-circle">
                            <a
                                href={`${data_footer?.['ZALO'] ? `${data_footer['ZALO']}` : ''}`}
                                className="pps-btn-img"
                                target="_blank"
                            >
                                <img
                                    src="/assets/images/zalo.svg"
                                    alt="Gọi điện thoại"
                                    width="100"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="hotline-bar">
                        <a
                            href={`${data_footer?.['ZALO'] ? `${data_footer['ZALO']}` : ''}`}
                            target="_blank"
                        >
                            <span className="text-hotline">
                                ${data_footer?.['ZALO'] ? `${data_footer['ZALO']}` : ''}
                            </span>
                        </a>
                    </div>
                </div>
                <div className="scrollTop">
                    <div className="flex">
                        <img className="img-fluid" src="/assets/images/scroll.png" alt="" />
                    </div>
                </div>
                <a id={'id_scroll'} ref={refElementA} />
                <HeaderView isOpent={isOpen} data_header={data_header} setIsOpen={setIsOpen} />
                <BannerView />
                <AboutUs data_video={data_video} isOpen={isOpen} />
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
                <NotificationContainer />
                <div id="fb-root" />
                <div id="fb-customer-chat" className="fb-customerchat" />
            </div>
            <style jsx global>{`
                .show_left {
                    position: relative;
                    animation-name: move_to_left;
                    animation-duration: 1s;
                    animation-iteration-count: 1;
                }

                .show_right {
                    position: relative;
                    animation-name: move_to_right;
                    animation-duration: 1s;
                    animation-iteration-count: 1;
                }
                .hotline-phone-zalo-wrap {
                    position: fixed;
                    bottom: 125px;
                    right: 0;
                    z-index: 9999;
                }

                @keyframes move_to_left {
                    from {
                        left: -500px;
                    }
                    to {
                        left: 0;
                    }
                }

                @keyframes move_to_right {
                    from {
                        right: -500px;
                    }
                    to {
                        right: 0;
                    }
                }
            `}</style>
        </React.Fragment>
    );
}
