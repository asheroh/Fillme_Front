import newStyle from "../static/css/Newfeeling.module.css";
import { useState } from 'react';

function New_Feelings({ id, user_id, user_name, persona_id, persona_name, image }) {
    const newfeeling_style = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`
    }

    const [hover, setHover] = useState(true);
    const mouseOn = () => {
        setHover(true);
    }
    const mouseOut = () => {
        setHover(false);
    }

    if (hover) {
        return (
            <div
                className={newStyle.newfeeling}
                id={"feelings" + id}
                style={newfeeling_style}
                mouseOn={mouseOn}
            >
                <section id="user_id">@{user_id}</section>
                <section>
                    <h2 className={newStyle.title}>{user_name}</h2>
                    <p className={newStyle.sub}>{persona_name}</p>
                </section>
                <buttton className={newStyle.button}>프로필 보기</buttton>
            </div>
        );
    } else {
        return (
            <div
                className={newStyle.newfeeling}
                id={"feelings" + id}
                style={newfeeling_style}
                mouseOut={mouseOut}
            >
                <section id="user_id">@{user_id}</section>
                <section className={newStyle.subUnhover}><p>{persona_name}</p></section>
            </div>
        );
    }

}

export default New_Feelings;
