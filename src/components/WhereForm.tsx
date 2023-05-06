import React, {useState} from "react";
import '../styles/Form.css';
import {
    Box,
    Flex,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from "@chakra-ui/react";
import FormElement from "./FormElement";
import TowerCard from "./TowerCard";

type WhereFormProps = {

};

const WhereForm:React.FC<WhereFormProps> = () => {
    const [selectedTower, setSelectedTower] = useState('A');

    return (
        <>
            <h2>Пространство</h2>
            <Flex flexDirection={'column'} mt={3}>
                <FormElement label={'Офис'}>
                    <Flex flexDirection={'row'} justifyContent={'space-evenly'}>
                        <TowerCard tower={'A'} select={setSelectedTower} isSelected={selectedTower === 'A'} mr={4}>
                            Башня А
                        </TowerCard>
                        <TowerCard tower={'B'} select={setSelectedTower} isSelected={selectedTower === 'B'}>
                            Башня Б
                        </TowerCard>
                    </Flex>
                </FormElement>
                <FormElement label={'Этаж'}>
                    <NumberInput defaultValue={3} min={3} max={27}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormElement>
                <FormElement label={'Номер переговорки'}>
                    <NumberInput defaultValue={1} min={1} max={10}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormElement>
            </Flex>
        </>
    );
};
export default WhereForm;