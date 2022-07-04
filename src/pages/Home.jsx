import styled from "styled-components"
import FeaturedInfo from "../components/FeaturedInfo"


const Container = styled.div`
flex:4;
`
const Home = () => {
  return (
      <Container>
          <FeaturedInfo/>
    </Container>
  )
}

export default Home