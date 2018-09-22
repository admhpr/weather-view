import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

function average(data){
    let sum = data.reduce((acc, cur )=> {
        return acc + cur;
    }, 0)
    return Math.round((sum/data.length))
}
export default (props) => {
    return(
        <div>
            <Sparklines height={100} width={180} data={props.data}>
                <SparklinesLine color={props.colour}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>Average: {average(props.data)}{props.units}</div>
        </div>
    )
}