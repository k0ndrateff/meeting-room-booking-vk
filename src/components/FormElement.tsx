import React from "react";
import {FormControl, FormLabel} from "@chakra-ui/react";

type FormElementProps = {
    label?: string;
    children: React.ReactNode;
};

const FormElement:React.FC<FormElementProps> = ({label, children}) => {
    return (
        <div style={{marginBottom: '10px'}}>
            <FormControl>
                <FormLabel>{label}</FormLabel>
                {children}
            </FormControl>
        </div>
    );
};
export default FormElement;