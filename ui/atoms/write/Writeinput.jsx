import React from 'react';
import styled from 'styled-components';

const StyledWriteInput = styled.input`

`;

const WriteInput = ({ value, onChange }) => <StyledWriteInput value={value} onChange={onChange} />;

export default WriteInput;
