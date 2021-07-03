import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "" 
    };
  }

  handleChange = (event) => {
    let newMessage = event.target.value
    this.setState({
      message: newMessage
    })
  }

  render() {
    let chars = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <label>Characters remaining: {chars} </label>
      </div>
    );
  }
}

export default TwitterMessage;
