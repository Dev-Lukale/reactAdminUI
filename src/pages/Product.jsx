import styled from "styled-components"
import Chart from "../components/Chart"
import { productData } from "../dummyData"
import { Publish } from "@mui/icons-material"
import { Link } from "react-router-dom"

const Wrapper=styled.div`
flex: 4;
padding: 20px;
`
const Title=styled.h1``
const TitleContainer=styled.div`
display: flex;
align-items: center;
justify-content: space-between; 
padding: 20px;  
`
const AddButton = styled.button`
width: 80px;
border: none;
padding: 5px;
background-color: teal;
color: white;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
`
const Top = styled.div`
display: flex;
`
const TopLeft = styled.div`  flex: 1;`
const TopRight = styled.div`  
padding: 20px;
margin: 20px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
flex: 1;`

const InfoImg = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
margin-right: 20px;
`
const InfoTop = styled.div`
display: flex;
align-items: center;
`
const ProductName = styled.span`  font-weight: 600;`
const InfoBottom = styled.div`  margin-top: 10px;`
const InfoItem = styled.div`
width: 150px;
display: flex;
justify-content: space-between;
`
const InfoValue = styled.span`  font-weight: 300;`
const Bottom = styled.div`
padding: 20px;
margin: 20px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const Form=styled.form`
display: flex;
justify-content: space-between;   
`
const FormLeft=styled.div` 
display: flex;
flex-direction: column;
`
const Label = styled.label`
margin-bottom: 10px;
color: gray;
`
const Input=styled.input`
margin-bottom: 10px;
border: none;
padding: 5px;
border-bottom: 1px solid gray;   
`
const Select = styled.select`
margin-bottom: 10px;
`
const Option = styled.option``
const UploadImg = styled.img`
width: 100px;
height: 100px;
border-radius: 10px;
object-fit: cover;
margin-right: 20px;
`
const FormRight=styled.div`    
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductUpload = styled.div`
display: flex;
align-items: center;
`
const ProductButton=styled.button`
border: none;
padding: 5px;
border-radius: 5px;
background-color: darkblue;
color:white;
font-weight: 600;
cursor: pointer;    
`
const Span=styled.span``
const Product = () => {
  return (
      <Wrapper>
          <TitleContainer>
              <Title>Product</Title>
              <Link to="/newproduct" style={{textDecoration:"none",color:"inherit"}}>
                  <AddButton >Create</AddButton>
              </Link>
          </TitleContainer> 
          <Top>
              <TopLeft>
                  <Chart data={productData} dataKey="Sales" title="Sales Performance" />
              </TopLeft>
              <TopRight>
                  <InfoTop>
                      <InfoImg src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="product Image" />
                      <ProductName>Apple Airpods</ProductName>
                  </InfoTop>
                  <InfoBottom>
                      <InfoItem>
                          <Span>id:</Span>
                          <InfoValue>123</InfoValue>
                      </InfoItem>
                      <InfoItem>
                          <Span>sales:</Span>
                          <InfoValue>5123</InfoValue>
                      </InfoItem>
                      <InfoItem>
                          <Span>active:</Span>
                          <InfoValue>yes</InfoValue>
                      </InfoItem>
                      <InfoItem>
                          <Span>in stock:</Span>
                          <InfoValue>yes</InfoValue>
                      </InfoItem>
                  </InfoBottom>
              </TopRight>
          </Top>
          <Bottom>
              <Form>
                  <FormLeft>
                      <Label>Product Name</Label>
                      <Input type="text" placeholder="Apple AirPod" />
                      <Label>In Stock</Label>
                      <Select name="inStock" id="idStock">
                          <Option value="yes">Yes</Option>
                          <Option value="no">No</Option>
                      </Select>
                      <Label>Active</Label>
                      <Select name="active" id="active">
                          <Option value="yes">Yes</Option>
                          <Option value="no">No</Option>
                      </Select>
                  </FormLeft>
                  <FormRight>
                      <ProductUpload>
                          <UploadImg src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="UploadImg" /> 
                          <Label for="file">
                              <Publish style={{cursor:"pointer"}}/>
                          </Label>
                          <Input type="file" id="file" style={{ display: "none" }} />
                      </ProductUpload>
                      <ProductButton>Update</ProductButton>
                  </FormRight>
              </Form>
          </Bottom>
          
    </Wrapper>
  )
}

export default Product