import React, { Component } from 'react'

export default class CircleSelector extends Component {
    consturctor() {
        super(this);
        this.state = {
            selectedItem = null,
            items =[]
        }
    }

    onClick(item) {
        this.setState({ selectedItem: item })
    }

    render() {
        return (<div>
            <div>{this.state.selectedItem}</div>
            {this.state.items.map((item, i) => {
                return <div onClick={() => onClick(item)}>{item.title}</div>
            })}
        </div>)
    }
}