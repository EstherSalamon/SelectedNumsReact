//number row

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class NumberRow extends React.Component {

    render() {
        const { number, isSelected, isLocked } = this.props;
        return (
            <>
                <tr>
                    <td>{ number }</td>
                    <td>
                        <button className={`btn btn-${ !isSelected ? 'danger' : 'success' } `} onClick={this.props.onSelect}>{ !isSelected ? 'Select' : 'Unselect'} </button>
                    </td>
                </tr>
            </>
        )
    }
}

export default NumberRow;