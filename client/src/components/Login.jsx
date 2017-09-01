import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap'; 
import { Glyphicon, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';    

const fblogo = {
  width: '29px', 
  height: '29px', 
  marginRight: '15px'
};
const googlogo = {
  width: '29px', 
  height: '29px', 
  marginLeft: '15px', 
  marginRight: '15px'
};
const twitlogo = {
  width: '48px', 
  height: '48px', 
  marginLeft: '15px'
};

const Login = () => {
  return (
    <div>
      <Grid>
        <Row>
          <Col sm={6} smOffset={3}>
            <h1>
              <span>
                <Glyphicon glyph="log-in" bsSize="small"></Glyphicon> Login
              </span>
            </h1>
            {/* some conditional rendering logic:
            if (message.length) { %>
            <div class="alert alert-danger"><%= message %></div>
            <% } */}
            <Form>
              <FormGroup controlId="formBasicText">
                <ControlLabel>
                  Email
                </ControlLabel>
                <FormControl
                  type="text"
                  value=""
                  onChange=""
                />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup controlId="formBasicText">
                <ControlLabel>
                  Password
                </ControlLabel>
                <FormControl
                  type="text"
                  value=""
                  onChange=""
                />
                <FormControl.Feedback />
              </FormGroup>            
              <Button bsSize="large" bsStyle="warning">Login</Button>
            </Form>
            <div>
              <br/>
              Or login with any of the following services: 
              <br/><br/>
              <a href="/auth/facebook">
                <img style={fblogo} src="/assets/fb-logo.png"/>
              </a>
              <a href="/auth/google">
                <img style={googlogo} src="/assets/google-logo.png"/>
              </a>
              <a href="/auth/twitter">
                <img style={twitlogo} src="/assets/twitter-logo.png"/>
              </a>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Login; 


//         <p>Need to sign up for an account? <a href="/signup">Signup</a></p>
//         <p><a href="/">home</a></p>
// 
//     </div>
// 
// <% include foot.ejs%>