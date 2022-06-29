import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import "./input_variants.styles.jsx";
import { VariantsBox } from "./input_variants.styles.jsx";
import SquaresBox from "../squares_box/squares_box.jsx";
import { v4 as uuidv4 } from "uuid";
import LoadingSpinner from "../spinner/spinner.jsx";
import { clearResult } from "../../redux/actions/dataAction.js";

const ChooseBox = ({ isLoading }) => {
    const variants = useSelector((state) => state.variants);
    const [level, setLevel] = useState("");
    const [show, setShow] = useState(false);
    const [size, setSize] = useState();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setLevel(event.target.value);
    };
    const showBox = () => {
        const field = variants.find((el) => el.name === level).field;
        setSize(field);
        setShow(true);
        dispatch(clearResult());
    };

    return isLoading ? (
        <LoadingSpinner />
    ) : (
        <>
            <VariantsBox>
                <FormControl sx={{ minWidth: 250 }}>
                    <InputLabel id="demo-simple-select-label">
                        Box Level
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={level}
                        label="Box Level"
                        onChange={handleChange}
                    >
                        {variants.map((el) => {
                            return (
                                <MenuItem value={el.name} key={uuidv4()}>
                                    {el.name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    sx={{ minWidth: 100 }}
                    onClick={showBox}
                >
                    Start
                </Button>
            </VariantsBox>
            {show && <SquaresBox field={size} />}
        </>
    );
};

export default ChooseBox;
