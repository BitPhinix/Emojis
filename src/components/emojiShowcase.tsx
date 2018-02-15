import * as React from "react";

class EmojiShowcase extends React.Component<{description: string, imageUrl: string}, {}> {


    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li className="emojiShowcase">
                <img src={this.props.imageUrl}/>
                <p>:{this.props.description}:</p>
            </li>
        );
    }
}

export default EmojiShowcase;