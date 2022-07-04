import styled from "styled-components";
import {NotificationsNone,Language,Settings } from "@mui/icons-material"

const Container = styled.div`
width: 100%;
height: 50px;
position:sticky;
top:0px;
z-index:999;
`
const Wrapper = styled.div`
height: 100%;
padding: 0px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`
const TopLeft = styled.div`

`
const Logo = styled.span`
font-weight: bold;
font-size: 30px;
color:darkblue;
cursor: pointer;
`
const TopRight = styled.div`
display: flex;
align-items:center;
justify-content:end;

`
const TopRightIcon = styled.div`
position:relative;
cursor: pointer;
margin-left:20px;
color:#555;
`
const Badge = styled.span`
position: absolute;
width:15px;
height:15px;
top:-5px;
right:0px;
background-color: red;
color: white;
border-radius:50%;
display: flex;
align-items: center;
justify-content: center;
font-size:10px;
`
const Avatar = styled.img`
width:30px;
height:30px;
border-radius:50%;
background-size: cover;

`

const Topbar = () => {
  return (
      <Container>
          <Wrapper>
              <TopLeft>
                  <Logo>Admin Panel</Logo>
              </TopLeft>
              <TopRight>
                  <TopRightIcon>
                      <NotificationsNone />
                      <Badge>2</Badge>
                  </TopRightIcon>
                  <TopRightIcon>
                      <Language/>
                  </TopRightIcon>
                  <TopRightIcon>
                      <Settings/>
                  </TopRightIcon>
                    <TopRightIcon>
                      <Avatar src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                  </TopRightIcon>
              </TopRight>
        </Wrapper>
    </Container>
  )
}

export default Topbar