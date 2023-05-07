import React from "react";
import '../styles/Form.css';
import {Flex, FormControl, FormLabel, Input} from "@chakra-ui/react";
import FormElement from "./FormElement";
import {useMinMaxDate} from "../hooks/useMinMaxDate";

type WhenFormProps = {
    setDate:(date: Date | null) => void;
    startTime: string | null;
    setStartTime:(time: string) => void;
    endTime: string | null;
    setEndTime:(time: string) => void;
};

const WhenForm:React.FC<WhenFormProps> = ({setDate, setStartTime, setEndTime, startTime, endTime}) => {
    const {getMinDateString, getMaxDateString} = useMinMaxDate();

    return (
        <>
            <h2>Время</h2>
            <Flex flexDirection={'column'} mt={3}>
                <FormElement label={'Дата'}>
                    <Input id={'date-picker'}
                           defaultValue={getMinDateString()}
                           type={'date'}
                           min={getMinDateString()}
                           max={getMaxDateString()}
                           onChange={(event) => setDate(event.target.valueAsDate)}
                    />
                </FormElement>
                <FormElement>
                    <Flex flexDirection={'row'} alignItems={'center'}>
                        <FormControl mr={5}>
                            <FormLabel>Начало</FormLabel>
                            <Input type={'time'}
                                   value={startTime as string}
                                   onChange={(event) => setStartTime(event.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Завершение</FormLabel>
                            <Input type={'time'}
                                   value={endTime as string}
                                   onChange={(event) => setEndTime(event.target.value)}
                            />
                        </FormControl>
                    </Flex>
                </FormElement>
            </Flex>
        </>
    );
};
export default WhenForm;