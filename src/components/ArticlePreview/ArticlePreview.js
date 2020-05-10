import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

const PreviewWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 340px;
    background-color: hsl(0, 0%, 95%);
    background-image: url(${({background}) => background});
    background-size: cover;
`;

const PreviewInfoLabel = styled.div`
    position: absolute;
    left: 0;
    bottom: 35px;
    width: 80%;
    min-height: 40px;
    background-color: green;
    color: #fff;
    padding: 5px 15px;

    h2,
    p {
        margin: 5px;
    }
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ArticlePreview = ({title, excerpt, image}) => (
    <PreviewWrapper>
        <StyledImage fluid={image} />
        <PreviewInfoLabel>
            <h2>{title}</h2>
            <p>{excerpt}</p>
        </PreviewInfoLabel>
    </PreviewWrapper>
)

export default ArticlePreview;