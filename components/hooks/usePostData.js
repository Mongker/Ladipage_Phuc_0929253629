import React, { useState } from 'react';
import { NotificationManager } from 'react-notifications';
// import PropTypes from 'prop-types';

function usePostData(setIsOpen = () => null) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleNotification = () => NotificationManager.success('Thành công', '', 2000);

    const postData = async () => {
        //  http://103.57.222.215:4040/api/google_sheet/client
        const data = {
            NAME: name,
            PHONE: phone,
        };
        try {
            const res = await fetch('http://103.57.222.215:4040/api/google_sheet/client', {
                method: 'POST',
                data,
            });
        } catch (e) {
            console.log('e', e); // MongLV log fix bug
        }
    };

    const handleSubmit = (event) => {
        if (name === '') {
            NotificationManager.warning('Tên của bạn không được để trống', '', 2000);
            setPhone('');
        } else {
            let validatePhone = /(84|0[3|5|7|8|9])+([0-9]{8})/g;
            if (!validatePhone.test(phone)) {
                NotificationManager.warning('Số điện thoại của bạn không có thực!', '', 2000);
                setPhone('');
            } else {
                postData().then();
                setIsOpen(false);
            }
        }
        event.preventDefault();
    };
    return { name, setName, phone, setPhone, handleSubmit, handleNotification };
}

export default usePostData;
