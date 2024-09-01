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

                    <h3>2024.11.17</h3>

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

                        <h4 style={{ textAlign: 'center', color: 'grey', lineHeight: '3rem' }}>
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
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '1rem',
                    }}>
                        <h2> 오시는 길</h2>

                        <Spacer size={2.0}/>

                        <h3>
                            보테가 마지오
                        </h3>
                        <Spacer size={1.0}/>
                        <h4>
                            서울 성동구 서울숲2길 32-14 갤러리아 포레 G층(B2)
                        </h4>

                        <Spacer size={2.0}/>

                        <div
                            id="daumRoughmapContainer1725183515192"
                            className="root_daum_roughmap root_daum_roughmap_landing">
                        </div>

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
                    <div style={{ padding: '1.5rem' }}>
                        <h2>
                            지하철
                        </h2>
                        <Spacer size={1.0}/>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h3 style={{ color: '#00A84D' }}>⦁ 2호선 뚝섬역</h3>
                            <h3>&nbsp;8번 출구 도보 7분</h3>
                        </div>

                        <Spacer size={0.5}/>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h3 style={{ color: '#F5A200' }}>⦁ 수인분당선 서울숲역</h3>
                            <h3>&nbsp;5번 출구 도보 2분</h3>
                        </div>
                    </div>

                    <div style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingBottom:'1.5rem' }}>
                        <h2>
                            버스
                        </h2>
                        <Spacer size={1.0}/>

                        <h3>뚝섬 서울숲 정류장</h3>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h3 style={{ color: '#0068b7' }}>⦁ </h3>
                            <h3>&nbsp;121, 141, 145, 148, 463</h3>
                        </div>

                        <Spacer size={1.0}/>

                        <h3>성동구민 종합 체육센터 정류장</h3>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h3 style={{ color: '#53b332' }}>⦁ </h3>
                            <h3>&nbsp;2014, 2224, 2413</h3>
                        </div>


                        <h3>뚝섬역 8번 출구 정류장</h3>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h3 style={{ color: '#53b332' }}>⦁ </h3>
                            <h3>&nbsp;2016, 2224, 2413</h3>
                        </div>
                    </div>

                    <Spacer size={0.5}/>

                    <div  style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                        <h2>
                            주차 안내
                        </h2>
                        <Spacer size={1.0}/>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h3> 건물 내 B3~B7 2시간 무료 주차(안내데스크 주차 등록 시) </h3>
                        </div>
                    </div>

                </FadeInComponent>

                <FadeInComponent>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '5rem',
                    }}>
                        <h2> 마음을 전하실 곳</h2>

                        <Spacer size={1.0}/>

                        <h4 style={{ textAlign: 'center', paddingTop:'1rem'}}>
                            참석이 어려우신 분들을 위해<br/>
                            계좌번호를 기재하였습니다. <br/>
                            너그러운 마음으로 양해 부탁드립니다.<br/>
                        </h4>

                        <Spacer size={1.0}/>

                        <Accounts/>
                    </div>
                </FadeInComponent>

                <footer>
                    카카오톡 공유하기 버튼
                    링크 복사하기 버튼
                </footer>
            </main>
        </>
    );
}
