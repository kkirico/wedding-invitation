import '@/styles/globals.css';
import 'react-calendar/dist/Calendar.css';
import '@/styles/calendar.css';
import type { AppProps } from 'next/app';
import { Gowun_Batang } from 'next/font/google';
import Script from 'next/script';

const globalFont = Gowun_Batang({ weight: '400', subsets: ['latin'] });
declare var naver: any;

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script
                type="text/javascript"
                src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=vcwe9wdzyz"
                onLoad={() => {
                    var map = new naver.maps.Map('map', {
                        center: new naver.maps.LatLng(37.545918, 127.044399), //지도의 초기 중심 좌표
                        zoom: 16, //지도의 초기 줌 레벨
                        minZoom: 8, //지도의 최소 줌 레벨
                        draggable: false,
                        zoomControlOptions: { //줌 컨트롤의 옵션
                            position: naver.maps.Position.TOP_RIGHT
                        }});

                    var marker = new naver.maps.Marker({
                        position: new naver.maps.LatLng(37.545717, 127.042474),
                        map: map,
                    });
                }}
            />

            <style jsx global>{`
                html {
                    font-family: ${globalFont.style.fontFamily};
                }
            `}
            </style>

            <Component {...pageProps} />
        </>
    );
}
