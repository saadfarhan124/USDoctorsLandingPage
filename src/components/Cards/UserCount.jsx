
import * as React from "react";
import CardWithIcon from '../Helpers/CardWithIcon'
import { useTranslate } from 'react-admin';


const CountCard = ({title, value, icon}) => {
    const translate = useTranslate();
    return (
        <CardWithIcon 
            icon={icon}
            title={translate(`${title}`)}
            subtitle={value}
        />
    )
};

export default CountCard;