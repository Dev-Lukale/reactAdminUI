import styled from "styled-components"
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";


const Wrapper=styled.div`
    flex:4;
    padding:20px;
`
const TitleContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Title=styled.h1`
    
`
const Button=styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`
const Container=styled.div`
display: flex;
margin-top: 20px;
`
const Show=styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const Update=styled.div`
flex: 2;
padding: 20px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
margin-left: 20px;
`
const ShowTop=styled.div`
  display: flex;
  align-items: center;   
`
const ShowImg=styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`
const ShowTopTitle=styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
const ShowUsername=styled.span`
  font-weight: 600;
`
const ShowUserTitle = styled.span`
font-weight: 300;
`
const ShowBottom=styled.div`
margin-top: 20px;
`
const ShowTitle=styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`
const ShowInfo=styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
    color: #444;
`
const ShowInfoTitle = styled.div`
    margin-left: 10px;
`
const UpdateTitle = styled.div`
    font-size: 24px;
    font-weight: 600;`
const UpdateForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;`
const UpdateLeft=styled.div``
const UpdateItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;`
const UpdateItemLabel = styled.label`
    margin-bottom: 5px;
    font-size: 14px;
`
const Input = styled.input`
    border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid gray;
  &:focus{
    outline:none;
  }
`
const UpdateRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const UpdateUpload = styled.div`
    display: flex;
    align-items: center;
`
const UpdateImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`
const UpdateImgLabel = styled.label`


`
const UpdateImgInput=styled.input``
const UpdateButton = styled.button`
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
`
const User = () => {
  return (
      <Wrapper>
          <TitleContainer>
              <Title>Edit User</Title>
              <Link to="/newUser">
                  <Button>Create</Button>
              </Link>
          </TitleContainer>
          <Container>
              <Show>
                  <ShowTop>
                      <ShowImg src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></ShowImg>
                      <ShowTopTitle>
                          <ShowUsername>Tyson lukale</ShowUsername>
                          <ShowUserTitle>Sostware Engineer</ShowUserTitle>
                      </ShowTopTitle>
                  </ShowTop>
                  <ShowBottom>
                      <ShowTitle>Account Details</ShowTitle>
                      <ShowInfo>
                          <PermIdentity />
                          <ShowInfoTitle>lukaleTyson</ShowInfoTitle>
                      </ShowInfo>
                      <ShowInfo>
                          <CalendarToday />
                          <ShowInfoTitle>7/6/2022</ShowInfoTitle>
                      </ShowInfo>
                      <ShowInfo>
                          <PhoneAndroid/>
                          <ShowInfoTitle>(+254) 792200650</ShowInfoTitle>
                      </ShowInfo>
                      <ShowInfo>
                          <MailOutline />
                          <ShowInfoTitle>lukaletyson99@gmail.com</ShowInfoTitle>
                      </ShowInfo>
                      <ShowInfo>
                          <LocationSearching />
                          <ShowInfoTitle>Kilifi | Kenya</ShowInfoTitle>
                      </ShowInfo>
                      
                  </ShowBottom>
              </Show>
              <Update>
                  <UpdateTitle>Edit</UpdateTitle>
                  <UpdateForm>
                      <UpdateLeft>
                          <UpdateItem>
                              <UpdateItemLabel>Username</UpdateItemLabel>
                              <Input type="text"></Input>
                          </UpdateItem>
                          <UpdateItem>
                              <UpdateItemLabel>Email</UpdateItemLabel>
                              <Input type="email"></Input>
                          </UpdateItem>
                          <UpdateItem>
                              <UpdateItemLabel>Phone</UpdateItemLabel>
                              <Input type="phone"></Input>
                          </UpdateItem>
                          <UpdateItem>
                              <UpdateItemLabel>Address</UpdateItemLabel>
                              <Input type="text"></Input>
                          </UpdateItem>
                      </UpdateLeft>
                      <UpdateRight> 
                          <UpdateUpload>
                              <UpdateImg src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                              <UpdateImgLabel htmlFor="file"><Publish style={{cursor:"pointer"}}/></UpdateImgLabel>
                              <UpdateImgInput type="file" id="file" style={{display:"none"}}/>
                          </UpdateUpload>
                          <UpdateButton>Update</UpdateButton>
                      </UpdateRight>
                  </UpdateForm>
              </Update>
          </Container>
          
    </Wrapper>
  )
}

export default User