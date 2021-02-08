
import * as React from "react";
import CardWithIcon from '../Helpers/CardWithIcon'


const CountCard = ({title, value, icon}) => {
    return (
        <CardWithIcon 
            icon={icon}
            title={title}
            subtitle={value}
        />
    )
};

export default CountCard;