import { Box, Text, Link, Spinner } from "@chakra-ui/react";
import "./VoteVerification.css";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import React, { useEffect, useRef, useState } from "react";
import getCurrentUser from "../../API/Voter";
import { loginVoter } from "../../API/Voter";
import "../../Info-Pages/InfoPages.css";

export default function IndividualVoteVerification() {
  const navigate = useNavigate();
  const [voter, setVoter] = useState();
  const {id} = useParams();

  const isComponentMounted = useRef();

  useEffect(() =>{
    isComponentMounted.current = true;
  return () => {
    loginVoter(id, id).then(
      () =>  {
          let user =  getCurrentUser();
          if(isComponentMounted.current){
          setVoter(user);}
          
        });
    isComponentMounted.current = false;
    console.log(voter);
  };
  },[]);

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-wide">
          <h1 className="blue-text centered-text">Vote Verification</h1>
          {!isComponentMounted.current ? <Spinner/>:<div>
          {voter.attributes.Vote===""?<Text className="red-text centered-text">The election results are not available yet.<br/> Please try again later.</Text>
:<div>
          <Box className="info-box">
            <Text className="info-text">
              <span className="bold-text">NB!</span> If your vote is not saved
              correctly, please follow the guidelines in the instruction paper.
            </Text>
          </Box>
          <Text mt={"1.5rem"}>Below you can see your saved vote:</Text>

          <Box className="individual-vote-display">
              Emma Miller (Party J)
          </Box>
          
          <Box>
            <Text>
              If you wish to see all counted votes, please click{" "}
              <Link
                className="link-bold"
                onClick={() => navigate("/verification")}
              >
                here
              </Link>
              .
            </Text>
            <Text>
              There, you can also verify your vote by using the following code:
            </Text>
          <Text className="verification-code-individual-page">
            bAdJhFVz6aFrJTa-F86I5HTe
          </Text>
          </Box></div>}</div>}

        </div>
      </div>
    </div>
  );
}