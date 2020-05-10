import React from 'react';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby';

export const query = graphql`
    query MyQuery($slug: String!) {
        mdx(frontmatter: {slug: {eq: $slug}}) {
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
            body
            }
    }
`; 

const PostLayout = ({ data }) => {
    return (
        <div>
            <h1>{data.mdx.frontmatter.title}</h1>
            <p>{data.mdx.frontmatter.author}</p>
            <Image fluid={data.mdx.frontmatter.featuredImage.childImageSharp.fluid} alt={`architekt katowice ${data.mdx.frontmatter.title}`}/>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
    )
}

export default PostLayout;