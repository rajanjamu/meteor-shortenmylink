import React from 'react';

const LinkList = () => {
    return (
        <div className="link-list">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">URL</th>
                    <th scope="col">SHORTEN</th>
                    <th scope="col">CLICKS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default LinkList;