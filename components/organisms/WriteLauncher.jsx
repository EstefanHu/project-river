import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Label from '@atoms/Label';
import Button from '@atoms/Button'

const StyledWriteLauncher = styled.div`
    box-shadow: ${({ theme }) => theme.cardShadow};
    padding: 20px;
    background-color: ${({ theme }) => theme.componentBackground};
    border-radius: 5px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 200px;
`;

const StyledButton = styled(Button)`
    margin-bottom: 20px;
`;

const TYPES = ['devotion', 'poem', 'story'];

const WriteLauncher = () => {
    const router = useRouter();

    return (
        <StyledWriteLauncher>
            <Label text='create new' />
            {TYPES.map((t) => (
                <StyledButton
                    key={t}
                    // style={{ backgroundColor: 'white', marginBottom: '5px' }}
                    onClick={() => router.push(`/write?view=${t}`, undefined, { shallow: true })}
                    label={t}
                />
            ))}
        </StyledWriteLauncher>
    )
};

export default WriteLauncher;
