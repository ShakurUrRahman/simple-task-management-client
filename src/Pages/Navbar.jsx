import React, { Fragment, useContext } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext/AuthProvider';

export default function Example() {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }
    return (
        <Popover className="relative bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://i.ibb.co/PwWsHKw/task1.png"
                                alt="TM"
                            />
                        </Link>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <div as="nav" className="hidden space-x-10 md:flex">
                        {
                            user?.email ?
                                <>
                                    <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                        Add Task
                                    </Link>
                                    <Link to="/mytasks" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                        My Task
                                    </Link>
                                    <Link to="/completedtasks" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                        Completed Task
                                    </Link>
                                </>
                                :
                                <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Add Task
                                </Link>
                        }
                    </div>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        {user?.email ?
                            <Link onClick={handleLogOut} to="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                Log Out
                            </Link>
                            :
                            <div>
                                <Link to="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                    Sign in
                                </Link>
                                <Link
                                    to="/signup"
                                    className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                >
                                    Sign up
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://i.ibb.co/PwWsHKw/task1.png"
                                        alt="TM"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-col justify-center items-center">

                                {user?.email ?
                                    <>
                                        <Link to="/addtask" className="text-base font-medium text-gray-500 hover:text-gray-900 mb-3">
                                            Add Task
                                        </Link>
                                        <Link to="/mytasks" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                            My Task
                                        </Link>
                                        <Link to="/completedtasks" className="text-base font-medium text-gray-500 hover:text-gray-900 mb-3">
                                            Completed Tasks
                                        </Link></>
                                    :
                                    <Link to="/addtask" className="text-base font-medium text-gray-500 hover:text-gray-900 mb-3">
                                        Add Task
                                    </Link>}
                            </div>
                        </div>
                        <div className="space-y-3 py-3 px-5">
                            {user?.email ?
                                <Link onClick={handleLogOut} to="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                    Log Out
                                </Link>
                                :
                                <>
                                    <Link
                                        to="/signup"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                    >
                                        Sign up
                                    </Link>
                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                        Already have an account?{' '}
                                        <Link to="/login" className="text-indigo-600 hover:text-indigo-500">
                                            Sign in
                                        </Link> </p>
                                </>
                            }
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover >
    )
}
