import React from "react";
import { useSelector } from "react-redux";
import { BoxResult, HoverContainer, Result, Title } from "./hover_list.styles";
import { v4 as uuidv4 } from "uuid";

const HoverList = () => {
    const results = useSelector((state) => state.results);

    return (
        <HoverContainer>
            <Title>Hover squares</Title>
            <BoxResult>
                {results.map((el) => {
                    return (
                        <Result key={uuidv4()}>
                            row {el.row} col {el.col}
                        </Result>
                    );
                })}
            </BoxResult>
        </HoverContainer>
    );
};

export default HoverList;
