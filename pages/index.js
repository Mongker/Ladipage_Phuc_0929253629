import React, { useCallback, useState, useEffect, useRef } from 'react';
import { debounce } from 'throttle-debounce';
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
// import RegistrationViews from '../components/home/RegistrationViews';
import dynamic from 'next/dynamic';
const ModalRegistration = dynamic(import('../components/modal/ModalRegistration'));

const itemIdsNameId = ['productTap', 'overView', 'partner']
export default function Home() {
    const [isOpen, _setIsOpen] = useState(false);
    // const [isScroll, setIsScroll] = useState(false);
    // // const [indexItemIdsNameId, setIndexItemIdsNameId] = useState(0);
    // const indexItemIdsNameId = useRef(0);
    // const oyItemIdsIdName = useRef([]);
    // const perScrollY = useRef(0);
    //
    const setIsOpen = useCallback((value) => {
        _setIsOpen(value);
    }, []);
    //
    // useEffect(() => {
    //     typeof window !== 'undefined' && window.scrollBy(0, 0);
    // }, [])
    // useEffect(() => {
    //     const debounceScroll = () => setIsScroll(true);
    //
    //     if(typeof window !== 'undefined') {
    //         window.addEventListener("scroll", debounceScroll);
    //         itemIdsNameId.map((name) => {
    //             const domIdScroll = document.getElementById(name);
    //             const oy = domIdScroll.getBoundingClientRect().y || 0
    //             oyItemIdsIdName.current = [...oyItemIdsIdName.current, oy]
    //             return name;
    //         })
    //     }
    //
    //     return () => {
    //         window.removeEventListener("scroll", debounceScroll);
    //     };
    // }, []);
    //
    // useEffect(() => {
    //     console.log('isScroll', isScroll); // MongLV log fix bug
    //     if(isScroll) {
    //         logicScroll();
    //     }
    // }, [isScroll])
    //
    //
    // function logicScroll() {
    //     const st = window.pageYOffset || document.documentElement.scrollTop;
    //
    //     if (st > perScrollY.current){
    //         indexItemIdsNameId.current = indexItemIdsNameId.current + 1;
    //         handleScrollY(itemIdsNameId[indexItemIdsNameId.current]);
    //     } else {
    //         indexItemIdsNameId.current = indexItemIdsNameId.current - 1;
    //         handleScrollY(itemIdsNameId[indexItemIdsNameId.current]);
    //     }
    //     perScrollY.current = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    // }
    //
    //
    // const handleScrollY = (nameId) => {
    //     console.log('nameId', nameId); // MongLV log fix bug
    //     if(typeof window !== 'undefined' && nameId) {
    //         const domIdScroll = document.getElementById(nameId);
    //         const oy = domIdScroll.getBoundingClientRect().y
    //         window.scrollBy(0, oy);
    //     }
    // };

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
                <HeaderView setIsOpen={setIsOpen} />
                <BannerView />
                <AboutUs />
                <OverView />
                <LocationView />
                <SectionSlideViews />
                <ProductTap />
                <NewsViews />
                <Partner />
                {/*<RegistrationViews />*/}
                <FooterView />
                <ModalRegistration isOpen={isOpen} setIsOpen={setIsOpen} />
                <div className={'ifc'} />
            </div>
        </React.Fragment>
    );
}
