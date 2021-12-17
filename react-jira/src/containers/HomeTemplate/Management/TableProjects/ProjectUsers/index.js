import React, { Component } from 'react'

export default class ProjectUsers extends Component {
    render() {
        return (
            <tbody className="text-sm divide-y divide-gray-100">
                <tr>
                    <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">

                            <div className="font-medium text-gray-800">{this.props.item?.userId}</div>
                        </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center justify-center">
                            <img className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src={this.props.item?.avatar} />
                        </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">{this.props.item?.name}</div>
                    </td>
                    <div className="w-4 mr-2 py-4 transform hover:text-purple-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>

                </tr>
            </tbody>
        )
    }
}

