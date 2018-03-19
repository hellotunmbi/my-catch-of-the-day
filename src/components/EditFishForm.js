import React from 'react';
import fishes from '../sample-fishes';

class EditFishForm extends React.Component
{
    handleChange = event => {
        console.log(event.currentTarget.value);
        // update that fishes
        // 1. Get the current state of fish
        const updatedFish = {
            ...this.state.fish,
            [event.currentTarget.name]: event.currentTarget.value
            };

    }
    render() {
        return <div className="fish-edit">
            <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
            <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
            <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} ></textarea>
            <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
        </div>;
    }
}

export default EditFishForm;