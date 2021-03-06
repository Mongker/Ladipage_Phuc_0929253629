import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function PrivatePage(props) {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({});
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };

    const uploadToServer = async (event) => {
        const body = new FormData();
        body.append('file', image);
        body.append('name_key', '');
        const res = await fetch('https://mandalakimboi.vn/api/file-public/upload', {
            method: 'POST',
            body,
        });
        const json = await res.json();
        await setData(json);
    };

    useEffect(() => {
        if (image) {
            uploadToServer().then();
        }
    }, [image]);

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div>
                <img src={createObjectURL} style={{ maxWidth: 450 }} />
                <h4>Select Image</h4>
                {data?.fileNameInServer && (
                    <>
                        <div
                            style={{
                                backgroundColor: 'olive',
                                color: 'white',
                                height: 25,
                                textAlign: 'center',
                                borderRadius: 20,
                                margin: 5,
                            }}
                        >
                            <a
                                href={`https://mandalakimboi.vn${data?.fileNameInServer}`}
                                target="_blank"
                            >
                                {data?.fileNameInServer}
                            </a>
                        </div>
                    </>
                )}
                <input type="file" name="myImage" onChange={uploadToClient} />
                <CopyToClipboard
                    text={`https://mandalakimboi.vn
                    ${data?.fileNameInServer}`}
                    onCopy={() => alert('Copy th??nh c??ng')}
                >
                    <button className="btn btn-primary">Copy link</button>
                </CopyToClipboard>
            </div>
        </div>
    );
}
