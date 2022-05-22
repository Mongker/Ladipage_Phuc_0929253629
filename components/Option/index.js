/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 16/05/2022
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import {Button, Card, Modal} from 'antd';
import styled from 'styled-components';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Meta } = Card;
const ButtonApp = styled(Button)`
  border-radius: 1em;
  position: fixed;
  top: 80%;
  left: 80%;
  z-index: 1000;
`;
const CardApp = styled(Card)`
    margin: 24px;
  border-radius: 1em;
`;
const URL_BASE = 'https://mandalakimboi.vn/api/threads';
function Option({groupId}) {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [date, setDate] = useState('');
    const [isModalVisible, setIsModalVisible] = useState('');
    const [idUpdate, setIdUpdate] = useState('');
    const [data, setData] = useState([]);
    const showModal = (type='POST', data = {}) => {
        if(type === 'PUT') {
            setLink(data.link_blank);
            setTitle(data.title);
            setDescription(data.description);
            setImage(data.image_link);
            setDate(data.date);
            setIdUpdate(data._id);
        }
        setIsModalVisible(type);
    };

    const handleOk = () => {
        postData();
        setIsModalVisible('');
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const postData = async () => {
        debugger; // Todo by MongLV
        const URL_API = isModalVisible === 'PUT' ? (URL_BASE + '/' + idUpdate) : URL_BASE;
        await fetch(URL_API, {
            method: isModalVisible,
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-
            body: JSON.stringify({
                "title": title,
                "type": "tag_black",
                "image_link": image,
                "description": description,
                "link_blank": link,
                "date": date,
                "version": 0,
                "groupId": groupId,
            }),
        });
        setLink('');
        setTitle('');
        setDescription('');
        setImage('');
        setDate('');
        setIdUpdate('');
        getList().then();
    };

    const deleteCard = async (id) => {
        await fetch(`https://mandalakimboi.vn/api/threads/${id}`, {
            method: 'DELETE',
        });
        await getList().then();
    }
    const uploadToServer = async (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            const body = new FormData();
            body.append('file', i);
            body.append('name_key', '');
            const res = await fetch('https://mandalakimboi.vn/api/file-public/upload', {
                method: 'POST',
                body,
            });
            const json = await res.json();
            await json.fileNameInServer && setImage('https://mandalakimboi.vn' +json.fileNameInServer);
        }
    };
    const getList = async () => {
        // const res = await fetch('https://mandalakimboi.vn/api/file-public/upload', {
        const res = await fetch(`https://mandalakimboi.vn/api/threads?groupId=${groupId}`, {
            method: 'GET',
        });
        const json = await res.json();
        await setData(json);
    }
    useEffect(() => {
        getList().then();
    }, []);

    return(
        <React.Fragment>
            <Modal destroyOnClose title={isModalVisible === 'PUT' ? 'Sửa thông tin' : 'Thêm thông tin'} visible={isModalVisible.length > 0} onOk={handleOk} onCancel={handleCancel}>
                <div className={'row_app'}>
                    <div className={'center'}>
                        <input className={'item1'} title={''} type="file" name="" onChange={uploadToServer} />
                        <img src={image} className={'with_image item2'} />
                    </div>
                    <div className={'center'}>
                        <h3 className={'item1'}>Title: </h3>
                        <input value={title} className={'item2'} onChange={(event => setTitle(event.target.value))} />
                    </div>
                    {
                        groupId === 'news' && (
                            <React.Fragment>
                                <div className={'center'}>
                                    <h3 className={'item1'}>Description: </h3>
                                    <textarea value={description} className={'item2'} onChange={(event => setDescription(event.target.value))} />
                                </div>
                                <div className={'center'}>
                                    <h3 className={'item1'}>Time: </h3>
                                    <input value={date} className={'item2'} onChange={(event => setDate(event.target.value))} />
                                </div>
                            </React.Fragment>
                        )
                    }
                    <div className={'center'}>
                        <h3 className={'item1'}>Link: </h3>
                        <input value={link} className={'item2'}  onChange={(event => setLink(event.target.value))} />
                    </div>
                </div>
            </Modal>
            <div className={'center_text'}>
                <h1>
                    {groupId === 'news' ? 'Tin tức' : 'Đối tác'}
                </h1>
            </div>
            <div className={'container'}>
                <ButtonApp type="primary" onClick={() => showModal()}>Thêm</ButtonApp>
                {
                    data.map((item) => (
                        <div key={item._id}>
                            <CardApp
                                style={{ width: 300 }}
                                cover={
                                    <img
                                        alt="example"
                                        src={item.image_link}
                                    />
                                }
                                actions={[
                                    <EditOutlined
                                        key="edit"
                                        onClick={() => showModal('PUT', item)}
                                        style={{
                                            color: '#188ad2'
                                        }}
                                    />,
                                    <DeleteOutlined
                                        key="delete"
                                        onClick={() => deleteCard(item._id)}
                                        style={{
                                            color: '#fc0000'
                                        }}
                                    />
                                ]}
                            >
                                <Meta
                                    title={item.title}
                                    description={item.description}
                                />
                            </CardApp>
                        </div>
                    ))
                }
            </div>
            <style jsx>{`
              .container {
                display: grid;
                justify-content: center;
                align-items: center;
                background-color: #32c151;
                padding: 20px 10px;
                border-radius: 1em;
                grid-template-columns: 325px 325px 325px;
              }
              .input_upload {
                position: fixed;
                z-index: -1000000;
                top: -26px;
              }

              .center_text {
                text-align: center;
              }
              .center {
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
              .item1 {
                flex: 1;
              }
              .item2 {
                flex: 2;
              }
              .with_image {
                width: 150px;
                height: 150px;
              }
              .row_app {
                display: flex;
                flex-direction: column;
              }

            `}</style>
        </React.Fragment>
    );
}

export default Option;
