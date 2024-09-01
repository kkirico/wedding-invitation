import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

declare var daum: any;

export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <body>
                <Main/>
                <NextScript />
                <Script
                    className="daum_roughmap_loader_script"
                    src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"
                    onLoad={() => {
                        new daum.roughmap.Lander({
                            'timestamp': '1725183515192',
                            'key': '2kibg',
                            'mapWidth': '375',
                            'mapHeight': '360',
                        }).render();
                    }}
                />
            </body>
        </Html>
    );
}
