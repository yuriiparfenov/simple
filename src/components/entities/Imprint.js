import React from "react";
import getDeclination from "./getDeclination";


const Imprint = props => {

    const { word, caseOfWord } = props;


    const declination = getDeclination(word, caseOfWord);


    return (
        <div>
            <p>{declination}</p>
        </div>
    )
};



export default Imprint;