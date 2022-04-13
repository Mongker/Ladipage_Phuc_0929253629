import React, {useCallback, useEffect, useState, useRef/* useMemo, useEffect */} from 'react';
import debounce from 'lodash-es/debounce'

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

const itemIdsNameId = ['banner', 'registration', 'overView', 'location', 'sectionSlide', 'productTap', 'news', 'partner', 'footer'];

export default function Home() {
    const [isOpen, _setIsOpen] = useState(false);
    const SCROLL = typeof window !== 'undefined' ? window.innerHeight / 1.5 : 500 / 2;

    // const [isScroll, setIsScroll] = useState(false);
    // const debouncedScrollHandler = useMemo(() => debounce(() => {
    //     setIsScroll(false)
    // }, 1000), []);

    // const [indexItemIdsNameId, setIndexItemIdsNameId] = useState(0);
    const index = useRef(0);
    const refElementA  = useRef(null);
    const xxxx  = useRef(0);
    const isScroll  = useRef(false);
    // const oyItemIdsIdName = useRef([]);
    // const perScrollY = useRef(0);

    const setIsOpen = useCallback((value) => {
        _setIsOpen(value);
    }, []);

    // const handleScroll = () => {
    //     if(!isScroll) {
    //         setIsScroll(truetrue)
    //     }
    //
    //     debouncedScrollHandler();
    // }

    // useEffect(() => {
    //     typeof window !== 'undefined' && window.scrollBy(0, 0);
    // }, [])

    useEffect(() => {

        if(typeof window !== 'undefined') {

            window.addEventListener('scroll', debounce(
                function(event){
                    const delta = event.wheelDelta / 30 || -event.detail;
                    // If the user scrolled up, it goes to previous slide, otherwise - to next slide
                    if(delta < -1) {
                        xxxx.current = xxxx.current + SCROLL;
                        handleScrollY(itemIdsNameId[index.current]);
                    }
                    else if(delta > 1) {
                        xxxx.current = xxxx.current - SCROLL;
                        handleScrollY(itemIdsNameId[index.current]);
                    }
                },
                200
            ));
            window.addEventListener('mousewheel', debounce(
                function(event){
                    const delta = event.wheelDelta / 30 || -event.detail;
                    // If the user scrolled up, it goes to previous slide, otherwise - to next slide
                    if(delta < -1) {
                        xxxx.current = xxxx.current + SCROLL;
                        handleScrollY(itemIdsNameId[index.current]);
                    }
                    else if(delta > 1) {
                        xxxx.current = xxxx.current - SCROLL;
                        handleScrollY(itemIdsNameId[index.current]);
                    }
                },
                200
            ));
            window.addEventListener('DOMMouseScroll', debounce(
                function(event){
                    const delta = event.wheelDelta / 30 || -event.detail;
                    // If the user scrolled up, it goes to previous slide, otherwise - to next slide
                    if(delta < -1) {
                        xxxx.current = xxxx.current + SCROLL;
                        handleScrollY(itemIdsNameId[index.current]);
                    }
                    else if(delta > 1) {
                        xxxx.current = xxxx.current - SCROLL;
                        handleScrollY(itemIdsNameId[index.current]);
                    }
                },
                200
            ));
            window.addEventListener('touchmove', debounce(
                function(event){
                    const delta = event.wheelDelta / 30 || -event.detail;
                    // If the user scrolled up, it goes to previous slide, otherwise - to next slide
                    if(delta < -1) {
                        xxxx.current = xxxx.current + SCROLL;
                        handleScrollY(itemIdsNameId[index.current]);
                    }
                    else if(delta > 1) {
                        xxxx.current = xxxx.current - SCROLL;
                        handleScrollY(itemIdsNameId[index.current]);
                    }
                },
                200
            ));

            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            // window.removeEventListener("mousewheel", debounceScroll);
        };
    }, []);

    const handleKeyDown = function(e){

        // up slide
        if(e.keyCode === 38) {
            xxxx.current = xxxx.current - SCROLL;
            window.scroll(0, xxxx.current)
        } else if(e.keyCode === 40) { // down slide
            xxxx.current = xxxx.current + SCROLL;
            window.scroll(0, xxxx.current)
        }
    }

    // useEffect(() => {
    //     isScroll && logicScroll();
    // }, [isScroll])
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
    const handleScrollY = () => {
        if(typeof window !== 'undefined') {
            // window.scroll(0, xxxx.current)
            window.scroll({
                top: xxxx.current,
                left: 0,
                behavior: 'smooth'
            })
        }
    };

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
                <a id={'id_scroll'} ref={refElementA}/>
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
