import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImg = styled(Image)``;

const Img = ({ url }) => <StyledImg src={url} alt='' layout='fill' />;

Img.propTypes = {
    /** Path to image source */
    url: PropTypes.string.isRequired
};

export default Img;
