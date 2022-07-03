import Footer from "@components/Footer";
import Header from "@components/Header";
import Head from "next/head";

export default function Home() {
    return (
        <div className='container'>
            <Head>
                <title>Next.js Starter!</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <Header title='Hola Puto :)' />
                <p className='description'>
                    Empeza a hacerlo lindo ^_^
                    {/* Get started by editing <code>pages/index.js</code> */}
                </p>
            </main>

            <Footer />
        </div>
    );
}
