import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from "../modules/actions"

class ProjectUsers extends Component {
    render() {
        const { item, projectId } = this.props;
        return (
            <tbody className="text-sm divide-y divide-gray-100">
                <tr>
                    <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">

                            <div className="font-medium text-gray-800">{item?.userId}</div>
                        </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center justify-center">
                            <img className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src={item?.avatar} />
                        </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">{item?.name}</div>
                    </td>
                    <div className="w-4 mr-2 py-4 transform hover:text-purple-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => this.props.deleteUser({ userId: item.userId, projectId: projectId })}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>

                </tr>
            </tbody >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteUser: (data) => {
            dispatch(actions.actDeleteUser(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(ProjectUsers)