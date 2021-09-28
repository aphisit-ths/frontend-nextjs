import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import navstyle from "../../styles/nav.module.scss";
import { AuthContext } from "../../appstate/AuthProvider";

export default function Navbar() {
  const { user ,signout } = useContext(AuthContext);
  return (
    <div className={navstyle.nav}>
      <div className={navstyle.logo}>
        <Link href="/">
          <a>CAFé </a>
        </Link>
      </div>
      <div className={navstyle.tags}>
      <Link href="/products">
          <a>Products</a>
        </Link>
        {user && (
          <>
          <Link href="/cart">
            <a>Carts</a>
          </Link>
          </>
        )}
        
      </div>
      <div className={navstyle.login}>
        {user && <>
        <Link href="/manageproducts"><a>Hello, {user.name}</a></Link>
          
        <a onClick={signout}>Sign Ou</a>
        </>}
        {!user && (
          <>
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
            <div className={navstyle.signup}>
              <Link href="/signup">
                <a>Sign Up</a>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
