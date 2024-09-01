import ReactCalendar from 'react-calendar';
import { useState } from 'react';
import dayjs from 'dayjs';

export type DatePiece = Date | null;
export type SelectedDate = DatePiece | [DatePiece, DatePiece];

const Calendar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<SelectedDate>(dayjs("2024-11-17").toDate());


    return (
        <div style={{backgroundColor: 'rgb(247, 243, 234)', paddingTop: '1.5rem', paddingBottom: '5rem'}}>
            <div className="calender-title">
                <h2 className="date">
                    2024.11.17.
                </h2>
                <h3 className="time">
                    일요일 오후 3시 30분
                </h3>
            </div>


            <ReactCalendar
                className="calendar"
                onChange={setSelectedDate}
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