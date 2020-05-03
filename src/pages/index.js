import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Button } from "../components/Button/button";

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

const ImageWrapper = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 35%;
  height: 100vh;
  object-fit: cover;
`;

const IndexPage = ({data}) => (
  <>
    <ContentWrapper>
      <h1>Projekt dla wymagających</h1>
      <p>
        Loremń ipsum dolor sit, amet consectetur adipisicing elit. 
        Rem id eligendi voluptatem doloremque. Porro reiciendis placeat, corrupti odio voluptate eius,
        optio quas quibusdam sunt voluptates repellendus? Aspernatur dolore consectetur ipsam.
      </p>
      <Button>Wyceń projekt</Button>
    </ContentWrapper>
    <ImageWrapper src={data.file.publicURL} />
  </>
)

export const query = graphql`
  {
    file(name: {eq: "hero"}) {
      publicURL
    }
  }
`

export default IndexPage
