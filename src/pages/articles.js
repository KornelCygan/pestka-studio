import React from "react"
import { graphql } from "gatsby"


const ArticlesPage = ({ data }) => (
    <>
        <h1>Articles Page</h1>
        {data.allMdx.nodes.map(item => (
            <>
                <h2>{item.frontmatter.title}</h2>
                <p>{item.frontmatter.slug}</p>
                <p>{item.frontmatter.author}</p>
            </>
        ))}
    </>
);

export const query = graphql`
{
    allMdx {
        nodes {
        frontmatter {
            title
            slug
            author
        }
        excerpt(pruneLength: 50)
        }
    }
}
`;

export default ArticlesPage