import React from 'react';

class SearchPanel extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }

    renderItems() {
        const result = [];
        this.props && this.props.data && this.props.data.forEach(c => {
            const item = (<div key={c._id} className='item'>
                <div className='img'>
                    <img src={c.picture} />
                </div>
                <div className='content'>
                    <div className='title'>
                        <h4 title={c.name}>{c.name}</h4>
                    </div>
                    <div className='text' title={c.about}>{c.about}</div>
                </div>
            </div>);
            result.push(item);
        });
        return result;
    }


    render() {
        return (<div className='item-container'>
            {this.renderItems()}
        </div>);
    }
}

module.exports = SearchPanel;