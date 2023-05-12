import React, {Reducer, useReducer} from 'react';
import './styles/App.css';
import { Icon44LogoVk } from "@vkontakte/icons";
import WhenForm from "./components/WhenForm";
import WhereForm from "./components/WhereForm";
import {useToast} from "@chakra-ui/react";
import {useMinMaxDate} from "./hooks/useMinMaxDate";
import CommentForm from "./components/CommentForm";

export type FormState = {
    date: Date;
    startTime: string;
    endTime: string;
    tower: string;
    level: number;
    meetingRoom: number;
    comment: string;
};

export type FormAction = {
  type: "setDate" | "setStartTime" | "setEndTime" | "setTower" | "setLevel" | "setMeetingRoom" | "setComment" | "clear";
  payloadDate?: Date;
  payloadString?: string;
  payloadNumber?: number;
};

const App:React.FC = () => {
    const {getMinDate, isDateValid} = useMinMaxDate();
    const toast = useToast();

    const formInitialState: FormState = {
        date: getMinDate(),
        startTime: '',
        endTime: '',
        tower: 'A',
        level: 3,
        meetingRoom: 1,
        comment: ''
    };
    const formReducer: Reducer<any, any> = (state: FormState, action: FormAction) => {
        switch (action.type) {
            case "setDate":
                return {...state, date: action.payloadDate}
            case "setStartTime":
                return {...state, startTime: action.payloadString}
            case "setEndTime":
                return {...state, endTime: action.payloadString}
            case "setTower":
                return {...state, tower: action.payloadString}
            case "setLevel":
                return {...state, level: action.payloadNumber}
            case "setMeetingRoom":
                return {...state, meetingRoom: action.payloadNumber}
            case "setComment":
                return {...state, comment: action.payloadString}
            case "clear":
                return formInitialState;
            default:
                return state;
        }
    };

    const [formState, formDispatch] = useReducer(formReducer, formInitialState);

    const validateForm = (): boolean => {
        if ((formState.startTime >= formState.endTime) || !(formState.startTime && formState.endTime)) {
            return false;
        }
        return isDateValid(formState.date);
    };

    // Отправка формы
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (validateForm()) {
            toast({
                title: 'Переговорка забронирована!',
                description: `Ждем вас в переговорке №${formState.meetingRoom} на ${formState.level} этаже башни ${formState.tower === 'A' ? 'А' : 'Б'}.`,
                status: 'success',
                duration: 6000,
                isClosable: true
            });
            console.log(JSON.stringify(formState));
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

    return (
        <div className={'main-box'}>
            <main className={'inside-box'}>
                <div className={'inside-box-header box-element'}>
                  <h1>Забронировать переговорку</h1>
                  <Icon44LogoVk width={55} height={55} color={'#0077ff'} />
                </div>
                <form onSubmit={(event) => handleSubmit(event)}>
                  <section className={'box-element'}>
                      <WhenForm formData={formState} formDispatch={formDispatch} />
                  </section>
                  <section className={'box-element'}>
                      <WhereForm formData={formState} formDispatch={formDispatch} />
                  </section>
                  <section className={'box-element'}>
                      <CommentForm formDispatch={formDispatch} />
                  </section>
                </form>
            </main>
        </div>
    );
}

export default App;
