import Head from 'next/head';
import Image from 'next/image';
import FadeInComponent from '@/components/FadeInComponent';
import Calendar from '@/components/Calendar';
import Contact from '@/components/Contact';
import image2 from '../../public/image2.jpeg'
import image3 from '../../public/image3.jpeg'
import image4 from '../../public/image4.jpeg'

export default function Home() {

    return (
        <>
            <Head>
                <title>초대합니다.</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main style={{ backgroundColor: 'white', width: '100%', height: 'auto' }}>
                <Image
                    src={image3}
                    alt="test image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    placeholder="blur"
                />

                <div className={'main-info'} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <h2 style={{ margin: 10, color: 'black' }}>
                        이헌준 & 이지연
                    </h2>

                    <h4 style={{ margin: 10 }}>
                        2024.11.17
                    </h4>

                    <h3 style={{ margin: 10 }}>
                        보테가 마지오 , 갤러리아 포레 G층
                    </h3>
                </div>

                <FadeInComponent>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                        <h4 style={{ color: 'grey', lineHeight: '30px' }}>
                            저희 두 사람이 사랑과 믿음으로<br/>
                            한 가정을 이루게 되었습니다.<br/>
                            늘 봄날처럼 밝고<br/>
                            행복하게 살도록 노력하겠습니다.<br/>
                            귀한 걸음 하시어<br/>
                            축복해 주시면 큰 기쁨이겠습니다<br/>
                        </h4>
                    </div>

                    <FadeInComponent>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '10px',
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

                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <h4>이윤식 · 홍수연</h4>
                                    <h5 style={{ color: 'grey', alignSelf: 'flex-end' }}>&nbsp;의 아들</h5>
                                    <h4>&nbsp;헌준</h4>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <h4>이광홍 · 이소영</h4>
                                    <h5 style={{ color: 'grey', alignSelf: 'flex-end' }}>&nbsp;의 딸</h5>
                                    <h4>&nbsp;지연</h4>
                                </div>
                            </div>
                        </div>
                    </FadeInComponent>

                    <FadeInComponent>
                        <Contact/>

                    </FadeInComponent>

                    <FadeInComponent>
                        <Calendar>

                        </Calendar>
                    </FadeInComponent>

                    <FadeInComponent>
                        <h1> 갤러리 </h1>
                        <Image
                            src={image2}
                            alt="test image"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }} // optional
                        />
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
                    </FadeInComponent>

                    <FadeInComponent>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '10px',
                        }}>
                            <h2> 오시는 길</h2>
                            <h3>
                                보테가 마지오/ 갤러리아 포레 G층
                            </h3>
                            <h4>
                                서울시 성동구 어쩌구로 몇
                            </h4>
                            <div
                                id="daumRoughmapContainer1725183515192"
                                className="root_daum_roughmap root_daum_roughmap_landing">
                            </div>
                            <a href="https://naver.me/57w8kkP3"> 길찾기 버튼(네이버)</a>
                            <a href="https://place.map.kakao.com/133745576"> 길찾기 버튼(카카오)</a>
                        </div>
                    </FadeInComponent>

                    <FadeInComponent>
                        <div>
                            <h4>
                                지하철
                            </h4>
                            <h5>
                                지하철 몇호선 몇번 출구 도보 몇분
                            </h5>
                            <h5>
                                지하철 몇호선 몇번 출구 도보 몇분
                            </h5>

                            <h4>
                                버스
                            </h4>
                            <h5>
                                버스 몇번, 몇번, 몇번 도보 몇분
                            </h5>
                            <h5>
                                버스 몇번, 몇번, 몇번 도보 몇분
                            </h5>
                            <h5>
                                버스 몇번, 몇번, 몇번 도보 몇분
                            </h5>
                            <h5>
                                버스 몇번, 몇번, 몇번 도보 몇분
                            </h5>

                            <h4>
                                주차
                            </h4>
                            <h5>
                                주차는 어디 어떻게 해서 몇시간 가능합니다.
                            </h5>
                        </div>
                    </FadeInComponent>


                    <FadeInComponent>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '10px',
                        }}>
                            <h3> 마음을 전하실 곳</h3>


                            <h4> 참석이 어려우신 분들을 위해 계좌번호를 기재하였습니다. 너그러운 마음으로 양해 부탁드립니다.</h4>

                            <h5>(드롭다운 만들기) 신랑 측 계좌번호</h5>
                            <h5>(드롭다운 만들기) 신부 측 계좌번호</h5>
                        </div>
                    </FadeInComponent>

                    <footer>
                        카카오톡 공유하기 버튼
                        링크 복사하기 버튼
                    </footer>
                </FadeInComponent>
            </main>
        </>
    );
}
