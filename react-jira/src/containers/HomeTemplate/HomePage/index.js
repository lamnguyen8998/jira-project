import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                {/* Carousel */}
                <section className='px-2 py-20 bg-white md:px-0'>
                    <div className='container items-center max-w-6xl px-8 mx-auto xl:px-5'>
                        <div className='flex flex-wrap items-center sm:-mx-3'>
                            <div className='w-full md:w-1/2 md:px-3'>
                                <div className='w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0'>
                                    <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl'>
                                        <span className='block xl:inline'>Beautiful Pages to</span>
                                        <span className='block text-indigo-600 xl:inline'> Manage Your Work</span>
                                    </h1>
                                    <p className='mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl'>
                                        It's never been easier to manage your project that convey your message and tell
                                        your team.
                                    </p>
                                    <div className='relative flex flex-col sm:flex-row sm:space-x-4'>
                                        <Link
                                            to='/register'
                                            className='flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto'>
                                            Try It Free
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                className='w-5 h-5 ml-1'
                                                viewBox='0 0 24 24'
                                                fill='none'
                                                stroke='currentColor'
                                                strokeWidth={2}
                                                strokeLinecap='round'
                                                strokeLinejoin='round'>
                                                <line x1={5} y1={12} x2={19} y2={12} />
                                                <polyline points='12 5 19 12 12 19' />
                                            </svg>
                                        </Link>
                                        <Link
                                            to='/about'
                                            className='flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600'>
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full md:w-1/2'>
                                <div className='w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl'>
                                    <img src='https://cdn.devdojo.com/images/november2020/hero-image.jpeg' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className='py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24'>
                    <div className='box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl'>
                        <div className='flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200'>
                            <h2 className='box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl'>
                                Simple, Transparent Pricing
                            </h2>
                            <p className='box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl'>
                                Pricing to fit the needs of any companie size.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3'>
                            {/* Price 1 */}
                            <div className='relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8'>
                                <h3 className='m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl'>
                                    Starter
                                </h3>
                                <div className='flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200'>
                                    <p className='box-border m-0 text-6xl font-semibold leading-none border-solid'>
                                        $5
                                    </p>
                                    <p className='box-border m-0 border-solid' style={{ borderImage: 'initial' }}>
                                        / month
                                    </p>
                                </div>
                                <p className='mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200'>
                                    Ideal for Startups and Small Companies
                                </p>
                                <ul className='flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200'>
                                    <li className='inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid'>
                                        <svg
                                            className='w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                        Automated Reporting
                                    </li>
                                    <li className='inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid'>
                                        <svg
                                            className='w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                        Faster Processing
                                    </li>
                                    <li className='inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid'>
                                        <svg
                                            className='w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                        Customizations
                                    </li>
                                </ul>
                                <button className='inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg'>
                                    Select Plan
                                </button>
                            </div>
                            {/* Price 2 */}
                            <div className='relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-blue-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-16'>
                                <h3 className='m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl'>
                                    Basic
                                </h3>
                                <div className='flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200'>
                                    <p className='box-border m-0 text-6xl font-semibold leading-none border-solid'>
                                        $15
                                    </p>
                                    <p className='box-border m-0 border-solid' style={{ borderImage: 'initial' }}>
                                        / month
                                    </p>
                                </div>
                                <p className='mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200'>
                                    Ideal for medium-size businesses to larger businesses
                                </p>
                                <ul className='flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200'>
                                    <li className='inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid'>
                                        <svg
                                            className='w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                        Everything in Starter
                                    </li>
                                    <li className='inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid'>
                                        <svg
                                            className='w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                        100 Builds
                                    </li>
                                    <li className='inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid'>
                                        <svg
                                            className='w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                        Progress Reports
                                    </li>
                                    <li className='inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid'>
                                        <svg
                                            className='w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                        Premium Support
                                    </li>
                                </ul>
                                <button className='inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg'>
                                    Select Plan
                                </button>
                            </div>
                            {/* Price 3 */}
                            <div className='relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8'>
                                <h3 className='m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl'>
                                    Plus
                                </h3>
                                <div className='flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200'>
                                    <p className='box-border m-0 text-6xl font-semibold leading-none border-solid'>
                                        $25
                                    </p>
                                    <p className='box-border m-0 border-solid' style={{ borderImage: 'initial' }}>
                                        / month
                                    </p>
                                </div>
                                <p className='mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200'>
                                    Ideal for larger and enterprise companies
                                </p>
                                <ul className='flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200'>
                                    <li className='inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid'>
                                        <svg
                                            className='w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                        Everything in Basic
                                    </li>
                                    <li className='inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid'>
                                        <svg
                                            className='w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                        Unlimited Builds
                                    </li>
                                    <li className='inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid'>
                                        <svg
                                            className='w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                        Advanced Analytics
                                    </li>
                                    <li className='inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid'>
                                        <svg
                                            className='w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                        Company Evaluations
                                    </li>
                                </ul>
                                <button className='inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg'>
                                    Select Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
