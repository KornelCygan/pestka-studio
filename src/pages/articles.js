import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import ArticlesPreview from '../components/ArticlePreview/ArticlePreview';
import PageInfo from '../components/PageInfo/PageInfo';

const ArticlesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
`;

const pageData = {
    title: 'articles',
    paragraph: '“When I’m working on a problem, I never think about beauty. But when I’ve finished, if the solution is not beautiful I know it’s wrong.” – Buckminster Fuller'
} 

const ArticlesPage = ({ data }) => {

    const {allMdx: { nodes }} = data;

    return (
        <>
            <PageInfo title={pageData.title} paragraph={pageData.paragraph}/>
            <ArticlesWrapper>
                {nodes.map(({excerpt, frontmatter: {title, slug, author, featuredImage}}) => (
                    <ArticlesPreview key={slug} title={title} excerpt={excerpt} image={featuredImage.childImageSharp.fluid} slug={slug} />
                ))}
            </ArticlesWrapper>
            
        </>
    );
}

export const query = graphql`
{
    allMdx {
        nodes {
        frontmatter {
            title
            slug
            author
            featuredImage {
                childImageSharp {
                  fluid(maxWidth: 700, maxHeight: 500) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
        }
        excerpt(pruneLength: 50)
        }
    }
}
`;

export default ArticlesPage