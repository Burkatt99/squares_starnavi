import React from "react";
import SquareRows from "../square_row/square_row";
import { v4 as uuidv4 } from "uuid";

const SquareColumns = ({ numberColumns }) => {
    const getNumOfRow = (numbers) => {
        let content = [];
        for (let i = 0; i < numbers; i++) {
            content.push(<SquareRows key={uuidv4()} />);
        }
        return content;
    };
    return <tr>{getNumOfRow(numberColumns)}</tr>;
};

export default SquareColumns;
