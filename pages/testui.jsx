import React from "react";


export default function testui() {
  return (
    <div>
      <VerrySadIcon></VerrySadIcon>
      <SadIcon></SadIcon>
      <NormalIcon></NormalIcon>
      <GoodIcon></GoodIcon>
      <VeryGoodIcon/>
    </div>
  )
}

function VerrySadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 21.036c0-7.95 11.49-7.95 11.49 0"
      ></path>
    </svg>

  );
}

function SadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 21.036c1.596-4.6 9.894-4.76 11.49 0"
      ></path>
    </svg>
  );
}

function NormalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 21.064h11.49"
      ></path>
    </svg>
  );
}

function GoodIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 17.526c1.596 4.6 9.894 4.76 11.49 0"
      ></path>
    </svg>
  );
}

function VeryGoodIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 15.073c0 7.95 11.49 7.95 11.49 0"
      ></path>
    </svg>
  );
}

