import React from 'react';

import Header from '@atoms/layout/Header';
import LandingLinks from '@molecules/landing/LandingLinks';
import AuthModal from '@organisms/AuthModal';

const LandingHeader = () => (
    <Header>
        <LandingLinks />
        <AuthModal />
    </Header>
);

export default LandingHeader;
