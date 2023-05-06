import React, {useEffect} from "react";
import '../styles/Form.css';
import {Flex, FormControl, FormLabel, Input} from "@chakra-ui/react";
import FormElement from "./FormElement";

const WhenForm:React.FC = () => {
    // Установка минимальных и максимальных значений даты
    const dateNow = new Date();
    const minDate = dateNow.toISOString().substring(0,10);
    dateNow.setDate(dateNow.getDate() + 7);
    const maxDate = dateNow.toISOString().substring(0, 10);


    return (
        <>
            <h2>Время</h2>
            <Flex flexDirection={'column'} mt={3}>
                <FormElement label={'Дата'}>
                    <Input id={'date-picker'} defaultValue={minDate} type={'date'} min={minDate} max={maxDate} />
                    {/*TODO: В Safari не работает min и max, нужен полифилл*/}
                </FormElement>
                <FormElement>
                    <Flex flexDirection={'row'} alignItems={'center'}>
                        <FormControl mr={5}>
                            <FormLabel>Начало</FormLabel>
                            <Input type={'time'} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Завершение</FormLabel>
                            <Input type={'time'} />
                        </FormControl>
                    </Flex>
                </FormElement>
            </Flex>
        </>
    );
};
export default WhenForm;