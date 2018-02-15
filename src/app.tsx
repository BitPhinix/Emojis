import * as React from "react";
import EmojiContainer from "./components/emojiContainer";

class App extends React.Component<{}, {}> {
    render() {
        return(
            <div className="App">
                <EmojiContainer/>
            </div>
        );
    }
}

export default App;