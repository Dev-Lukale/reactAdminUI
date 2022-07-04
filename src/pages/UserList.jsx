import styled from "styled-components"
import {DeleteOutline} from "@mui/icons-material"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { userRows } from "../dummyData"
import { useState } from "react";
const User = styled.div`
  display: flex;
  align-items: center;
`
const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`
const Container = styled.div`
flex:4;
`

const Edit = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`



const UserList = () => {

const [data, setData] = useState(userRows);

const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
};
    

    const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <User className="userListUser">
            <Image className="userListImg" src={params.row.avatar} alt="user image" />
            {params.row.username}
          </User>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <Edit className="userListEdit">Edit</Edit>
            </Link>
            <DeleteOutline
              style={{color:"red",cursor:"pointer"}}
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
      <Container>UserList
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </Container>
  )
}

export default UserList





