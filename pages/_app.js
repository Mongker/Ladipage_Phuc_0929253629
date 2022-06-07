import '../styles/globals.css';
import 'react-notifications/lib/notifications.css';
import Script from 'next/script'
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-230289602-1');
                        `,
                }}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
