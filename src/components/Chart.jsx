import styled from "styled-components"
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const Wrapper = styled.div`
margin:20px;
padding:20px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.80);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.80);
`
const Title = styled.h3`
margin-bottom:20px;
`

const Chart = ({ title, data, dataKey, grid }) => {
  return (
      <Wrapper>
          <Title>{title}</Title>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd" />
                <Line type="monotone" dataKey={dataKey}  stroke="#5550bd" />
                  <Tooltip />
                  {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
              </LineChart>
          </ResponsiveContainer>
    </Wrapper>
  )
}

export default Chart