import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { useGlobalState } from '../../../state';

import H1 from '../../atoms/H1';
import FormField from '../../molecules/FormField';
import Button from '../../atoms/Button';
import Note from '../../atoms/Note';

const StyledSignIn = styled.form`
    display: flex;
    flex-direction: column;
`;

const SignIn = ({ setHasAccount }) => {
    const { signIn } = useGlobalState();
    const [state, setState] = useState({ email: '', password: '' });

    return (
        <StyledSignIn>
            <H1>Sign in</H1>

            {FIELDS.map((f) => {
                const { key, label, type } = f;

                return (
                    <FormField
                        key={key}
                        label={label}
                        type={type}
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
                action={signIn}
                label='SIGN IN'
                style={{ height: '40px', margin: '15px 0px' }}
            />

            <Note>
                Don&#39;t have an account?
                <button
                    type="button"
                    onClick={() => setHasAccount(false)}
                >sign up</button>
            </Note>
        </StyledSignIn>
    );
};

SignIn.propTypes = {
    /** Func to toggle to register */
    setHasAccount: propTypes.func.isRequired
};

const FIELDS = [
    {
        key: 'email',
        label: 'email address',
        type: 'email',
    },
    {
        key: 'password',
        label: 'password',
        type: 'password'
    }
]

export default SignIn;
