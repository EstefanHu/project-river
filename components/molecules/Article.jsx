import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Paragraph from '@atoms/Paragraph';
import Title from '@atoms/Title';
import Image from '@atoms/Image';

const StyledArticle = styled.article`
    margin-top: 500px;
    width: 800px;
    border-radius: 10px;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
`;

const Article = ({ composition }) => (
    <StyledArticle>
        {composition.map((c) => {
            console.log(c)
            switch (c.type) {
                case 'title':
                    return <Title content={c.content} />;
                case 'paragraph':
                    return <Paragraph content={c.content} />;
                case 'image':
                    return <Image content={c.content} />;
                default:
                    return;
            }
        })}
    </StyledArticle>
);

Article.propTypes = {
    /** Articles make up */
    composition: PropTypes.array.isRequired
};

export default Article;
