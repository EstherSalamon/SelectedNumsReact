//selected table

import React from 'react';

class SelectedTable extends React.Component {

    render() {

        const { selectedNums, onLockSwitch } = this.props;
        return (
            <>
                <hr />
                <h1>Selected Numbers</h1>
                <table className='table table-border table-hover'>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Lock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedNums.map(s =>
                            <tr>
                                <td>{s}</td>
                                <td><button className='btn btn-secondary' onClick={ onLockSwitch }>Lock</button></td>
                            </tr>)}
                    </tbody>
                </table>
            </>
        )
    }
}

export default SelectedTable;