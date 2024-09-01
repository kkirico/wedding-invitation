import ReactCalendar from 'react-calendar';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export type DatePiece = Date | null;
export type SelectedDate = DatePiece | [DatePiece, DatePiece];

const Calendar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<SelectedDate>(dayjs("2024-11-17").toDate());


    return (
        <div>
            <div className="calender-title">
                <h3 className="date">
                    2024.11.17.
                </h3>
                <h4 className="time">
                    일요일 오후 3시 30분
                </h4>
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