import React, { useState } from "react";

import { Grid, Form, Input, TextArea, Select, Button, FormGroup } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const questionOptions = [
  { key: "u", text: "User", value: "user" },
  { key: "e", text: "Email", value: "email" },
  { key: "p", text: "Password", value: "password" },
  { key: "f", text: "FAQ", value: "faq" }
];

function NewTicket() {
  const [getCustomerInfo, setGetCustomerInfo] = useState(
    {
      firstName: [],
      lastName: [],
      email: [],
      mainContactNumber: [],
      mainContactNumberExtension: [],
      secondaryContactNumber: []
    },
    {
      manufacturerName: "",
      manufacturerModel: "",
      manufacturerSerial: "",
      systemType: "",
      operatingSystemPassword:
        "" /* Once password is written, it will be rendered as hidden when showing to user */
    }
  );

  return (
    <Grid
      textAlign='center'
      style={{ height: "100vh", width: "80%", margin: "40px auto" }}
      verticalAlign='middle'>
      <Form>
        <div>
          <h1>Submit Ticket</h1>
        </div>
        <Form.Field control={Input} label='Pending' placeholder='Pending number here' />
        {/* <Form.Group widths='equal'> */}
        <Form.Field control={Input} label='Full Name' placeholder='Full name' />
        <Form.Field control={Input} label='Address' placeholder='Adress' />

        <FormGroup>
          <Form.Field control={Input} label='City' placeholder='City' />
          <Form.Field control={Input} label='State' placeholder='State' />
          <Form.Field control={Input} label='Zipcode' placeholder='Zipcode' />
        </FormGroup>

        <FormGroup>
          <Form.Field
            control={Input}
            label='Main Contact Number'
            placeholder='Main Contact Number'
          />
          <Form.Field control={Input} label='Extension' placeholder='Extension' />
          <Form.Field control={Input} label='Secondary Number' placeholder='Secondary Number' />
        </FormGroup>
        <Form.Field control={Input} label='Email' placeholder='Email' />
        <Form.Field
          control={Select}
          label='What questions do you have?'
          options={questionOptions}
        />

        {/* </Form.Group> */}
        <Form.Field
          control={TextArea}
          label='Please tell us what issue you are currently experiencing, be ellaborate.'
          placeholder='Opinion'
        />
        <Form.Field
          control={Button}
          content='Submit'
          label='By submitting you are agreeing that you do have an issue, and not creating spam. Only submit one ticket at a time. We will contact you via email within 24 hrs.'
          color='red'
        />
      </Form>
    </Grid>
  );
}

export default NewTicket;
