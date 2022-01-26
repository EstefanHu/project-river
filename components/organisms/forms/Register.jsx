import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { useGlobalState } from '../../../state';

import FormField from '../../molecules/FormField';
import H1 from '../../atoms/H1';
import Button from '../../atoms/Button';
import Note from '../../atoms/Note';
import ErrorMessage from '../../atoms/ErrorMessage';

const StyledRegister = styled.form`
    display: flex;
    flex-direction: column;
`;

const Register = ({ setHasAccount }) => {
    const {
        state: { auth: { authErrorMessage } },
        register
    } = useGlobalState()

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        confirmPassword: ''
    });

    const handleRegister = async (e) => {
        e.preventDefault()
        const response = await register(state);
        console.log(response);
    }

    return (
        <StyledRegister>
            <H1>Register</H1>
            <ErrorMessage>{authErrorMessage}</ErrorMessage>
            {FIELDS.map((f) => {
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

            <Button
                action={handleRegister}
                label='SIGN IN'
                style={{ height: '40px', margin: '15px 0px' }}
            />

            <Note>
                Already have an account?
                <button
                    type="button"
                    onClick={() => setHasAccount(true)}
                >sign in</button>
            </Note>
        </StyledRegister>
    );
};

Register.propTypes = {
    /** Func to toggle to register */
    setHasAccount: propTypes.func.isRequired
};

const FIELDS = [
    {
        key: 'firstName',
        label: 'first name',
        type: 'text',
    },
    {
        key: 'lastName',
        label: 'last name',
        type: 'text',
    },
    {
        key: 'emailAddress',
        label: 'email address',
        type: 'email'
    },
    {
        key: 'password',
        label: 'password',
        type: 'password'
    },
    {
        key: 'confirmPassword',
        label: 'confirm password',
        type: 'password'
    }
]

export default Register;
