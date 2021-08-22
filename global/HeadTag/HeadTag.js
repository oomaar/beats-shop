import Head from "next/head";

export const HeadTag = ({ title }) => {
    return (
        <Head>
            {/* Google Font: Poppins */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />

            {/* Favicon */}
            <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon" />

            {/* Remix Icons CDN */}
            <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
                rel="stylesheet" />
            <title>{title}</title>
        </Head>
    );
};