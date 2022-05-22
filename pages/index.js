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
import Partner from '../components/home/Partner';
import Advice from '../components/home/Advice';
// import RegistrationViews from '../components/home/RegistrationViews';
import NewsViews from '../components/home/NewsViews';

const ModalRegistration = dynamic(import('../components/modal/ModalRegistration'), { ssr: false });
// const NewsViews = dynamic(import('../components/home/NewsViews'), { ssr: false });

async function getDataGoogleSheet(id = '/', url) {
    const res = await fetch(!url ? `https://mandalakimboi.vn/api/google_sheet/client${id}` : url);
    return await res.json();
}

// export async function getStaticPaths() {
//     return {
//         paths: [],
//         fallback: false,
//     };
// }

const dataJSON = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [{
        "@type": "WebSite",
        "@id": "https://mandalakimboi.vn",
        "url": "https://mandalakimboi.vn/",
        "name": "APEC MANDALA RETREATS",
        "description": "",
        "potentialAction": [{
            "@type": "SearchAction",
            "target": "https://mandalakimboi.vn/?s={search_term_string}",
            "query-input": "required name=search_term_string"
        }],
        "inLanguage": "en-US"
    }, {
        "@type": "ImageObject",
        "@id": "https://mandalakimboi.vn/#primaryimage",
        "inLanguage": "en-US",
        "url": "https://mandalakimboi.vn/assets/images/logo.png",
        "contentUrl": "https://mandalakimboi.vn/assets/images/logo.png",
        "width": 800,
        "height": 533,
        "caption": "phoi-canh-mandala-kim-boi"
    }, {
        "@type": "WebPage",
        "@id": "https://mandalakimboi.vn",
        "url": "https://mandalakimboi.vn/",
        "name": "APEC MANDALA RETREATS KIM B\u00d4I - H\u00d2A B\u00ccNH",
        "isPartOf": {
            "@id": "https://mandalakimboi.vn/#website"
        },
        "primaryImageOfPage": {
            "@id": "https://mandalakimboi.vn/#primaryimage"
        },
        "datePublished": "2020-07-24T09:03:52+00:00",
        "dateModified": "2022-04-25T03:32:40+00:00",
        "description": "APEC Mandala Retreats Kim B\u00f4i m\u1ed9t trong nh\u1eefng d\u1ef1 \u00e1n \u0111\u1eb3ng c\u1ea5p b\u1eadc nh\u1ea5t t\u1ea1i Ho\u00e0 B\u00ecnh c\u1ee7a ch\u1ee7 \u0111\u1ea7u t\u01b0 APEC Group, v\u1edbi thi\u1ebft k\u1ebf d\u1ea1ng c\u0103n h\u1ed9 kh\u00e1ch s\u1ea1n 6 sao k\u1ebft n\u1ed1i con ng\u01b0\u1eddi v\u1edbi thi\u00ean nhi\u00ean ng\u00e0y c\u00e0ng g\u1ea7n h\u01a1n.",
        "breadcrumb": {
            "@id": "https://mandalakimboi.vn"
        },
        "inLanguage": "en-US",
        "potentialAction": [{
            "@type": "ReadAction",
            "target": ["https://mandalakimboi.vn/"]
        }]
    }, {
        "@type": "BreadcrumbList",
        "@id": "https://mandalakimboi.vn",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "item": {
                "@id": "https://mandalakimboi.vn"
            }
        }]
    }]
})

export async function getStaticProps() {
    const data_header = await getDataGoogleSheet('/1642400825'); // Header
    const data_video = await getDataGoogleSheet('/1310981046'); // Video
    const data_overview = await getDataGoogleSheet('/1475976919'); // OverView
    const data_location = await getDataGoogleSheet('/1813597616'); // Location
    const data_section_slide = await getDataGoogleSheet('/1968707698'); // Section
    const data_product = await getDataGoogleSheet('/1318880518'); // Product
    const data_video_advice = await getDataGoogleSheet('/1226334748'); // Video Advice
    const data_footer = await getDataGoogleSheet('/356671284'); // Video Advice
    const data_seo = await getDataGoogleSheet('/980617706'); // Video Advice
    const data_news = await getDataGoogleSheet('', 'https://mandalakimboi.vn/api/threads?groupId=news'); // Video Advice
    const data_partner = await getDataGoogleSheet('', 'https://mandalakimboi.vn/api/threads?groupId=partner'); // Video Advice

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
            data_seo,
            data_news,
            data_partner,
        },
        revalidate: 120,
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
    data_footer, data_seo,
    data_news, data_partner
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
                <title>{data_seo['TITLE_SEO'] ? data_seo['TITLE_SEO'] : 'Apec Mandala Retreats Kim Boi'}</title>
                <meta name="title" content={`${data_seo['TITLE_SEO'] ? data_seo['TITLE_SEO'] : 'Apec Mandala Retreats Kim Boi'}`} />
                <meta name="description" content={`${data_seo['DES_SEO'] ? data_seo['DES_SEO'] : 'Apec Mandala Retreats Kim Boi'}`} />
                <meta property="og:title" content={`${data_seo['TITLE_SEO'] ? data_seo['TITLE_SEO'] : 'Apec Mandala Retreats Kim Boi'}`} />
                <meta property="og:description" content={`${data_seo['DES_SEO'] ? data_seo['DES_SEO'] : 'Apec Mandala Retreats Kim Boi'}`} />
                <meta property="og:type" content="Website" />
                <meta property="og:url" content="https://mandalakimboi.vn/" />
                {/*<meta property="og:email" content="welcome@mandalahotel.com.vn" />*/}
                <meta
                    property="og:image"
                    content={`${data_seo['IMAGE_SEO'] ? data_seo['IMAGE_SEO'] : 'https://mandalakimboi.vn/assets/images/logo.png'}`}
                />
                <meta property="og:image:alt" content="Apec Mandala Retreats Kim Boi" />
                <meta property="image" content={`${data_seo['IMAGE_SEO'] ? data_seo['IMAGE_SEO'] : 'https://mandalakimboi.vn/assets/images/logo.png'}`} />

                <meta name="robots"
                      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://mandalakimboi.vn/"/>
                <meta property="og:site_name" content="APEC MANDALA RETREATS"/>
                <meta property="article:modified_time" content="2022-04-25T03:32:40+00:00"/>
                <meta property="og:image:width" content="800"/>
                <meta property="og:image:height" content="533"/>
                <script type="application/ld+json" className="yoast-schema-graph" dangerouslySetInnerHTML={{
                    __html: dataJSON
                }} />
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
                <NewsViews data_news={data_news} />
                <Partner data_partner={data_partner} />
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
                    bottom: 185px;
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
