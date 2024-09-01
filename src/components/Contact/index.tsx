import phone from '../../../public/phone.svg';
import sms from '../../../public/sms.svg';
import Image from 'next/image';
import Spacer from '@/components/Spacer';

const Contact = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <details className={'contact'} style={{ display: 'flex', flex:1}}>
                <summary className={'contact'} style={{ width: '153px', margin: '0 auto' }}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <h3 style={{
                            padding: '0 2rem',
                            border: '1px solid #878787',
                            borderRadius: '32px',
                            letterSpacing: '1px',
                            lineHeight: '35px',
                        }}>
                            연락하기
                        </h3>
                    </div>
                </summary>

                <Spacer size={2}/>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                        <h3>신랑</h3>

                        <Spacer size={2}/>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <a href="tel:01052100847">
                                <Image
                                    src={phone}
                                    alt="test image"
                                    width={30}
                                    height={30}
                                    sizes="100vw"
                                />
                            </a>
                            <Spacer size={2}/>

                            <a href="sms:01052100847">
                                <Image
                                    src={sms}
                                    alt="test image"
                                    width={30}
                                    height={30}
                                    sizes="100vw"
                                />
                            </a>
                        </div>

                        <Spacer size={3}/>

                        <h3>신랑 아버지</h3>

                        <Spacer size={2}/>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <a href="tel:01080810887">
                                <Image
                                    src={phone}
                                    alt="test image"
                                    width={30}
                                    height={30}
                                    sizes="100vw"
                                />
                            </a>
                            <Spacer size={2}/>

                            <a href="sms:01080810887">
                                <Image
                                    src={sms}
                                    alt="test image"
                                    width={30}
                                    height={30}
                                    sizes="100vw"
                                />
                            </a>
                        </div>

                        <Spacer size={3}/>

                        <h3>신랑 어머니</h3>

                        <Spacer size={2}/>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <a href="tel:01082640847">
                                <Image
                                    src={phone}
                                    alt="test image"
                                    width={30}
                                    height={30}
                                    sizes="100vw"
                                />
                            </a>
                            <Spacer size={2}/>

                            <a href="sms:01082640847">
                                <Image
                                    src={sms}
                                    alt="test image"
                                    width={30}
                                    height={30}
                                    sizes="100vw"
                                />
                            </a>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                        <h3>신부</h3>

                        <Spacer size={2}/>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <a href="tel:01081319987">
                                <Image
                                    src={phone}
                                    alt="test image"
                                    width={30}
                                    height={30}
                                    sizes="100vw"
                                />
                            </a>
                            <Spacer size={2}/>

                            <a href="sms:01081319987">
                                <Image
                                    src={sms}
                                    alt="test image"
                                    width={30}
                                    height={30}
                                    sizes="100vw"
                                />
                            </a>
                        </div>

                        <Spacer size={3}/>

                        <h3>신부 아버지</h3>

                        <Spacer size={2}/>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <a href="tel:01040020747">
                                <Image
                                    src={phone}
                                    alt="test image"
                                    width={30}
                                    height={30}
                                    sizes="100vw"
                                />
                            </a>
                            <Spacer size={2}/>

                            <a href="sms:01040020747">
                                <Image
                                    src={sms}
                                    alt="test image"
                                    width={30}
                                    height={30}
                                    sizes="100vw"
                                />
                            </a>
                        </div>

                        <Spacer size={3}/>

                        <h3>신부 어머니</h3>

                        <Spacer size={2}/>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <a href="tel:01077643936">
                                <Image
                                    src={phone}
                                    alt="test image"
                                    width={30}
                                    height={30}
                                    sizes="100vw"
                                />
                            </a>
                            <Spacer size={2}/>

                            <a href="sms:01077643936">
                                <Image
                                    src={sms}
                                    alt="test image"
                                    width={30}
                                    height={30}
                                    sizes="100vw"
                                />
                            </a>
                        </div>
                    </div>

                </div>

            </details>
        </div>

    );
};

export default Contact;