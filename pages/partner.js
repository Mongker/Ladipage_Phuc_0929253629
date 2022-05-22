import dynamic from 'next/dynamic';
import React from 'react';
const News = dynamic(() => import('../components/Option'), {ssr: false})

import 'antd/dist/antd.css';

export default function index() {
    return (<News groupId={'partner'} />);
};
