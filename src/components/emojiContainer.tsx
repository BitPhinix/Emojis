import * as React from "react";
import EmojiShowcase from "./emojiShowcase";

class EmojiContainer extends React.Component<{}, {emotes: JSX.Element[]}> {

    constructor(props) {
        super(props);

        //Default state
        this.state = {emotes: []};
    }

    componentWillMount() {
        this.queryEmotes();
    }

    queryEmotes() {
        //Crate a new XMLHttpRequest
        const xmlRequest = new XMLHttpRequest();

        //This function will be called when call is complete
        xmlRequest.onload = () => {
            //Parse response
            const result = JSON.parse(xmlRequest.responseText);

            //Create emotes array
            let emotes: JSX.Element[] = [];

            //For each key
            for (let key of Object.keys(result))
                //Create new EmojiShowcase
                emotes.push(<EmojiShowcase description={key} imageUrl={result[key]} key={key}/>);

            this.setState({emotes});
        };

        //Make call (async)
        xmlRequest.open("GET", "https://api.github.com/emojis", true);
        xmlRequest.send(null);
    }

    render() {
        return(
            <ul className="emojiContainer">
                {this.state.emotes}
            </ul>
        );
    }
}

export default EmojiContainer;