import styled from "styled-components"
import {Link} from "react-router-dom"

const Wrapper = styled.div`
    flex:4;

`
const Container=styled.div`
display:flex;  
flex-direction:column;
display: flex;
align-items: center;
justify-content:center;
margin-right:200px;
`
const Button=styled.button`
margin-top: 30px;
padding: 10px 14px;
border: none;
border-radius: 10px;
background-color: darkblue;
color: white;
font-weight: 600;
cursor: pointer;
`
const UnderWork = () => {
  return (
      <Wrapper>
          <Container>
              <h2>Working on this feature!!</h2>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <Button>Home page</Button>
                </Link>
          </Container>
    </Wrapper>
  )
}

export default UnderWork
