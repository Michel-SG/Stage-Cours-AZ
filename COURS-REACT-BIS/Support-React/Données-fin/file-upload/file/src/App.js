import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        // const file = this.inputRef.current.files[0];
        // console.log(file.name, file.size, file.type);

        const fd = new FormData();
        const files = this.inputRef.current.files;
        for (var i = 0; i < files.length; i++) {
            const file = files.item(i);
            fd.append(file.name, file);
        }

        const response = await fetch('http://localhost:5000', {
            method: 'post',
            body: fd,
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
    };

    handleInputChange = (event) => {
        console.log(event);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="file"
                        onChange={this.handleInputChange}
                        ref={this.inputRef}
                        multiple
                    />
                    <input type="submit" value="send" />
                </form>
            </div>
        );
    }
}
