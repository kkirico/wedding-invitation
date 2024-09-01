import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <body>
                <Main/>
                <NextScript />
                <script
                    className="daum_roughmap_loader_script"
                    src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"
                />
            </body>
        </Html>
    );
}
