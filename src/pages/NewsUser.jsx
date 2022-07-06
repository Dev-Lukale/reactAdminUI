import styled from "styled-components"

const Wrapper=styled.div`
     flex: 4; 
`
const Title = styled.h1``
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;`
const FormItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`
const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);`

const Input = styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  &:focus{
    outline:none;
  }
  `

const UserGender = styled.div`
  margin-top: 15px;
`
const GenderLabel=styled.label`
    margin: 10px;
    font-size: 18px;
    color: #555;
`
const Select = styled.select`
    height: 40px;
    border-radius: 5px;
`
const Option = styled.option``
const Button = styled.button`
    width: 200px;
    border: none;
    background-color: darkblue;
    color: white;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
`
const NewsUser = () => {
  return (
      <Wrapper>
          <Title>Create New User</Title>
          <Form>
              <FormItem>
                  <Label>Username</Label>
                  <Input type="text" placeholder="John Smith"/>
              </FormItem>
              <FormItem>
                  <Label>Email</Label>
                  <Input type="email" placeholder="john@gmail.com" />
              </FormItem>
              <FormItem>
                  <Label>Phone</Label>
                  <Input type="text" placeholder="+254 792200650" />
              </FormItem>
              <FormItem>
                  <Label>Address</Label>
                  <Input type="text" placeholder="Kilifi | Kenya" />
              </FormItem>
              <FormItem>
                  <Label>Gender</Label>
                  <UserGender>
                      <GenderLabel for="male">Male</GenderLabel>
                      <Input type="radio" name="gender" id="male" value="male" />
                      <GenderLabel for="female">Female</GenderLabel>
                      <Input type="radio" name="gender" id="female" value="female" />
                      <GenderLabel for="other">Other</GenderLabel>
                      <Input type="radio" name="gender" id="other" value="other" />
                  </UserGender>   
              </FormItem>
              <FormItem>
                  <Label>Active</Label>
                  <Select name="active" id="active">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                  </Select>
              </FormItem>
              <Button>Create</Button>
          </Form>
    </Wrapper>
  )
}

export default NewsUser