import React from "react";
import '../styles/Form.css';
import {Flex, FormControl, FormLabel, Input} from "@chakra-ui/react";
import FormElement from "./FormElement";
import {useMinMaxDate} from "../hooks/useMinMaxDate";
import {FormAction, FormState} from "../App";

type WhenFormProps = {
    formData: FormState,
    formDispatch: (action: FormAction) => void;
};

const WhenForm:React.FC<WhenFormProps> = ({formData, formDispatch}) => {
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
                           onChange={(event) => formDispatch({type: "setDate", payloadDate: event.target.valueAsDate as Date})}
                    />
                </FormElement>
                <FormElement>
                    <Flex flexDirection={'row'} alignItems={'center'}>
                        <FormControl mr={5}>
                            <FormLabel>Начало</FormLabel>
                            <Input type={'time'}
                                   value={formData.startTime as string}
                                   onChange={(event) => formDispatch({type: "setStartTime", payloadString: event.target.value})}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Завершение</FormLabel>
                            <Input type={'time'}
                                   value={formData.endTime as string}
                                   onChange={(event) => formDispatch({type: "setEndTime", payloadString: event.target.value})}
                            />
                        </FormControl>
                    </Flex>
                </FormElement>
            </Flex>
        </>
    );
};
export default WhenForm;