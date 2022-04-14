import React from "react";
import { ThemeContextConsumer } from "./themeContext";

function Button() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div>
                <button onClick={context.toggleTheme} className="button">
                    toggle {context.theme}
                    <span role="img" aria-label="sun">
            🌞
          </span>
                    <span role="img" aria-label="moon">
            🌚
          </span>
                </button>
                </div>
            )

            }

        </ThemeContextConsumer>
    );
}

export default Button;
