import React from "react";
import {FormLabel} from "@chakra-ui/react";

type FormElementProps = {
    label?: string;
    children: React.ReactNode;
};

const FormElement:React.FC<FormElementProps> = ({label, children}) => {
    return (
        <div style={{marginBottom: '10px'}}>
            <FormLabel>{label}</FormLabel>
            {children}
        </div>
    );
};
export default FormElement;