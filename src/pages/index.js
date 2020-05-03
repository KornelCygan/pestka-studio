import React from "react"

import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

const IndexPage = () => (
  <>
    
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StyledDiv/>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
    </div>
  </>
)

export default IndexPage
