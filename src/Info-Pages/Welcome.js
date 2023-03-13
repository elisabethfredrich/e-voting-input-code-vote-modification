import React from "react";
import "./InfoPages.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Checkbox, Text, Spinner } from "@chakra-ui/react";

export default function Welcome() {
  const [checked, setChecked] = useState(false);
  const [disabledButton, setDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

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
    console.log(rndInt);
    if (rndInt === 1) {
      window.location.href = "https://e-voting-study-1.netlify.app/info-1";
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
      <div className="inner-box-info padding-top-info-page">
        <h1 className="h1-info-pages">Welcome to our study!</h1>
        <Text>Here follows some legal info...</Text>
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
      </div>
    </div>
  );
}
