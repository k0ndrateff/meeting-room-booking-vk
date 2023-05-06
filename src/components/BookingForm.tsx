import React, {useState} from "react";
import {Button, SegmentedControl, Select, Textarea} from "@mantine/core";
import '../styles/BookingForm.css';
import FormElement from "./FormElement";
import {DatePicker, TimeInput} from "@mantine/dates";
import 'dayjs/locale/ru';

const BookingForm:React.FC = () => {
    const [tower, setTower] = useState<string | undefined>('A');
    const [level, setLevel] = useState<string | null>('3');
    const [meetingRoom, setMeetingRoom] = useState<string | null>('1');
    const [date, setDate] = useState<Date | null>(null);
    const [timeStart, setTimeStart] = useState<string | null>(null);
    const [timeEnd, setTimeEnd] = useState<string | null>(null);
    const [comment, setComment] = useState<string>('');

    const [error, setError] = useState<boolean | string>(false);

    // Генерация номеров этажей
    const levelNumbers = Array.from({length: 28}, (x, i) => i).slice(3).map((i) => String(i));
    const meetingRoomNumbers = Array.from({length: 11}, (x, i) => i).slice(1).map((i) => String(i));

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // TODO: Валидация

        // Отправка сериализованного JSON в консоль
        console.log(JSON.stringify({
            tower: tower,
            level: level,
            meetingRoom: meetingRoom,
            date: date,
            timeStart: timeStart,
            timeEnd: timeEnd,
            comment: comment
        }));
    };

    const handleReset = () => {
        setTower('A');
        setLevel('3');
        setMeetingRoom('1');
        setDate(null);
        setTimeStart(null);
        setTimeEnd(null);
        setComment('');
    };

    // TODO: Переделать макет

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className={'form-parent'}>
                <div className={'form-block'}>
                    <FormElement label={'Офис'}>
                        <SegmentedControl data={[
                            {label: 'Башня А', value: 'A'},
                            {label: 'Башня Б', value: 'B'}
                        ]} value={tower} onChange={(value) => setTower(value)} />
                    </FormElement>
                    <FormElement label={'Этаж'}>
                        <Select data={levelNumbers} onChange={(value) => setLevel(value)} value={level} />
                    </FormElement>
                    <FormElement label={'Номер переговорки'}>
                        <Select data={meetingRoomNumbers} onChange={(value) => setMeetingRoom(value)} value={meetingRoom} />
                    </FormElement>
                    <FormElement label={'Время начала'}>
                        <TimeInput value={timeStart as string} onChange={(event) => setTimeStart(event.target.value)} />
                    </FormElement>
                    <FormElement label={'Время окончания'}>
                        <TimeInput value={timeEnd as string} onChange={(event) => setTimeEnd(event.target.value)} />
                    </FormElement>
                </div>
                <div className={'form-block'}>
                    <FormElement label={'Дата собрания'}>
                        <DatePicker value={date} onChange={(value) => setDate(value)}  hideOutsideDates locale={'ru'} />
                    </FormElement>
                    <FormElement label={'Комментарий'}>
                        <Textarea value={comment} onChange={(event) => setComment(event.target.value)} />
                    </FormElement>
                </div>
            </div>
            <FormElement>
                <Button type={'submit'} color={'dark'} style={{marginRight: '10px'}}>Забронировать</Button>
                <Button variant={'outline'} color={'red'} onClick={handleReset}>Очистить</Button>
            </FormElement>
        </form>
    );
};
export default BookingForm;