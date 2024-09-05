import ReactCalendar from 'react-calendar';
import { useState } from 'react';
import dayjs from 'dayjs';

export type DatePiece = Date | null;
export type SelectedDate = DatePiece | [DatePiece, DatePiece];

const Calendar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<SelectedDate>(dayjs("2024-11-17").toDate());

    return (
        <div style={{backgroundColor: '#f2f3f0', paddingTop: '1rem', paddingBottom: '2.5rem'}}>
            <div className="calender-title">
                <h2 className="date">
                    2024년 11월 17일
                </h2>
                <h3 className="time">
                    일요일 오후 3시 30분
                </h3>
            </div>

            <ReactCalendar
                className="calendar"
                onChange={setSelectedDate}
                formatDay={(locale, date) => dayjs(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
                value={selectedDate}
                view="month"
                locale='ko'
                next2Label={null}
                prev2Label={null}
            />
        </div>
    )
}

export default Calendar;