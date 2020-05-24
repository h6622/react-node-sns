import Link from 'next/link'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'

const Home = () => {
    return (
        <>
            <Head>
                <title>React-Node-SNS</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.2.5/antd.min.css" />
            </Head>
            <AppLayout>
                <Link href="/about"><a>about</a></Link>
                <h1>Hello Next</h1>
            </AppLayout>
        </>
    )
}

export default Home;