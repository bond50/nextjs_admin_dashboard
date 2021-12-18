import '../styles/globals.css'
import Head from "next/head";




const MyApp = ({Component, pageProps}) => {

    const returnHead = () => {
        return <Head>
            <meta charSet="UTF-8"/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <link href="https://fonts.gstatic.com" rel="preconnect"/>
            <link
                href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
                rel="stylesheet"/>

             <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
                  rel="stylesheet"
                  integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
                  crossOrigin="anonymous"/>

            <link href={`bootstrap-icons/bootstrap-icons.css`} rel="stylesheet"/>

            <title>Vihiga county Referral Hospital Administration Dashboard</title>

        </Head>
    }




 return <>
        {returnHead()}
        <Component {...pageProps} />
    </>

};

export default MyApp