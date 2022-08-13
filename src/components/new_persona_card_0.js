import dummy from "../data.json"
import { useState, useEffect } from "react";
import "../static/css/personadata_0.css"
import styled from "styled-components";

function PicZero() {

    const [hover, setHover] = useState(false);
    const OnmouseEnter = () => {
        setHover(true);
    };
    const OnmouseLeave = () => {
        setHover(false);
    };
    useEffect(() => {
        console.log("hover change");
    }, [hover]);

    const Per_img = styled.div`{
        background-image: url(${dummy[0].persona.persona_image});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }`;

    const rend = (dummy => {

        const persona_f = [];
            persona_f.push(dummy[0].persona.map(detail => (
            <div className="persona_data_0_img_in">
                <div id={"persona0-"+detail.persona_id}  
                    className={"detailPersona0-"+detail.persona_id}>
                    <Per_img id={"personaName0-"+detail.persona_id}>{detail.persona_name}</Per_img>
                </div>
            </div>)))
            
        return persona_f;
        
    })
    if (hover) {
        return (
            <div className="row">
                <div className={"row_image"+dummy[0].id} id={"persona0-"+dummy[0].persona.persona_id} onMouseLeave={OnmouseLeave}>
                    {rend(dummy)}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="row">
                <div className={"row_image"+dummy[0].id} id={"persona0-"+dummy[0].persona.persona_id} onMouseEnter={OnmouseEnter}>
                    {rend(dummy)}
                </div>
            </div>
        )
    }
} export default PicZero;