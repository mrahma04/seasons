import React from 'react';
import './styles.css';

const getSeason = (month, lat) => {
    if (month > 2 && month < 10) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: "Burr it's cold",
        iconName: 'snowflake'
    }
};

const SeasonDisplay = (props) => {

    const season = getSeason(new Date().getMonth(), props.lat);
    const { text, iconName } = seasonConfig[season];

    return(
        <div className="season-display {season}">
            <i className={`icon-left massive ${iconName} icon`}></i>
            <div className={season}>{text}</div>
            <i className={`icon-right massive ${iconName} icon`}></i>
         </div>
    )
};

export default SeasonDisplay;