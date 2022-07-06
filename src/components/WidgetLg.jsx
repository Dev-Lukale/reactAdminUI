import styled from "styled-components"

const Wrapper = styled.div`
flex:2;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.80);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.80);
padding:20px;
`
const Title = styled.h3`
font-size:22px;
font-weight: 600;

`
const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`

const TableRow = styled.tr`

`
const TableCell = styled.td`

`
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  
`
const TableHeader = styled.th`
  text-align: left;
`
const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`
const Name = styled.span`
    font-weight: 600;
    margin-left:10px;
    `

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  background-color: ${(props) => {
    if (props.status === "approved") {
      return "e5faf2"
    } else if (props.status === "pending") {
      return "#ebf1fe"
    } else {
      return "#fff0f1"
    }
  }};
color: ${(props) => {
    if (props.status === "approved") {
      return "#3bb077"
    } else if (props.status === "pending") {
      return "#2a7ade"
    } else {
      return "#d95087"
    }
  }};
  
`

const WidgetLg = () => {
  return (
    <Wrapper>
      <Title>Latest Transactions</Title>
      <Table>
        <TableRow>
          <TableHeader>Customer</TableHeader>
          <TableHeader>Date</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableRow>
        <TableRow>
          <TableCell>
            <UserInfo>
              <Image src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              <Name>Tyson Lukale</Name>
            </UserInfo>
          </TableCell>
          <TableCell>
            2 Jun 2021
          </TableCell>
          <TableCell>$123.00</TableCell>
          <TableCell><Button status="approved">Approved</Button></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <UserInfo>
              <Image src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"></Image><Name>Tyson Lukale</Name></UserInfo>
          </TableCell>
          <TableCell>
            2 Jun 2021
          </TableCell>
          <TableCell>$123.00</TableCell>
          <TableCell><Button status="pending">Pending</Button></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <UserInfo>
              <Image src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"></Image><Name>Tyson Lukale</Name></UserInfo>
          </TableCell>
          <TableCell>
            2 Jun 2021
          </TableCell>
          <TableCell>$123.00</TableCell>
          <TableCell><Button status="declined">Declined</Button></TableCell>
        </TableRow>
      </Table>
    </Wrapper>
  )
}

export default WidgetLg