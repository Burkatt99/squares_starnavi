import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setData } from "../../../redux/actions/dataAction";
import ChooseBox from "../../input_variants/input_variants";

const MainPage = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        const result = await axios
            .get("http://demo7919674.mockable.io")
            .catch((err) => {
                console.log("Err:", err);
            });
        dispatch(setData(result.data));
        setIsLoading(false);
    };
    useEffect(() => {
        fetchData();
    });
    return (
        <>
            <ChooseBox isLoading={isLoading} />
        </>
    );
};

export default MainPage;
