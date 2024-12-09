import React from 'react';
import { Link } from '@inertiajs/react';

export default function Index({ clients }) {
    const clientData = clients?.data || [];

    return (
        <div className="container mx-auto p-6">
            <div className="mb-6">
                <Link
                    href={route('dashboard')}
                    className="px-4 py-2 bg-indigo-600 text-white rounded shadow-md hover:bg-indigo-700 transition"
                >
                    Back to Dashboard
                </Link>
            </div>
            <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800 tracking-wide">
                Clients
            </h1>
            <div className="overflow-hidden rounded-lg bg-white shadow-lg transform transition duration-300 hover:scale-105">
                <table className="table-auto w-full border-collapse border border-gray-300 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
                    <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md">
                        <tr>
                            <th className="border px-4 py-3 text-left text-lg font-semibold tracking-wider w-1/6">
                                Avatar
                            </th>
                            <th className="border px-6 py-3 text-left text-lg font-semibold tracking-wider">
                                First Name
                            </th>
                            <th className="border px-6 py-3 text-left text-lg font-semibold tracking-wider">
                                Last Name
                            </th>
                            <th className="border px-6 py-3 text-left text-lg font-semibold tracking-wider">
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientData.map((client) => (
                            <tr
                                key={client.id}
                                className="hover:bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 transition duration-300"
                            >
                                <td className="border px-6 py-4 text-center">
                                    <img
                                        src={`/storage/${client.avatar}`}
                                        alt={`${client.first_name} Avatar`}
                                        className="w-16 h-16 mx-auto rounded-full shadow-lg transform transition duration-300 hover:scale-110"
                                    />
                                </td>
                                <td className="border px-6 py-4 text-gray-700 font-medium">
                                    {client.first_name}
                                </td>
                                <td className="border px-6 py-4 text-gray-700 font-medium">
                                    {client.last_name}
                                </td>
                                <td className="border px-6 py-4 text-gray-700 font-medium">
                                    {client.email}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
                {clients?.links?.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`px-6 py-2 rounded-full text-sm font-semibold shadow-lg transition-all duration-300 transform ${
                            link.active
                                ? 'bg-indigo-500 text-white hover:scale-110'
                                : 'bg-gray-300 text-gray-700 hover:bg-gray-400 hover:scale-105'
                        }`}
                    ></a>
                ))}
            </div>
        </div>
    );
}
