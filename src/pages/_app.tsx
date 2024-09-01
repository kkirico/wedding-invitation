import '@/styles/globals.css';
import 'react-calendar/dist/Calendar.css';
import '@/styles/calendar.css';
import type { AppProps } from 'next/app';
import { Gowun_Batang } from 'next/font/google';

const globalFont = Gowun_Batang({weight:'400', subsets:['latin']});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
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
