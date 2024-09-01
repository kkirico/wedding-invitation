import { useState } from 'react';
import Spacer from '@/components/Spacer';
import copy from '../../../public/copy.svg';
import Image from 'next/image';

const Account = ({ bankName, accountNumber, name }: { bankName: string, accountNumber: string, name: string }) => {
    const trimmedAccountNumber = accountNumber.replace(/-/g,"");

    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid #ebebeb', padding: '0.75rem' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <h4 style={{ color: '#544F4F' }}> {bankName}</h4>

                    <Spacer size={0.5}/>

                    <h4 style={{ color: '#544F4F' }}> {accountNumber} </h4>
                </div>

                <div
                    onClick={() => {
                        navigator.clipboard.writeText(`${trimmedAccountNumber}`);
                        window.alert(`계좌번호(${trimmedAccountNumber})가 복사되었습니다. \n 필요한 곳에 붙여넣기 하세요. `);
                    }}
                    style={{ border: '1px solid #ebebeb', padding: '0 0.75rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Image
                        src={copy}
                        alt="test image"
                        width={13}
                        height={13}
                        sizes="100vw"
                    />

                    <h5>복사</h5>
                </div>
            </div>
            <h4 style={{ color: '#544F4F' }}> {name}</h4>
        </div>
    );
};

const Accounts = () => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);

    return (
        <>
            <div style={{ border: '1px solid #ebebeb', width: 'auto' }}>
                <h3
                    style={{
                        border: 0,
                        backgroundColor: '#f9f9f9',
                        paddingTop: '0.5rem',
                        paddingBottom: '0.5rem',
                        paddingLeft: '4rem',
                        paddingRight: '4rem',
                        width: 'auto',
                    }}
                    onClick={() => setVisible((visible) => {
                        return !visible;
                    })}>
                    신랑측 계좌번호
                </h3>

                {(visible) && (
                    <div>
                        <Account accountNumber={'01-239253-00108'} bankName={'하나'} name={'이헌준'}/>
                    </div>
                )}
            </div>

            <Spacer size={0.5}/>

            <div style={{ border: '1px solid #ebebeb', width: 'auto' }}>
                <h3
                    style={{
                        border: 0,
                        backgroundColor: '#f9f9f9',
                        paddingTop: '0.5rem',
                        paddingBottom: '0.5rem',
                        paddingLeft: '4rem',
                        paddingRight: '4rem',
                        width: 'auto',
                    }}
                    onClick={() => setVisible2((visible) => {
                        return !visible;
                    })}>
                    신부측 계좌번호
                </h3>

                {(visible2) && (
                    <div>
                        <Account accountNumber={'01-239253-00108'} bankName={'하나'} name={'이지연'}/>
                        <Account accountNumber={'01-239253-00108'} bankName={'두울'} name={'이광홍'}/>
                        <Account accountNumber={'01-239253-00108'} bankName={'세엣'} name={'이소영'}/>
                    </div>
                )}
            </div>
        </>
    );
};

export default Accounts;