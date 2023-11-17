import React from "react";
import s from "./home.module.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
    return(
        <div className={s.wrapper}>
            <h1 class={s.title}>Вітаю!</h1>
            <p class={s.subtitle} translate="no">NASA Everyday - це сервіс, який дозволяє переглядати зображення чи відео різних об'єктів Всесвіту та читати короткі пояснення до них, створені астрономами-професіоналами. Ви можете вибрати дату та переглянути інформацію та візуальний матеріал, що відповідають обраній даті.</p>
            <div class={s.nav}>
                <NavLink to="./application">
                    <button class={s.button__start}>Почати!</button>
                </NavLink>
                <NavLink to="./docs">
                    <button class={s.button__docs}>Як працює цей сервіс?</button>
                </NavLink>
            </div>
            
        </div>  
    );
};

export default Home;