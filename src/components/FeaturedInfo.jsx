import styled from "styled-components"
import {ArrowDownward,ArrowUpward} from "@mui/icons-material"

const Featured = styled.div`
width:100%;
display:flex;
justify-content:space-between;
`
const FeaturedItem = styled.div`
flex:1;
margin:0px 20px;
padding:30px;
border-radius:10px;
cursor: pointer;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const FeaturedTitle = styled.span`
font-size:20px;
`

const MoneyContainer = styled.div`
margin:10px 0px;
display:flex;
align-items:center;
`
const Money = styled.span`
font-size:30px;
font-weight:bold; 
`
const Rate = styled.span`
display:flex;
align-items:center;
margin-left:12px;
color: ${(props) => props.type==="positive"?"green":"red"};

`
const Sub = styled.span`

`
const FeaturedInfo = () => {
  return (
      <Featured>
          <FeaturedItem>
              <FeaturedTitle>Revenue</FeaturedTitle>
              <MoneyContainer>
                  <Money>$2,300</Money>
                  <Rate>-11.4<ArrowDownward/></Rate>
              </MoneyContainer>
              <Sub>Compared to last month</Sub>
          </FeaturedItem>
          <FeaturedItem>
              <FeaturedTitle>Sales</FeaturedTitle>
              <MoneyContainer>
                  <Money>$2,260</Money>
                  <Rate>-1.4<ArrowDownward/></Rate>
              </MoneyContainer>
              <Sub>Compared to last month</Sub>
          </FeaturedItem>
          <FeaturedItem>
              <FeaturedTitle>Cost</FeaturedTitle>
              <MoneyContainer>
                  <Money>$200</Money>
                  <Rate type="positive">+11.4<ArrowUpward/></Rate>
              </MoneyContainer>
              <Sub>Compared to last month</Sub>
          </FeaturedItem>
    </Featured>
  )
}

export default FeaturedInfo