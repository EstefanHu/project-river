import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { useGlobalState } from '../../../state';

import FormField from '@components/molecules/FormField';
import H1 from '@components/atoms/H1';
import Submit from '@components/atoms/Submit';
import Note from '@components/atoms/Note';
import ErrorMessage from '@components/atoms/ErrorMessage';

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
        firstName: 'Justin',
        lastName: 'Hu',
        email: 'jh@gmail.com',
        password: 'poiupoiu',
        confirmPassword: 'poiupoiu'
    });

    const handleRegister = async (e) => {
        e.preventDefault()
        await register(state);
    }

    return (
        <StyledRegister onSubmit={handleRegister}>
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

            <Submit
                label='SIGN UP'
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
        key: 'email',
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
