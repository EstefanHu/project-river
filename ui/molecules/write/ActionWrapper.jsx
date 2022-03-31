import React from 'react';
import styled from 'styled-components';
import { FaPray, FaPenFancy } from 'react-icons/fa';
import { GiBookCover } from 'react-icons/gi';

import ActionButton from '@atoms/write/ActionButton';

const StyledActionWrapper = styled.span`
    display: flex;
    justify-content: space-between;
`;

const TYPES = [{
    label: 'Devotion',
    icon: <FaPray />
}, {
    label: 'Poem',
    icon: <FaPenFancy />
}, {
    label: 'Story',
    icon: <GiBookCover />
}];

const ActionWrapper = () => (
    <StyledActionWrapper>
        {TYPES.map(({ label, icon }) => (
            <ActionButton
                key={label}
                action={() =>{
                    window.open(`/write/${label.toLowerCase()}`);
                    window.opener = null;
                }}
                label={label}
                icon={icon}
            />
        ))}
    </StyledActionWrapper>
);

export default ActionWrapper;
