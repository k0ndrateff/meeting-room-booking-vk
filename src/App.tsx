import React, {useState} from 'react';
import './styles/App.css';
import { Icon44LogoVk } from "@vkontakte/icons";
import WhenForm from "./components/WhenForm";
import WhereForm from "./components/WhereForm";
import FormElement from "./components/FormElement";
import {Button, Flex, Textarea, useToast} from "@chakra-ui/react";
import {useMinMaxDate} from "./hooks/useMinMaxDate";

const App:React.FC = () => {
    const [date, setDate] = useState<Date | null>(null);
    const [startTime, setStartTime] = useState<string>('');
    const [endTime, setEndTime] = useState<string>('');
    const [tower, setTower] = useState<string>('A');
    const [level, setLevel] = useState<number>(3);
    const [meetingRoom, setMeetingRoom] = useState<number>(1);
    const [comment, setComment] = useState<string>('');

    const {isDateValid} = useMinMaxDate();
    const toast = useToast();

    const validateForm = (): boolean => {
        if ((startTime >= endTime) || !(startTime && endTime)) {
            return false;
        }
        return isDateValid(date as Date);
    };

    // Отправка формы
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (validateForm()) {
            toast({
                title: 'Переговорка забронирована!',
                description: `Ждем вас в переговорке №${meetingRoom} на ${level} этаже башни ${tower === 'A' ? 'А' : 'Б'}.`,
                status: 'success',
                duration: 6000,
                isClosable: true
            });
            console.log(JSON.stringify({
                date: date,
                startTime: startTime,
                endTime: endTime,
                tower: tower,
                level: level,
                meetingRoom: meetingRoom,
                comment: comment
            }));
        }
        else {
            toast({
                title: 'Забронировать не удалось :(',
                description: `Вероятно, вы неправильно указали время встречи.`,
                status: 'error',
                duration: 4000,
                isClosable: true
            });
        }
    };

    // Очистка формы
    const handleClear = () => {
      setStartTime('');
      setEndTime('');
      setLevel(3);
      setMeetingRoom(1);
      setComment('');
    };

    return (
        <div className={'main-box'}>
            <main className={'inside-box'}>
                <div className={'inside-box-header box-element'}>
                  <h1>Забронировать переговорку</h1>
                  <Icon44LogoVk width={55} height={55} color={'#0077ff'} />
                </div>
                <form onSubmit={(event) => handleSubmit(event)}>
                  <section className={'box-element'}>
                      <WhenForm setDate={setDate}
                                setStartTime={setStartTime}
                                startTime={startTime}
                                setEndTime={setEndTime}
                                endTime={endTime}
                      />
                  </section>
                  <section className={'box-element'}>
                      <WhereForm setTower={setTower}
                                 setLevel={setLevel}
                                 level={level}
                                 setMeetingRoom={setMeetingRoom}
                                 meetingRoom={meetingRoom}
                      />
                  </section>
                  <section className={'box-element'}>
                      <h2 style={{marginBottom: '10px'}}>Сущность</h2>
                      <FormElement label={'Комментарий'}>
                          <Textarea placeholder='Напишите о целях встречи' onChange={(event) => setComment(event.target.value)} />
                      </FormElement>
                      <Flex flexDirection={'row'} justifyContent={'space-between'}>
                          <Button type={'reset'} colorScheme={'red'} variant={'outline'} onClick={handleClear}>
                              Очистить
                          </Button>
                          <Button type={'submit'} bg={'#0077ff'} color={'#ffffff'} _hover={{backgroundColor: '#00eaff'}}>
                              Забронировать
                          </Button>
                      </Flex>
                  </section>
                </form>
            </main>
        </div>
    );
}

export default App;
