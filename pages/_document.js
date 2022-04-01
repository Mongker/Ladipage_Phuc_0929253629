import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="stylesheet"
                    href="/cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
                />
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/css/animate.min.css" />
                <link rel="stylesheet" href="/assets/css/slick.css" />
                <link rel="stylesheet" href="/assets/css/sweetalert.css" />
                <link rel="stylesheet" href="/assets/css/style.css" />
                <script src="/assets/js/jquery-3.5.1.min.js" />
                <script src="/assets/js/bootstrap.min.js" />
                <script src="/assets/js/slick.min.js" />
                <script src="/assets/js/sweetalert.min.js" />
                <script src="/assets/js/script.js" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
