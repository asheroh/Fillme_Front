import { useState } from "react";
import feed from "../routes/Discover"

function Discover_feelings({ id, user_id, image, persona_image, name, intro, persona, type, card_persona, color }) {
    const [hover, setHover] = useState(false)
    const feelings_style = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`
    };
    const persona_style = {
        backgroundImage: `url(${persona_image})`,
        backgroundSize: 'cover',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`
    };
    const colorstyle = {
        backgroundColor: `${color}`,
    };
    

    return (
        <div className="card" id={"discover" + id}>
            <div className="image" style={feelings_style}>
                <p id="user_id">@{user_id}</p>
            </div>
            <div className="user_data" style={colorstyle}>
                <p id="name">{name}</p>
                <p id="intro">{intro}</p> 
                <button id="btn_profile">프로필 보기</button>
                <button id="btn_following">팔로잉</button>
                <div id="persona">{persona}</div>
                <p id="type">{type}</p>
            </div>
            <div className="image_per" style={persona_style}>
                <div className="card_persona" id={"card_persona"+id}><p>{card_persona}</p></div>
            </div>
        </div>
        
    )

} export default Discover_feelings;


// function render_persona({id, persona}) {
//     return (
//         <div className="card_persona" id={"persona" + id}>
//             <p id="user_persona">{persona}</p>
//         </div>
//     )
// }


function render_Discover_feelings(fill) {
    return (
        <Discover_feelings key={fill.id}
            user_id={fill.user_id} index={fill.index}
            image={fill.image} persona={fill.persona}
            title={fill.title} persona_image={fill.persona_image}
            color={fill.color}/>
    )
}
