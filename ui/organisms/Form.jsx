import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import FormField from '@molecules/FormField';
import ErrorMessage from '@atoms/ErrorMessage';
import Submit from '@atoms/Submit';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const Form = ({ fields, initState, submitAction, errorMessage, submitText }) => {
    const [state, setState] = useState(initState);

    return (
        <StyledForm onSubmit={submitAction}>
            <ErrorMessage>{errorMessage}</ErrorMessage>
            {fields.map((f) => {
                const name = f.type;
                const key = f.key;

                return (
                    <FormField
                        key={key}
                        label={f.label}
                        type={name}
                        value={state[key]}
                        setValue={(value) => {
                            const newState = state;
                            newState[key] = value;
                            setState({ ...newState });
                        }}
                    />
                )
            })}

            <Submit
                label={submitText}
                style={{ height: '40px', margin: '15ps 0px' }}
            />
        </StyledForm>
    )
};

Form.propTypes = {
    /** Fields for form */
    fields: propTypes.array.isRequired,
    /** Initial state of form */
    initState: propTypes.object,
    /** Function to fire on form submit */
    submitAction: propTypes.func,
    /** Text output for errors */
    errorMessage: propTypes.string,
    /** Text on submit button */
    submitText: propTypes.string.isRequired
};

export default Form;
