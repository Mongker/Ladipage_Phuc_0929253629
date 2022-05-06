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

function HeaderView({ setIsOpen, data_header }) {
    return (
        <header id="header">
            <div className="headerTop">
                <div className="container">
                    <div className="flex_between">
                        <h1 className="logo">
                            <a href="#banner">
                                <img
                                    className="img-fluid imgLogo"
                                    src={
                                        data_header['HEAD_IMG1']
                                            ? data_header['HEAD_IMG1']
                                            : '/assets/images/logo.png'
                                    }
                                    alt="logo"
                                />
                                <img
                                    className="img-fluid imgLogoScroll"
                                    src={
                                        data_header['HEAD_IMG1']
                                            ? data_header['HEAD_IMG1']
                                            : '/assets/images/logo.png'
                                    }
                                    alt="logo"
                                />
                            </a>
                        </h1>
                        <button
                            className="button-29"
                            role="button"
                            onClick={() => setIsOpen(true)}
                            style={{ cursor: 'pointer' }}
                        >
                            Đăng ký ngay
                        </button>
                        <div className="toggleMenu">
                            <span className="mobile_btn" />
                        </div>
                        <div className="menuScroll">
                            <nav>
                                {Object.keys(data_header).map((key, index) => {
                                    if (key.includes('TITLE')) {
                                        const i = index + 1;
                                        return (
                                            <a key={`ID_${i}_x`} href={data_header[`ID_${i}`]}>
                                                {data_header[key]}
                                            </a>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu">
                <nav>
                    {Object.keys(data_header).map((key, index) => {
                        if (key.includes('TITLE')) {
                            const i = index + 1;
                            return (
                                <a key={`ID_${i}_Y`} href={data_header[`ID_${i}`]}>
                                    {data_header[key]}
                                </a>
                            );
                        } else {
                            return <React.Fragment />;
                        }
                    })}
                </nav>
            </div>
            <style jsx>{`
                .button-29 {
                    align-items: center;
                    appearance: none;
                    background-image: radial-gradient(100% 100% at 100% 0, #139780 0, #083932 100%);
                    border: 0;
                    border-radius: 6px;
                    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
                        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
                    box-sizing: border-box;
                    color: #fff;
                    cursor: pointer;
                    display: inline-flex;
                    font-family: 'JetBrains Mono', monospace;
                    height: 48px;
                    justify-content: center;
                    line-height: 1;
                    list-style: none;
                    overflow: hidden;
                    padding-left: 16px;
                    padding-right: 16px;
                    position: relative;
                    text-align: left;
                    text-decoration: none;
                    transition: box-shadow 0.15s, transform 0.15s;
                    user-select: none;
                    -webkit-user-select: none;
                    touch-action: manipulation;
                    white-space: nowrap;
                    will-change: box-shadow, transform;
                    font-size: 18px;
                }

                .button-29:focus {
                    box-shadow: #083932 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
                        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #083932 0 -3px 0 inset;
                }

                .button-29:hover {
                    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
                        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #083932 0 -3px 0 inset;
                    transform: translateY(-2px);
                }

                .button-29:active {
                    box-shadow: #083932 0 3px 7px inset;
                    transform: translateY(2px);
                }
            `}</style>
        </header>
    );
}

HeaderView.propTypes = {};

HeaderView.defaultProps = {};

export default HeaderView;
