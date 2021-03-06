import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from "../sample-fishes";
import base from '../base';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }

    componentDidMount() {
        const { params } = this.props.match;
        // First reinstate the localStorage
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) })
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentDidUpdate() {
        console.log(this.state.order);
        localStorage.setItem(
            this.props.match.params.storeId,
            JSON.stringify(this.state.order)
        );
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }


    // create a method to update state
    addFish = fish => {
        // 1. Take a copy of the existing state. Dont modify directly
        const fishes = {...this.state.fishes};
        // 2. Add our new fish to the fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({
            fishes: fishes
        })
    }

    updateFish = (key, updatedFish) => {
        // 1. Take a copy of existing state
        const fishes = {...this.state.fishes};
        // 2. Update the state
        fishes[key] = updatedFish;
        // 3. Set it to state
        this.setState({ fishes });
    }

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    }

    addToOrder = (key) => {
        // 1. Take a copy of existing state
        const order = { ...this.state.order };
        // 2. Add to the order or update the number of the order
        order[key] = order[key] + 1 || 1;
        // 3. Call setState to update the object in state
        this.setState({ order });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Tunmbi is cool" />
                    <ul className="fishes">
                        { Object.keys(this.state.fishes).map( key =>
                                <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder = { this.addToOrder }> {key} </Fish> )
                        }
                    </ul>
                </div>

                <Order fishes ={this.state.fishes} order={this.state.order} />

                { /* pass the function to inventory component*/}
                <Inventory addFish={this.addFish}
                    updateFish={this.updateFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes} />
            </div>
        )
    }
}

export default App;