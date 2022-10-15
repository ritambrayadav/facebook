import React from 'react'

export const View = ({getData}) => {
    return getData.map((imag, index) =>(
        <table >
            <tbody>
        <tr key={index}>
            <td ><img src={imag}/></td>         
        </tr> 
        </tbody>
        </table>           
    
))
}
export default View;