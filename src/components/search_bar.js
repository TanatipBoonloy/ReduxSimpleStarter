import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search_key: ''
        };
    }

    render() {
        const {search_key} = this.state;
        return (
            <div>
              <input value={ search_key }
                     onChange={ (event) => this.setState({
                                    search_key: event.target.value
                                }) } />
            </div>
            );
    }
}

export default SearchBar