import React, {useState} from "react";
import '../styles/Form.css';
import {
    Flex,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from "@chakra-ui/react";
import FormElement from "./FormElement";
import TowerCard from "./TowerCard";
import {FormAction, FormState} from "../App";

type WhereFormProps = {
    formData: FormState,
    formDispatch: (action: FormAction) => void;
};

const WhereForm:React.FC<WhereFormProps> = ({formData, formDispatch}) => {
    const [selectedTower, setSelectedTower] = useState('A');

    const toggleTower = (tower: string) => {
      setSelectedTower(tower);
      formDispatch({type: "setTower", payloadString: tower});
    };

    return (
        <>
            <h2>Пространство</h2>
            <Flex flexDirection={'column'} mt={3}>
                <FormElement label={'Офис'}>
                    <Flex flexDirection={'row'} justifyContent={'space-evenly'}>
                        <TowerCard tower={'A'} select={toggleTower} isSelected={selectedTower === 'A'} mr={4}>
                            Башня А
                        </TowerCard>
                        <TowerCard tower={'B'} select={toggleTower} isSelected={selectedTower === 'B'}>
                            Башня Б
                        </TowerCard>
                    </Flex>
                </FormElement>
                <FormElement label={'Этаж'}>
                    <NumberInput defaultValue={3}
                                 min={3}
                                 max={27}
                                 value={formData.level}
                                 onChange={(valueAsString, valueAsNumber) => formDispatch({type: "setLevel", payloadNumber: valueAsNumber})}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormElement>
                <FormElement label={'Номер переговорки'}>
                    <NumberInput defaultValue={1}
                                 min={1}
                                 max={10}
                                 value={formData.meetingRoom}
                                 onChange={(valueAsString, valueAsNumber) => formDispatch({type: "setMeetingRoom", payloadNumber: valueAsNumber})}
                    >
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