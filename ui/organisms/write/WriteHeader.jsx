import React from 'react';

import Header from '@atoms/layout/Header';
import Button from '@atoms/Button';

const WriteHeader = () => (
    <Header>
        <Button 
            onClick={() => null}
            label='save draft'
        />
    </Header>
);

export default WriteHeader