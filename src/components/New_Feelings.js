import newStyle from "../static/css/Newfeeling.module.css";
import { useState, useEffect } from "react";

function New_Feelings({ id, user_id, user_name, persona_id, persona_name, image, category }) {
    const newfeeling_style = {
        backgroundImage: `url(http://127.0.0.1:8000${image})`,
        backgroundSize: "cover",
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
    };

    const [hover, setHover] = useState(false);
    const OnMouseOver = () => {
        setHover(true);
    };
    const OnMouseOut = () => {
        setHover(false);
    };

    if (hover) {
        return (
            <>
                <div
                    className={newStyle.newfeeling1}
                    id={"feelings" + id}
                    style={newfeeling_style}
                    onMouseOver={OnMouseOver}
                    onMouseLeave={OnMouseOut}
                >
                    <div>
                        <section id="user_id">@{user_name}</section>
                        <section className={newStyle.content}></section>
                        <section>
                            <h2 className={newStyle.title}>{persona_name}</h2>
                            <p className={newStyle.sub}>{category}</p>
                        </section>

                        <buttton className={newStyle.button}>프로필 보기</buttton>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <div
                className={newStyle.newfeeling2}
                id={"feelings" + id}
                style={newfeeling_style}
                onMouseOver={OnMouseOver}
                onMouseLeave={OnMouseOut}
            >
                <section id="user_id">@{user_name}</section>
                <section className={newStyle.subUnhover}>
                    <p>{persona_name}</p>
                </section>
            </div>
        );
    }
}

export default New_Feelings;
