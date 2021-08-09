import React, { useState } from "react";
import signupStyle from "../../styles/signup.module.scss";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Alert, AlertTitle } from "@material-ui/lab";
import Link from "next/link"
import Router from "next/router"

const SIGN_UP = gql`
  mutation SIGN_UP($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

function Signupform() {
  const [userInfo, setuserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signup, { loading, error }] = useMutation(SIGN_UP, {
    variables: { ...userInfo },
    onCompleted: (data) => {
      if (data) {
        setSuccess(true),
          setuserInfo({
            name: "",
            email: "",
            password: "",
          });
      }
    },
  });
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await signup();
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className={signupStyle.root}>
      <div className={signupStyle.warper}>
        <div className={signupStyle.imgwarp}>
          <img src="https://ouch-cdn2.icons8.com/755sAlfXcDfSpIrHxiGq5aoalxx4F_h4twSGiQUyBRQ/rs:fit:784:1346/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMC9i/MWQ0YjNhYS1jZGQ5/LTRlNDItODBhYy02/YTAzNDE3NGUxNTIu/cG5n.png" alt="" />
        </div>
        <div className={signupStyle.formwarp}>
          <h1>
            Sign up,
          </h1>
          <form action="" type="form" onSubmit={handleSubmit} >
            <input
              type="text"
              name="name"
              placeholder="name"
              value={userInfo.name}
              
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="email"
              value={userInfo.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="password"
              placeholder="password"
              value={userInfo.password}
              onChange={handleChange}
            />
            <span>6+ Charactors</span>
            <button type="submit" disabled={loading}>Submit</button>
            {success && (
              <Alert severity="success">
                Congrate , Come join us. <Link href="/signin">CLICK</Link>
              </Alert>
             
            )}
            {error && (
              <Alert severity="error">{error.graphQLErrors[0].message}</Alert>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signupform;
