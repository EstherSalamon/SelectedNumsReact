//number table

import React from 'react';
import NumberRow from './NumberRow';
import SelectedTable from './SelectedTable';

class NumberTable extends React.Component {

    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }

    getRandomNumber = () => Math.floor(Math.random() * 1000) + 1;

    onAddNumClick = () => {
        const randomNum = this.getRandomNumber();
        const copy = [randomNum, ...this.state.numbers];
        this.setState({ numbers: copy });
    }

    onSelectClick = e => {
        const num = e.target.value;
        const copy = [...this.state.selectedNumbers, num];
        this.setState({ selectedNumbers: copy });
    }

    onLockClick = e => {
        const num = e.target.value;
        const copy = [...this.state.lockedNumbers, num];  
        this.setState({ lockedNumbers: copy });
    }


    render() {
        return (
                <div className='container mt-5'>
                    <button className='btn btn-outline-info' onClick={ this.onAddNumClick }>Add a number!</button>
                    <hr></hr>
                    <table className='table table-striped table-hover'>
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Select</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.numbers.map(num =>
                             <NumberRow
                                    number={num}
                                    onSelect={this.onSelectClick}
                                    isSelected={this.state.selectedNumbers.includes(num)}
                                    isLocked={this.state.lockedNumbers.includes(num)}
                              />)}
                        </tbody>
                    </table>
                <SelectedTable
                    selectedNums={this.state.selectedNumbers}
                    onLockSwitch={this.onLockClick}
                />
                </div>
        )
    }
}

export default NumberTable;