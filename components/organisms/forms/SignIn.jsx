import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { useGlobalState } from '../../../state';

import H1 from '../../atoms/H1';
import FormField from '../../molecules/FormField';
import Button from '../../atoms/Button';

const StyledSignIn = styled.form`
    display: flex;
    flex-direction: column;
`;

const SignIn = () => {
    const { signIn } = useGlobalState();
    const [state, setState] = useState({ email: '', password: '' });

    return (
        <StyledSignIn>
            <H1>Sign in</H1>

            {FIELDS.map((f) => {
                const name = f.type;

                return (
                    <FormField
                        key={name}
                        label={f.label}
                        type={name}
                        value={state[name]}
                        setValue={(value) => {
                            const newState = state;
                            newState[name] = value;
                            setState(newState);
                        }}
                    />
                )
            })}

            <Button
                action={signIn}
                label='SIGN IN'
            />
        </StyledSignIn>
    );
};

SignIn.propTypes = {
    /** Func to toggle to register */
    setHasAccount: propTypes.func.isRequired
};

const FIELDS = [
    {
        label: 'email address',
        type: 'email',
    },
    {
        label: 'password',
        type: 'password'
    }
]

export default SignIn;
