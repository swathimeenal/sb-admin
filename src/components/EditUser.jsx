import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate,useParams} from 'react-router-dom';

function EditUser({user,setUser}) {

  let params = useParams()// this will return the object

  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [Batch,setBatch] = useState("")
  let [mobile,setMobile] = useState("")

  let navigate = useNavigate()// this will return a function

  const findIndex = (id)=>{
    for(let i = 0; i<user.length;i++)
    {
      if(id === user[i].id)
        return i
    }
  }



  const handleEdit = ()=>{
    let id = Number(params.id)
    let index = findIndex(id)
    let newArray = [...user]// deep copy Achieve Immutability
    newArray.splice(index,1,{
      id,
      name,
      email,
      Batch,
      mobile
    })
    setUser(newArray)
    navigate('/dashboard')

  }

  const getUserData = ()=>{
    let id = Number(params.id)
    let index = findIndex(id)
    
    setName(user[index].name)
    setEmail(user[index].email)
    setMobile(user[index].mobile)
    setBatch(user[index].Batch)
  }
  useEffect(()=>{
     getUserData()
  },[])
  return (
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
   
</div>
      <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Batch"  value={Batch} onChange={(e)=>setBatch(e.target.value)} />
      </Form.Group>
     
      <Button variant="primary" onClick={()=>handleEdit()}>
        Submit
      </Button>
    </Form>
    </div>
    </div>
    </div>
  )
  
}

export default EditUser