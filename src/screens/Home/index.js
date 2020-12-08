import React from "react";
import "./styles.css";

import Acomodacoes from "../Acomodações"

const home = (e)=> {
    /* e.preventDefault(); */
    return (
    <React.Fragment>
    <Acomodacoes></Acomodacoes>
    </React.Fragment>
    );
}
export default home;