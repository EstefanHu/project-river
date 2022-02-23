import React from 'react';
import styled from 'styled-components';

import Form from '@organisms/Form';

const StyledDevotionTemplate = styled.section`
    width: 100%;
    padding: 20px 30px;
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
        key: 'body',
        label: 'body',
        type: 'textarea'
    }
]

export default DevotionTemplate;
