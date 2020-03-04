import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import jwt_decode from 'jwt-decode';

const ExternalApi = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getIdTokenClaims } = useAuth0();
  const { getTokenSilently } = useAuth0();

  useEffect(() =>{
    const initToken= async () => {
      const res = await getIdTokenClaims()
      const acc = await getTokenSilently()
      let decode = btoa(acc)
      console.log(decode)
      let token = res.__raw
      console.log(token)
      localStorage.setItem("jwt", token)

    }
    initToken()
  }, [])

  const callApi = async () => {
    
    try {
      
      const response = await fetch("/api/external", {
        headers: {
          Authorization: `Bearer 123`
        },
  
      });

      const responseData = await response.json().then(
        console.log(response)
      )

      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    </>
  );
};

export default ExternalApi;