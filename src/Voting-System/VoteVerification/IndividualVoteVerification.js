import { Box, Grid, Text, Link, Spinner } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import "./VoteVerification.css";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import React, { useEffect, useState } from "react";
import getCurrentUser from "../../API/Voter";
import { loginVoter } from "../../API/Voter";
import "../../Info-Pages/InfoPages.css";
import { slideOutMobile } from "../../utils";

export default function IndividualVoteVerification() {
  const navigate = useNavigate();
  const [voter, setVoter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    loginVoter(id, id).then(() => {
      console.log("login");
      let user = getCurrentUser();
      setVoter(user);
      console.log(user);
    });
  }, [id]);
  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-wide">
          <h1 className="blue-text centered-text">Vote Verification</h1>
          {voter == null ? (
            <Spinner />
          ) : (
            <div>
              {voter.attributes.Vote === "" ? (
                <Text className="red-text centered-text">
                  The election results are not available yet.
                  <br /> Please try again later.
                </Text>
              ) : (
                <div>
                  <Box className="info-box">
                    <Text className="info-text">
                      <span className="bold-text">NB!</span> If your vote is not
                      saved correctly, please follow the guidelines in the
                      instruction paper.
                    </Text>
                  </Box>
                  <Text mt={"1.5rem"}>Below you can see your saved vote:</Text>

                  <Box className="individual-vote-display">
                    {voter.attributes.BBVote}
                  </Box>

                  <Box marginRight={"2rem"}>
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
                      There, you can also verify your vote by using the
                      following code:
                    </Text>
                    <Text className="verification-code-individual-page">
                    ThisIsADemo4You-Fl41vGbD
                    </Text>
                  </Box>
                  <Button
                    className="blue-btn"
                    width={"100%"}
                    onClick={() => navigate("/info-3")}
                  >
                    Finish
                  </Button>
                  {/* <Grid className="info-banner" id="info-banner">
                    <Link
                      id="slideout-trigger"
                      className="slideout-trigger"
                      onClick={() => slideOutMobile()}
                    >{`>`}</Link>
                    <div className="info-banner-content">
                      <div id="banner-text">
                        <Text className="bold-text white-text">
                          You have finished the second part of the study!
                        </Text>

                        <Text className="white-text" mt={"1rem"}>
                          To complete the study, please fill out a survey about
                          your experience of the online voting system.{" "}
                        </Text>
                        <Button
                          id="survey-button-horizontal"
                          marginTop={"1rem"}
                          width="8rem"
                          className="red-btn"
                          padding={"1rem"}
                          onClick={() =>
                            (window.location.href =
                              "https://www.survey-xact.dk/LinkCollector?key=SDWDX5F9S51N")
                          }
                        >
                          Go to survey
                        </Button>
                      </div>
                      <div id="survey-button-vertical-box">
                        <Button
                          width={0}
                          id="survey-button-vertical"
                          className="red-btn"
                          transform={"rotate(90deg)"}
                          marginBottom={0}
                          marginRight={0}
                          visibility="hidden"
                          position={"absolute"}
                          left={"-19.99"}
                          onClick={() =>
                            (window.location.href =
                              "https://www.survey-xact.dk/LinkCollector?key=SDWDX5F9S51N")
                          }
                        >
                          Go to survey
                        </Button>
                      </div>
                    </div>
                  </Grid> */}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
