import React from 'react';
import Profiles from '../components/Profile';
import { Card, Button, TextInput, InputBase } from '@mantine/core';

export default function Profile() {
  return (
    <section style={{ marginLeft: '22vw',marginRight: '4vw' }}>
      <br /><br />
      <Profiles />
       <br /><br />
       <Card shadow="xl" p="xl" radius="xl" withBorder>
        <h3>Edit Profile</h3>
        <br />
        <InputBase label="Level of Study" component="select" mt="md">
        <option value="react">Degree</option>
        <option value="react">Diploma</option>
        <option value="svelte">Masters</option>
      </InputBase>
        <TextInput
        label="Level of study"
        placeholder="Level of study"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
        <TextInput
        label="Address"
        placeholder="Address"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
        <TextInput
        label="Phone Number"
        placeholder="Phone Number"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      <Button color="orange" fullWidth mt="md" radius="md" >
      Update
    </Button>
    </Card>
    <br /><br />
    </section>
  );
}
