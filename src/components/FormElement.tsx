import React from "react";
import '../styles/FormElement.css';

type FormElementProps = {
    label?: string | null | undefined;
    children: React.ReactNode;
};

const FormElement:React.FC<FormElementProps> = ({children, label}) => {
    return (
        <>
            {label && <h2>{label}</h2>}
            <div className={'form-element'}>
                {children}
            </div>
        </>
    );
};
export default FormElement;