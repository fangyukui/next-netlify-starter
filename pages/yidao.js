import Head from 'next/head'

export default function YiDao() {
    return (
        <div className="full">
            <Head>
                <title>一刀传世中控系统</title>
            </Head>

            <iframe scrolling="no" frameBorder="0" border="0" rows="0"
                style={{ width: '100%', height: '100%' }}
                src="http://118.195.152.88/yidao"
            />
        </div>
    )
}