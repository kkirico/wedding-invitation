import Head from 'next/head';
import Image from 'next/image';
import FadeInComponent from '@/components/FadeInComponent';
import Calendar from '@/components/Calendar';
import Contact from '@/components/Contact';
import Spacer from '@/components/Spacer';
import image2 from '../../public/image2.jpeg';
import image3 from '../../public/image3.jpeg';
import image4 from '../../public/image4.jpeg';
import naverMap from '../../public/naver_map.webp';
import kakaoMap from '../../public/kakao_map.webp';
import Accounts from '@/components/Accounts';
import link from '../../public/link.svg';

export default function Home() {
    return (
        <>
            <Head>
                <title>초대합니다.</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta property="og:description" content="사랑해요 연예가중계"/>
            </Head>

            <main style={{ width: '100%', height: 'auto' }}>
                <div style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    zIndex: 9999,
                    backgroundColor: 'lightgray',
                    background: '#929692',
                    color: 'white',
                    borderRadius: '100%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <a
                        href="#destination"
                        style={{ 'textDecoration': 'none', color: 'white' }}
                    >
                        <h3 style={{ transform: 'translateY(-2px)' }}>map</h3>
                    </a>
                </div>

                <div style={{ padding: 10 }}>
                    <Image
                        src={image3}
                        alt="test image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto', borderRadius: 20 }}
                        placeholder="blur"
                    />
                </div>

                <div className={'main-info'} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Spacer size={1}/>

                    <h1>이헌준 & 이지연</h1>

                    <Spacer size={1}/>

                    <h3>2024.11.17. 오후 3시 30분</h3>

                    <Spacer size={0.5}/>

                    <h2>보테가 마지오</h2>

                    <Spacer size={1}/>
                </div>

                <FadeInComponent>
                    <Spacer size={2}/>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(247, 243, 234)',
                        paddingTop: 70,
                        paddingBottom: 70,
                    }}>
                        <h3>소중한 분들을 초대합니다.</h3>

                        <Spacer size={2}/>

                        <h4 style={{ textAlign: 'center', color: 'grey', lineHeight: '2.5rem' }}>
                            저희 두 사람이<br/>
                            사랑과 믿음으로<br/>
                            한 가정을 이루게 되었습니다.<br/>
                            늘 봄날처럼 밝고<br/>
                            행복하게 살도록 노력하겠습니다.<br/>
                            귀한 걸음 하시어<br/>
                            축복해 주시면 큰 기쁨이겠습니다.<br/>
                        </h4>
                    </div>

                    <Spacer size={2}/>
                </FadeInComponent>

                <FadeInComponent>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '1rem',
                    }}>
                        <Image
                            src={image2}
                            alt="test image"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }} // optional
                        />

                        <div>
                            <Spacer size={2}/>

                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <h3>이윤식 · 홍수연</h3>

                                <h5 style={{ color: 'grey', alignSelf: 'flex-end' }}>&nbsp;의 아들</h5>

                                <h3>&nbsp;헌준</h3>
                            </div>

                            <Spacer size={2}/>

                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <h3>이광홍 · 이소영</h3>
                                <h5 style={{ color: 'grey', alignSelf: 'flex-end' }}>&nbsp;의 딸</h5>
                                <h3>&nbsp;지연</h3>
                            </div>
                        </div>
                    </div>
                </FadeInComponent>

                <FadeInComponent>
                    <Spacer size={2}/>

                    <Contact/>

                    <Spacer size={2}/>
                </FadeInComponent>

                <FadeInComponent>
                    <Spacer size={2}/>

                    <Calendar/>

                    <Spacer size={2}/>
                </FadeInComponent>

                <FadeInComponent>
                    <Spacer size={2}/>

                    <h1 style={{ display: 'flex', justifyContent: 'center' }}> 갤러리 </h1>

                    <Spacer size={1.5}/>
                </FadeInComponent>

                <FadeInComponent>
                    <Image
                        src={image2}
                        alt="test image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} // optional
                    />

                    <Spacer size={1.5}/>
                </FadeInComponent>

                <FadeInComponent>
                    <Image
                        src={image3}
                        alt="test image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} // optional
                    />

                    <Spacer size={1.5}/>
                </FadeInComponent>

                <FadeInComponent>
                    <Image
                        src={image4}
                        alt="test image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} // optional
                    />
                    <Spacer size={1}/>
                </FadeInComponent>

                <FadeInComponent>
                    <div id={'destination'} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '1rem',
                    }}>
                        <h2>오시는 길</h2>

                        <Spacer size={2.0}/>

                        <h3>보테가 마지오</h3>

                        <Spacer size={1.0}/>

                        <h4 style={{ lineHeight: '1.5rem', textAlign: 'center' }}>
                            서울 성동구 서울숲2길 32-14
                            <br/>
                            갤러리아 포레 G층(B2)
                        </h4>

                        <Spacer size={2.0}/>

                        <div style={{ width: '360px', height: '360px' }} id={'map'}/>

                        <Spacer size={2.0}/>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <a href="https://naver.me/57w8kkP3">
                                <Image
                                    src={naverMap}
                                    alt="test image"
                                    width={40}
                                    height={40}
                                    sizes="100vw"
                                    style={{ border: '1px solid #03CF5D', borderRadius: '30%' }}
                                />
                            </a>

                            <Spacer size={2.0}/>

                            <a href="https://place.map.kakao.com/133745576">
                                <Image
                                    src={kakaoMap}
                                    alt="test image"
                                    width={40}
                                    height={40}
                                    sizes="100vw"
                                    style={{ border: '1px solid #FAE300', borderRadius: '30%' }}
                                />
                            </a>
                        </div>
                    </div>
                </FadeInComponent>

                <FadeInComponent>
                    <div style={{ padding: '1.5rem', borderTop: '1px solid #ebebeb' }}>
                        <h2>지하철</h2>
                        <Spacer size={1.0}/>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h3>
                                <span style={{ color: '#00A84D' }}>
                                    ⦁ 2호선 뚝섬역
                                </span>
                                &nbsp;8번 출구 도보 7분
                            </h3>
                        </div>

                        <Spacer size={0.5}/>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h3>
                                <span style={{ color: '#F5A200' }}>
                                    ⦁ 수인분당선 서울숲역
                                </span>
                                &nbsp;5번 출구 도보 2분
                            </h3>
                        </div>
                    </div>

                    <div style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingBottom: '1.5rem' }}>
                        <h2>
                            버스
                        </h2>
                        <Spacer size={1.0}/>

                        <h3>뚝섬 서울숲 정류장</h3>
                        <Spacer size={0.5}/>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h3 style={{ color: '#0068b7', transform: 'translateY(-2.5px)' }}>⦁ </h3>
                            <h4>&nbsp;121, 141, 145, 148, 463</h4>
                        </div>

                        <Spacer size={1.0}/>

                        <h3>성동구민 종합 체육센터 정류장</h3>
                        <Spacer size={0.5}/>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h3 style={{ color: '#53b332', transform: 'translateY(-2.5px)' }}>⦁ </h3>
                            <h4>&nbsp;2014, 2224, 2413</h4>
                        </div>

                        <Spacer size={1.0}/>

                        <h3>뚝섬역 8번 출구 정류장</h3>
                        <Spacer size={0.5}/>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h3 style={{ color: '#53b332', transform: 'translateY(-2.5px)' }}>⦁ </h3>
                            <h4>&nbsp;2016, 2224, 2413</h4>
                        </div>
                    </div>

                    <Spacer size={0.5}/>

                    <div style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                        <h2>
                            주차 안내
                        </h2>
                        <Spacer size={1.0}/>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h3> 건물 내 B3~B7 2시간 무료 주차(안내데스크 주차 등록 시) </h3>
                        </div>
                    </div>

                    <Spacer size={2}/>
                </FadeInComponent>

                <FadeInComponent>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '3rem',
                        borderTop: '1px solid #ebebeb',
                    }}>
                        <h2> 마음을 전하실 곳</h2>


                        <h4 style={{ textAlign: 'center', padding: '2rem', lineHeight: '2rem' }}>
                            참석이 어려우신 분들을 위해<br/>
                            계좌번호를 기재하였습니다. <br/>
                            너그러운 마음으로 양해 부탁드립니다.<br/>
                        </h4>

                        <Spacer size={1.0}/>

                        <Accounts/>
                    </div>
                </FadeInComponent>

                <footer style={{
                    width: '100%',
                    height: '10rem',
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#f6f6f6',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <div
                        onClick={() => {
                            navigator.clipboard.writeText(`https://wedding-invitation-lhjjy.vercel.app/`);
                            window.alert(`링크가 복사되었습니다. \n 필요한 곳에 붙여넣기 하세요. `);
                        }}
                        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Image
                            src={link}
                            alt="test image"
                            width={24}
                            height={24}
                            sizes="100vw"
                        />

                        <Spacer size={0.5}/>

                        <h3>링크 복사하기</h3>
                    </div>
                </footer>
            </main>
        </>
    );
}
