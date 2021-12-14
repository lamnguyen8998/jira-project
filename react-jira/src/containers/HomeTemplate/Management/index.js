import React, { Component } from 'react'
import * as actions from "./modules/actions"
import { connect } from "react-redux"
import Loader from "./../../../components/Loader"
import TableProjects from './TableProjects'


class Management extends Component {

    componentDidMount() {
        this.props.fetchdata()
        console.log(this.props)
    }

    renderTableprojects = () => {
        const { data, loading } = this.props;
        if (loading) return <Loader />;
        return data?.map((item) => {
            return <TableProjects key={item.id} item={item} />;
        });
    };

    render() {
        const { data, loading } = this.props;
        if (loading) return <Loader />;
        return (
            <div className="overflow-x-auto">
                <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                    <div className="w-full lg:w-5/6">
                        <div className="bg-white shadow-md rounded my-6">
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">ID</th>
                                        <th className="py-3 px-6 text-left">Project Name</th>
                                        <th className="py-3 px-6 text-center">Category</th>
                                        <th className="py-3 px-6 text-center">Creator</th>
                                        <th className="py-3 px-6 text-center">Members</th>
                                        <th className="py-3 px-6 text-center">Actions</th>
                                    </tr>
                                </thead>
                                {/* Render dữ liệu tại đây */}
                                {this.renderTableprojects()}

                            </table>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.projectManagementReducer.loading,
        data: state.projectManagementReducer.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchdata: () => {
            dispatch(actions.actFetchProject())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Management)