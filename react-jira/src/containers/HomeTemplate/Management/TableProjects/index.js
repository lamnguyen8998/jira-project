import React, { Component } from 'react'

export default class TableProjects extends Component {
    render() {
        const { item } = this.props
        return (

            <tbody className="bg-grey-light items-center justify-between w-full" >
                <tr className="flex w-full mb-2">
                    <td className="p-4 w-1/4">{item?.id}</td>
                    <td className="p-4 w-1/4">{item?.projectName}</td>
                    <td className="p-4 w-1/4">{item?.categoryName}</td>
                    <td className="p-4 w-1/4">{item?.creator.id} -{item?.creator.name} </td>
                    <td className="p-4 w-1/4">Đang làm</td>
                    <td className="p-4 w-1/4">Đang làm</td>
                </tr>


            </tbody>


        )
    }
}
