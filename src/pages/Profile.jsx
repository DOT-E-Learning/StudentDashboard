import React, {useRef}from 'react';
import Profiles from '../components/Profile';
import { Card, Button, TextInput, InputBase } from '@mantine/core';
 import axios from 'axios';
 import { useState } from 'react';
 import { Link , useLocation} from "react-router-dom";

export default function Profile() {
  const location = useLocation()
  console.log("LOCATION", location.pathname.split("/").pop())
  const studentId = location.pathname.split("/").pop()
           
  const inputlevel_of_study = useRef("");
  const inputfield_of_study = useRef("")
  const inputaddress = useRef ("")
  const inputphone_number = useRef ("")

  const handleUpdateStudent = (event) =>{
    event.preventDefault();
    // console.log(inputDesc.current.value, inputTitle.current.value)// setCourseTitle(inputTitle.current.value)
    // setDescription(inputDesc.current.value)
    editCourse()
  }
   const editCourse = async () =>{
    await axios({
      method:"put",
      url:`http://localhost:8000/api/update/${studentId}`,
      headers:{
            "Content-type" : "application/json",
        },
      data : 
        { level_of_study:inputlevel_of_study.current.valueOf, 
          field_of_study:inputfield_of_study.current.valueOf,
        inputaddress:inputaddress.current.valueOf,
     inputphone_number:inputphone_number.current.valueOf, }
    })
    inputlevel_of_study.current.valueOf = ""
    inputfield_of_study.current.valueOf = ""
    inputaddress.current.valueOf = ""
    inputphone_number.current.valueOf = ""
    // setDescription("")
    // setCourseTitle("")
  }






  return (
    
    <section style={{ marginLeft: '19vw',marginRight: '1vw', marginTop: '1vw' }}>
      <Profiles />
       <br />
       <Card shadow="xl" p="xl" radius="xl" withBorder>
        <h3>Edit Profile</h3>
        <br />
        <InputBase ref={inputlevel_of_study} label="Level of Study" component="select" mt="md"
        // onSubmit={handleSubmit}
        onSubmit={handleUpdateStudent}
         >
        <option value="react">Degree</option>
        <option value="react">Diploma</option>
        <option value="svelte">Masters</option>
      </InputBase>
        <TextInput onSubmit={handleUpdateStudent}
        ref={inputfield_of_study}
        label="Field of study"
        placeholder="Field of study"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
        <TextInput onSubmit={handleUpdateStudent}
        ref={inputaddress}
        label="Address"
        placeholder="Address"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
        <TextInput onSubmit={handleUpdateStudent}
        ref={inputphone_number}
        label="Phone Number"
        placeholder="Phone Number"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      <Button color="orange" fullWidth mt="md" radius="md" onSubmit={handleUpdateStudent} >
      Update
    </Button>
    </Card>
    <br /><br />
    </section>
  );
}
