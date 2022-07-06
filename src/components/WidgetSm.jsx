import styled from "styled-components"
import { Visibility } from "@mui/icons-material"

const Wrapper = styled.div`
flex:1;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.80);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.80);
padding:20px;
margin-right:20px;
`
const Title = styled.h3`
    font-size: 22px;
    font-weight: 600;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`
const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
`
const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`
const UserInfo = styled.div`
    display: flex;
    flex-direction: column;`
const Name = styled.span`
    font-weight: 600;`
const UserTitle = styled.span`
    font-weight: 300;
`
const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 5px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
`

const WidgetSm = () => {
    return (
        <Wrapper>
            <Title>New Users</Title>
            <List>
                <ListItem>
                    <Image src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"></Image>
                    <UserInfo>
                        <Name>Tyson Lukale</Name>
                        <UserTitle>Software Engineer</UserTitle>
                    </UserInfo>
                    <Button>
                        <Visibility style={{ fontSize: "16px", marginRight: "5px" }} /> Display
                    </Button>
                </ListItem>
                <ListItem>
                    <Image src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"></Image>
                    <UserInfo>
                        <Name>Tyson Lukale</Name>
                        <UserTitle>Software Engineer</UserTitle>
                    </UserInfo>
                    <Button>
                        <Visibility style={{ fontSize: "16px", marginRight: "5px" }} /> Display
                    </Button>
                </ListItem>
                <ListItem>
                    <Image src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"></Image>
                    <UserInfo>
                        <Name>Tyson Lukale</Name>
                        <UserTitle>Software Engineer</UserTitle>
                    </UserInfo>
                    <Button>
                        <Visibility style={{ fontSize: "16px", marginRight: "5px" }} /> Display
                    </Button>
                </ListItem>

            </List>
        </Wrapper>
    )
}

export default WidgetSm