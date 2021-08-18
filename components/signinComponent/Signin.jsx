import React, { useState, useContext } from "react";
import signinStyle from "../../styles/signin.module.scss";
import Link from "next/link";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Alert, AlertTitle } from "@material-ui/lab";
import Cookies from "js-cookie";
import Router from "next/router";
import Image from "next/image"
import { AuthContext } from "../../appstate/AuthProvider";
const SIGN_IN = gql`
  mutation SIGN_IN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        email
        name
        products {
          id
        }
        carts {
          id
          product {
            desc
            imgUrl
            price
          }
        }
      }
      jwt
    }
  }
`

function Signin() {
  const [userInfo, setuserInfo] = useState({
    email: "",
    password: "",
  });
  const { setAuthUser } = useContext(AuthContext);

  const [login, { loading, error, data }] = useMutation(SIGN_IN, {
    variables: { ...userInfo },
    onCompleted: (data) => {
      if (data) {
        setAuthUser(data.login.user);
        Cookies.set("jwt", data.login.jwt);
        setSuccess(true),
          setuserInfo({
            email: "",
            password: "",
          });
        Router.push("/products");
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
      await login();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={signinStyle.root}>
      <div className={signinStyle.warper}>
        <div className={signinStyle.imgwarp}>
          <Image
            src="https://ouch-cdn2.icons8.com/EN_pjM5vsufniT-C7q2cKLuG9njBfdlz1daJRHcdVIA/rs:fit:784:941/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjg2/LzMwN2UwY2M3LTlj/MTItNDA4Zi05YWFi/LTVkZDdhNDVlZTE0/MS5wbmc.png"
            alt=""
            width={1500}
            height={2000}
          />
        </div>
        <div className={signinStyle.formwarp}>
          <h1>Welcome ,</h1>
          <form action="" type="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="email"
              required={true}
              value={userInfo.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="password"
              placeholder="password"
              required={true}
              value={userInfo.password}
              onChange={handleChange}
            />
            <Link href="/signup">
              <a>
                Dont have an account yet? <span> Sign Up</span>
              </a>
            </Link>
            <button type="submit">Submit</button>
            
            {error && (
              <Alert severity="error">{error.graphQLErrors[0].message}</Alert>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
