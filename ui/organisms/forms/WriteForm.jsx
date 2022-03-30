import React, { useState, useEffect } from 'react';
import { useGlobalState } from '@state';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import ErrorMessage from '@atoms/ErrorMessage';
import Form from '@organisms/Form';

const StyledWriteForm = styled.div`
    background-color: white;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.boxShadow};
`;

const WriteForm = () => {
    const {
        state: {
            devotion: { devotionErrorMessage },
            poem: { poemErrorMessage },
            story: { storyErrorMessage }
        }
    } = useGlobalState();
    const router = useRouter();
    const { view } = router.query;
    const [fields, setFields] = useState(null);

    useEffect(() => {
        console.log('rendering')
        console.log(view)
        switch (view) {
            case 'poem':
                return setFields(POEM_FIELDS);
        }
        return () => setFields(null);
    }, [view]);


    return (
        <StyledWriteForm>
            <Form
                fields={fields}
                initState={{}}
                submitAction={null}
                errorMessage={devotionErrorMessage || poemErrorMessage || storyErrorMessage}
                submitText='submit'
            />
        </StyledWriteForm>
    )
};

const POEM_FIELDS = [
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

export default WriteForm;
