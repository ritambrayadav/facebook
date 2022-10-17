import React from 'react'

export const View = ({ getData }) => {
    return getData.map((imag, index) => (
        <div className='view_image'>
        <table >
            <tbody>
                <tr key={index}>
                    <td ><img id='image_list' src={imag} /></td>
                </tr>
            </tbody>
        </table>
        </div>
    ))
}
export default View;