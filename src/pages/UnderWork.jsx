import styled from "styled-components"

const Wrapper = styled.div`
    flex:4;
    display: flex;
    align-items: center;
    justify-content:center;
`
const Container=styled.div`
display:flex;  
flex-direction:column;
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
              <Button>Home page</Button>
          </Container>
    </Wrapper>
  )
}

export default UnderWork