import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components';
import Image from 'gatsby-image';
import { Button } from "../components/Button/button";
import Post from "../components/Post/Post";

const ContentWrapper = styled.div`
  width: 60%;
  height: calc(100vh - 80px);
  display: flex;
  text-align: right;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  h1 {
    font-size: 85px;
    margin: 0;
  }

  p {
    margin: 20px 0 40px;
    width: 40%
  }
`;

const StyledImage = styled(Image)`
  position: absolute !important; /*ugly bomb because of gatsby-image plugin*/
  top: 0;
  right: 0;
  width: 35%;
  height: 100vh;
  object-fit: cover;
`;

const IndexPage = ({data}) => (
  <>
    <ContentWrapper>
      <Post />
      <h1>Projekt dla wymagających</h1>
      <p>
        Loremń ipsum dolor sit, amet consectetur adipisicing elit. 
        Rem id eligendi voluptatem doloremque. Porro reiciendis placeat, corrupti odio voluptate eius,
        optio quas quibusdam sunt voluptates repellendus? Aspernatur dolore consectetur ipsam.
      </p>
      <Button>Wyceń projekt</Button>
    </ContentWrapper>
    <StyledImage fluid={data.file.childImageSharp.fluid}/>
  </>
)

export const query = graphql`
  {
    file(name: {eq: "hero"}) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 100) {
         ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
