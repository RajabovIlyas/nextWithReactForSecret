import GlobalStyle from "../style/GlobalStyle";
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>

                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;900&display=swap" rel="stylesheet"/>
            </Head>
        <GlobalStyle/>
            <Component {...pageProps} />
            </>
    )
}

export default MyApp