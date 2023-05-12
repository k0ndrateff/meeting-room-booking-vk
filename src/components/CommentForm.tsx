import React from "react";
import FormElement from "./FormElement";
import {Button, Flex, Textarea} from "@chakra-ui/react";
import {FormAction} from "../App";

type CommentFormProps = {
    formDispatch: (action: FormAction) => void;
};

const CommentForm:React.FC<CommentFormProps> = ({formDispatch}) => {
    return (
        <>
            <h2 style={{marginBottom: '10px'}}>Сущность</h2>
            <FormElement label={'Комментарий'}>
                <Textarea placeholder='Напишите о целях встречи'
                          onChange={(event) => formDispatch({type: "setComment", payloadString: event.target.value})}
                />
            </FormElement>
            <Flex flexDirection={'row'} justifyContent={'space-between'}>
                <Button type={'reset'} colorScheme={'red'} variant={'outline'} onClick={() => formDispatch({type: "clear"})}>
                    Очистить
                </Button>
                <Button type={'submit'} bg={'#0077ff'} color={'#ffffff'} _hover={{backgroundColor: '#00eaff'}}>
                    Забронировать
                </Button>
            </Flex>
        </>
    );
};
export default CommentForm;