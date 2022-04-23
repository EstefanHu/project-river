import React from 'react';
import styled from 'styled-components';

import Label from '@atoms/label';
import WriteInput from '@atoms/write/WriteInput';

const StyledTitleInput = styled.div`

`;

const TitleInput = ({ value, onChange }) => {

    return (
        <StyledTitleInput>
            <Label text='title' />
            <WriteInput
                value={value}
                onChange={onChange}
            />
        </StyledTitleInput>
    )
};

export default TitleInput;
