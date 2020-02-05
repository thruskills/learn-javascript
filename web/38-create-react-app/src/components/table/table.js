import React from 'react';

function TableRows(){
    return (
        <React.Fragment>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr>
                    <td>Manohar</td>
                    <td>MERN</td>
                    <td>1</td>
                </tr> */}
                <tr>
                    <td>Nitin</td>
                    <td>MEAN</td>
                    <td>1</td>
                </tr>
            </tbody>
        </React.Fragment>
    )
}

export default TableRows;

// this is a comment
/* this is a 
multi line comment */