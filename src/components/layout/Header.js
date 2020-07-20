import React from "react";
import { FaPizzaSlice, FaRegBell, FaCog } from "react-icons/fa";

export const Header = () =>{
    const x = 1;
    return <header className="header" data-testid="header">
        <nav>
            <div className="logo">
                <img src="/images/logo.png" alt="Todolist"/>
            </div>
            <div className="settings">
                <ul>
                    <li data-testid="quick-add-task-action" className="settings__add">+</li>
                    <li data-testid="dark-mode-action" className="settings__darkmode">
                        <FaPizzaSlice/>
                    </li>
                    <li data-testid="bell-action" className="notification">
                        <FaRegBell/>
                    </li>
                    <li data-testid="cog-action" className="settings">
                        <FaCog/>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
};