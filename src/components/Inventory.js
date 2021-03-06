import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {

    render() {
        return (
            <div className="inventory">
                { Object.keys(this.props.fishes).map(key => (
                        <EditFishForm key={key} fish={this.props.fishes[key]} updateFish={this.props.updateFish} />
                    )) }
                { /* pass the method to AddFishForm component*/}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>
                    Load Sample Fishes
                </button>
            </div>
        )
    }
}

export default Inventory;