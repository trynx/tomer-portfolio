import Footer from "@components/Footer";
import Header from "@components/Header";
import { Player } from "@lottiefiles/react-lottie-player";
import Head from "next/head";

export default function Home() {
    return (
        <div className='container'>
            <Head>
                <title>Tomer Portfolio</title>
                <link rel='shortcut icon' href='/image/favicon.ico' />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/image/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/image/favicon-16x16.png'
                />
                <link rel='icon' href='/image/favicon.ico' />
            </Head>

            <main>
                <Player
                    id='firstLottie'
                    autoplay
                    loop
                    mode='normal'
                    src='https://assets5.lottiefiles.com/packages/lf20_ylka2aru.json'
                    style={{ width: "300px", height: "300px" }}></Player>
                <Header title='Hola Hola :)' />
                <p className='description'>
                    Empeza a hacerlo lindo ^_^
                    {/* Get started by editing <code>pages/index.js</code> */}
                </p>
            </main>

            <Footer />
        </div>
    );
}
