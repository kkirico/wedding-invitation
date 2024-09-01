import React, { ReactElement, ReactNode, useEffect, useRef } from 'react';

const FadeInComponent = ({children}: {children: ReactNode}) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        observer.unobserve(entry.target);  // 애니메이션이 한 번만 실행되도록 옵저버 해제
                    }
                });
            },
            { threshold: 0.1 }  // 요소의 10%가 보이면 애니메이션 시작
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div ref={elementRef} className="fade-in-element">
            <div>
                {children}
            </div>
        </div>
    );
};

export default FadeInComponent;
