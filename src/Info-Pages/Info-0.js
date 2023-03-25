import React from "react";
import "./InfoPages.css";
import { useState } from "react";
import { Button, Checkbox, Text, Spinner, Box } from "@chakra-ui/react";
import { getNumberOfVoters } from "../API/Voter";

export default function Welcome() {
  const [checked, setChecked] = useState(false);
  const [disabledButton, setDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChangeCheckbox() {
    if (checked) {
      setChecked(false);
      setDisabled(true);
    } else {
      setChecked(true);

      setDisabled(false);
    }
  }

  const assignARandomRepository = () => {
    setIsSubmitting(true);
    document
      .querySelector("#submit-button")
      .setAttribute("disabled", isSubmitting);

    const rndInt = Math.floor(Math.random() * 4) + 1;

    let count;
    getNumberOfVoters().then((res) => {
      count = res;
    });

    if (rndInt === 1) {
      if (count < 30) {
        window.location.href = "https://e-voting-study-1.netlify.app/info-1";
      } else {
        window.location.href = "https://e-voting-study-2.netlify.app/info-1";
      }
    }
    if (rndInt === 2) {
      window.location.href = "https://e-voting-study-2.netlify.app/info-1";
    }
    if (rndInt === 3) {
      window.location.href = "https://e-voting-study-3.netlify.app/info-1";
    }
    if (rndInt === 4) {
      window.location.href = "https://e-voting-study-4.netlify.app/info-1";
    }
  };

  return (
    <div className="container-info-pages">
      <Box className="inner-box-info padding-top-info-page" maxW={"35rem"}>
        <h1 className="h1-info-pages">Welcome to our study!</h1>
        <Text>
          Before you start testing our voting system and fill out a survey, we
          would like to ask for your consent. You can find our data protection
          statement here.{" "}
        </Text>
        <h3 className="title-margin-top">Purpose of this study</h3>
        <Text>
          This study seeks to investigate the user experience and 
          trust in an online voting system aimed for general elections.
        </Text>
        <h3 className="title-margin-top">Description of research</h3>
        <Text>
          Before entering the voting system, you will be asked to download an
          instruction paper for the voting system. After entering the system,
          you be asked to test the voting system by following the instruction
          paper. This will be followed by a questionnaire, which you will get
          redirected to in the end of the voting system. When you have completed
          the questionnaire, you will be redirected to Prolific.
        </Text>
        <h3 className="title-margin-top">Subject Participation</h3>
        <Text>
          We estimate that X participants will enroll in this study all through
          the platform Prolific. Participants must have fluent level of English,
          and they must own a laptop. Your participation will involve one visit,
          approximately 40 minutes in length.
        </Text>
        <h3 className="title-margin-top">Potential Risks and Discomforts</h3>
        <Text>In this study there are no known risks</Text>
        <h3 className="title-margin-top">Confidentiality</h3>
        <Text>
          Your responses are completely anonymous. No personal identifying
          information or IP addresses will be collected. Quantitative results
          will be shared with X. Once the data has been fully analyzed it will
          be destroyed.{" "}
        </Text>
        <h3 className="title-margin-top">Confidentiality</h3>
        <Text>
          Your responses are completely anonymous. No personal identifying
          information or IP addresses will be collected. Quantitative results
          will be shared with X. Once the data has been fully analyzed it will
          be destroyed.{" "}
        </Text>

        <h3 className="title-margin-top">Authorization</h3>
        <Text>
          I authorize the use of my records, any observations, and findings
          found during this study for education, publication and/or
          presentation.
        </Text>
        <h3 className="title-margin-top">Compensation</h3>
        <Text>
          Each participant will receive $ at the conclusion of the study.
        </Text>
        <h3 className="title-margin-top">Voluntary Participation</h3>
        <Text>
          Your decision to participate in this study is complete voluntary. If
          you decide to not participate in this study, it will not affect the
          care, services, or benefits to which you are entitled.
        </Text>
        <h3 className="title-margin-top">Withdrawal from the Study</h3>
        <Text>
          If you decide to participate in this study, you may withdraw from your
          participation at any time without penalty.
        </Text>

        <Checkbox
          className="check-box check-box-red"
          id="checkBox-vote-info"
          isChecked={checked}
          onChange={handleChangeCheckbox}
        >
          I agree.
        </Checkbox>
        <Button
          onClick={() => assignARandomRepository()}
          className="red-btn"
          disabled={disabledButton}
          id="submit-button"
        >
          {isSubmitting && <Spinner size="sm" mr={"1rem"} />}
          Start
        </Button>
      </Box>
    </div>
  );
}
