import React, { Component } from 'react';
import "./style.css";
import Loader from "./../../../../components/Loader"
import ProjectUsers from './ProjectUsers';


class TableProjects extends Component {

    renderProjectUsers = (item) => {
        // const { data, loading } = this.props;
        // if (loading) return <Loader />;
        console.log(item);
        return <ProjectUsers key={item.userId} item={item} />;
    };



    render() {
        const { loading } = this.props;
        if (loading) return <Loader />;
        const { item } = this.props
        console.log(item.members)
        return (
            <tbody className="text-gray-600 text-sm font-light">
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">

                            <span className="font-medium">{item?.id}</span>
                        </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                            <div className="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={24} height={24} viewBox="0 0 48 48" style={{ fill: '#000000' }}>
                                    <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z" /><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z" /><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z" /><circle cx={24} cy={24} r={4} fill="#80deea" />
                                </svg>
                            </div>
                            <span>{item?.projectName}</span>
                        </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                            <span>{item?.categoryName}</span>
                        </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">{item?.creator.name}</span>
                    </td>
                    <td className="py-3 px-6 text-center">

                        <div class="flex items-center justify-center hover-trigger">
                            <img className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg" />
                            <img className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg" />
                            <img className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg" />
                            <div class="absolute bg-white border border-grey-100 px-4 py-2 hover-target">
                                <section className="antialiased bg-gray-100 text-gray-600">
                                    <div className="flex flex-col justify-center ">
                                        <div className="  mx-auto bg-white shadow-lg rounded-sm border border-gray-50">

                                            <div className="p-1">
                                                <div className="overflow-x-auto">
                                                    <table className="table-auto w-full">
                                                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                                            <tr>
                                                                <th className="p-2 whitespace-nowrap">
                                                                    <div className="font-semibold text-left">ID</div>
                                                                </th>
                                                                <th className="p-2 whitespace-nowrap">
                                                                    <div className="font-semibold text-left">Avatar</div>
                                                                </th>
                                                                <th className="p-2 whitespace-nowrap">
                                                                    <div className="font-semibold text-left">Name</div>
                                                                </th>

                                                            </tr>
                                                        </thead>
                                                        {/* Render dữ liệu members tại đây */}
                                                        {item?.members.map((item) => {
                                                            return this.renderProjectUsers(item)
                                                        })}



                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>

                    </td>
                    <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                        </div>
                    </td>
                </tr>


            </tbody>

        )
    }
}

export default TableProjects