import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap'; 
import {  } from 'react-bootstrap';    


const Login = () => {
  return (
    <div>
      <Grid>
        <Row>
          <Col sm={6} smOffset={3}>
            <h1>
              <Glyphicon glyph="log-in"></Glyphicon>
              Login
            </h1>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Login; 
// 
// 
// 
//     <div class="col-sm-6 col-sm-offset-3">
// 
//         <h1><span class="fa fa-sign-in"></span> Login</h1>
// 
//         <% if (message.length) { %>
//         <div class="alert alert-danger"><%= message %></div>
//         <% } %>
// 
//         <!-- LOGIN FORM -->
//         <form action="/login" method="post">
//             <div class="form-group">
//                 <label>Email</label>
//                 <input type="text" class="form-control" name="email">
//             </div>
//             <div class="form-group">
//                 <label>Password</label>
//                 <input type="password" class="form-control" name="password">
//             </div>
// 
//             <button type="submit" class="btn btn-warning btn-lg">Login</button>
//         </form>
// 
//         <hr>
//         <div>
//             Or login with any of the following services:<br />
//             <a style="margin-right:15px" href="/auth/facebook"><img src="/assets/fb-logo.png" /></a>
//             <a style="margin-left:15px;margin-right:15px" href="/auth/google"><img style="width:29px" src="/assets/google-logo.png" /></a>
//             <a style="margin-left:15px" href="/auth/twitter"><img style="width:48px" src="/assets/twitter-logo.png" /></a>
//         </div>
//         <hr>
// 
//         <p>Need to sign up for an account? <a href="/signup">Signup</a></p>
//         <p><a href="/">home</a></p>
// 
//     </div>
// 
// <% include foot.ejs%>