import React, {Component} from "react";
import {ThemeContextConsumer} from "./themeContext";
import Button from "./Button";


type MyState = {
    theme: string,
    toggleTheme?: () => void;
};


class Image extends Component<any, MyState> {

    // static contextType = ThemeContextConsumer;

    render() {
        return (
            <ThemeContextConsumer>
                {context => (
                    <div className={`${context.theme}-image image`}>
                        <div className={`${context.theme}-ball ball`} />
                        <Button />
                    </div>
                )}
            </ThemeContextConsumer>
        );
    }
}

// Image.contextType = ThemeContextConsumer;

export default Image;
