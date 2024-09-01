const Accounts = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <details className={'accounts'} style={{ display: 'flex', flex: 1 }}>
                    <summary style={{ margin: '0 auto' }}>
                        <div>
                            <h3 style={{
                                padding: '0 2.5rem',
                                border: '1px solid #878787',
                                letterSpacing: '1px',
                                lineHeight: '35px',
                            }}>
                                신랑측 계좌번호
                            </h3>
                        </div>
                    </summary>

                </details>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <details style={{ display: 'flex', flex: 1 }}>
                    <summary style={{ margin: '0 auto' }}>
                        <div>
                            <h3 style={{
                                padding: '0 2.5rem',
                                border: '1px solid #878787',
                                letterSpacing: '1px',
                                lineHeight: '35px',
                            }}>
                                신부측 계좌번호
                            </h3>
                        </div>
                    </summary>

                </details>
            </div>
        </div>
    )
        ;
};

export default Accounts;