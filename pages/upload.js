import { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
/**
 * # MY ACCOUNT GOOGLE PLAY:
 * @see {@link https://play.google.com/store/apps/developer?id=dzino Google Play}
 */

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
        body.append("file", image);
        body.append("name", 'landing_page');
        const res = await fetch("http://localhost:1999/api/file/upload", {
            method: "POST",
            body
        })
        const json = await res.json()
        setData(json);
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div>
                <img src={createObjectURL} style={{maxWidth: 450}} />
                <h4>Select Image</h4>
                {
                    data?.fileNameInServer && (
                        <div style={{
                            backgroundColor: 'olive',
                            color: "white",
                            height: 25,
                            textAlign: 'center',
                            borderRadius: 20,
                            margin: 5,
                        }}>
                            <a href={`http://localhost:1999/api/file/${data?.fileNameInServer}`}> {data?.fileNameInServer}</a>
                        </div>
                    )
                }
                <input type="file" name="myImage" onChange={uploadToClient} />
                <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={uploadToServer}
                >
                    Send to server
                </button>
            </div>

        </div>
    );
}
