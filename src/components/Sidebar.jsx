import styled from "styled-components";

import {
    LineStyle, TrendingUp, Timeline, PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from "@mui/icons-material"
import { Link } from "react-router-dom";

const Container = styled.div`
    flex:1;
    height:calc(100vh - 50px);
    background-color:rgb(251,251,255);
    position:sticky;
    top:50px;
`
const Wrapper = styled.div`
padding:20px;
color:#555;
`

const SidebarMenu = styled.div`
margin-bottom:10px;
`
const SidebarTitle = styled.h3`
font-size:30px;
color:rgb(187,186,186);
`
const SidebarList = styled.ul`
list-style:none;
padding:5px;
`
const SidebarListItem = styled.li`
padding:5px;
cursor:pointer;
display:flex;
border-radius:5px;

&:active{
    background-color:rgb(228,228,250)
}
&:hover{
   background-color:rgb(228,228,250) 
}

`
const Sidebar = () => {
    return (
        <Container>
            <Wrapper>
                <SidebarMenu>
                    <SidebarTitle>Dashboard</SidebarTitle>
                    <SidebarList>
                        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                            <SidebarListItem>
                                <LineStyle style={{ marginRight: "10px", fontSize: "20px" }} />Home
                            </SidebarListItem>
                        </Link>
                        <Link to="/analytics" style={{ textDecoration: "none",color:"inherit" }}>
                            <SidebarListItem>
                                <Timeline style={{ marginRight: "10px", fontSize: "20px" }} />Analytics
                            </SidebarListItem>
                        </Link>
                        <Link to="/sales" style={{ textDecoration: "none", color: "inherit" }}>
                            <SidebarListItem>
                                <TrendingUp style={{ marginRight: "10px", fontSize: "20px" }} />Sales
                            </SidebarListItem>
                        </Link>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Quick Menu</SidebarTitle>
                    <SidebarList>
                        <Link to="/users" style={{ textDecoration: "none", color: "inherit" }}>
                            <SidebarListItem>
                                <PermIdentity style={{ marginRight: "10px", fontSize: "20px" }} />Users
                            </SidebarListItem>
                        </Link>
                        <Link to="/products" style={{ textDecoration: "none", color: "inherit" }}>
                            <SidebarListItem>
                                <Storefront style={{ marginRight: "10px", fontSize: "20px" }} />Products
                            </SidebarListItem>
                        </Link>
                        <Link to="/transactions" style={{ textDecoration: "none", color: "inherit" }}>
                            <SidebarListItem >
                                <AttachMoney style={{ marginRight: "10px", fontSize: "20px" }} />Transactions
                            </SidebarListItem>
                        </Link>
                        <Link to="/reports" style={{ textDecoration: "none", color: "inherit" }}>
                            <SidebarListItem>
                                <BarChart style={{ marginRight: "10px", fontSize: "20px" }} />Reports
                            </SidebarListItem>
                        </Link>

                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Notifications</SidebarTitle>
                    <SidebarList>
                        <Link to="/mail" style={{ textDecoration: "none", color: "inherit" }}>
                            <SidebarListItem>
                                <MailOutline style={{ marginRight: "10px", fontSize: "20px" }} />Mail
                            </SidebarListItem>
                        </Link>
                        <Link to="/feedback" style={{ textDecoration: "none", color: "inherit" }}>
                            <SidebarListItem>
                                <DynamicFeed style={{ marginRight: "10px", fontSize: "20px" }} />Feedback
                            </SidebarListItem>
                        </Link>
                        <Link to="/messages" style={{ textDecoration: "none", color: "inherit" }}>
                            <SidebarListItem>
                                <ChatBubbleOutline style={{ marginRight: "10px", fontSize: "20px" }} />Messages
                            </SidebarListItem>
                        </Link>

                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Staff</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem>
                            <WorkOutline style={{ marginRight: "10px", fontSize: "20px" }} />Manage
                        </SidebarListItem>
                        <SidebarListItem>
                            <Timeline style={{ marginRight: "10px", fontSize: "20px" }} />Analytics
                        </SidebarListItem>
                        <SidebarListItem>
                            <Report style={{ marginRight: "10px", fontSize: "20px" }} />Reports
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
            </Wrapper>
        </Container>
    )
}

export default Sidebar