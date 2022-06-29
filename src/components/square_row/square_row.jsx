import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveResult } from "../../redux/actions/dataAction";
import { Square } from "./squares_row.styles";

const SquareRows = () => {
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();

    const fixActive = (event) => {
        const colNum = event.target.cellIndex + 1;
        const rowNum = event.target.parentElement.rowIndex + 1;
        setActive(!active);
        if (!active) {
            dispatch(
                saveResult({
                    col: colNum,
                    row: rowNum
                })
            );
        }
    };

    return <Square onMouseOver={fixActive} active={active} />;
};

export default SquareRows;
