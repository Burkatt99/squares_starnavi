import React from "react";
import SquareColumns from "../square_column/square_column.jsx";
import "../square_row/squares_row.styles.jsx";
import { v4 as uuidv4 } from "uuid";
import { BoxTable, SquaresContainer } from "./squares_box.styles.jsx";
import HoverList from "../hover_list/hover_list.jsx";

const SquaresBox = ({ field }) => {
    const getNumOfColumn = (numbers) => {
        let content = [];
        for (let i = 0; i < numbers; i++) {
            content.push(
                <SquareColumns numberColumns={field} key={uuidv4()} />
            );
        }
        return content;
    };

    return (
        <SquaresContainer>
            <BoxTable>
                <tbody>{getNumOfColumn(field)}</tbody>
            </BoxTable>
            <HoverList />
        </SquaresContainer>
    );
};

export default SquaresBox;
