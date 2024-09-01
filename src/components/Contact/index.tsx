const Contact = () => {
    // 드롭다운 추가
    return (
        <details>
            <summary>
                연락하기
            </summary>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h3>신랑</h3>

                <a href="tel:01052100847">연락 버튼 svg</a>

                <a href="sms:01052100847">문자 버튼 svg</a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h3>신부</h3>
                <a href="tel:01052100847">연락 버튼 svg</a>

                <a href="sms:01052100847">문자 버튼 svg</a>
            </div>
        </details>
    );
};

export default Contact;