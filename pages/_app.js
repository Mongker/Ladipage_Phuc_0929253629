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
            <Script
                dangerouslySetInnerHTML={{
                    __html: ` (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:3067330,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);}
                    )(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
                }}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
