
import styled from "styled-components"
import Chart from "../components/Chart"
import FeaturedInfo from "../components/FeaturedInfo"
import { userData } from "../dummyData"
import WidgetSm from "../components/WidgetSm"
import WidgetLg from "../components/WidgetLg"

const Container = styled.div`
flex:4;
`
const HomeWidget = styled.div`
display:flex;
margin:20px;
`
const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <HomeWidget>
        <WidgetSm />
        <WidgetLg />
      </HomeWidget>
    </Container>
  )
}

export default Home