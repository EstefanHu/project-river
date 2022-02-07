import React from 'react';
import styled from 'styled-components';

import Form from '@organisms/Form';

const StyledDevotionTemplate = styled.section`
    
`;

const DevotionTemplate = () => {

    return (
        <StyledDevotionTemplate>
            <Form
                fields={FIELDS}
                initState={{}}
                submitAction={null}
                submitText='Submit'
            />
        </StyledDevotionTemplate>
    )
};

const FIELDS = [
    {
        key: 'title',
        label: 'Title',
        type: 'text',
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

export default DevotionTemplate;
