import React from "react";
import { SpinnerContainer, LoadSpinner } from "./spinner.styles";

const LoadingSpinner = () => {
    return (
        <SpinnerContainer>
            <LoadSpinner></LoadSpinner>
        </SpinnerContainer>
    );
};

export default LoadingSpinner;
