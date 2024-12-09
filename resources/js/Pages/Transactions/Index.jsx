import React from 'react';
import { Link } from '@inertiajs/react';

export default function Index({ transactions }) {
    const transactionData = transactions?.data || [];

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
            <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800 tracking-wide">
                Transactions
            </h1>
            <div className="overflow-hidden rounded-lg bg-white shadow-lg transform transition duration-300 hover:scale-105">
                <table className="table-auto w-full border-collapse border border-gray-300 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
                    <thead className="bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-md">
                        <tr>
                            <th className="border px-6 py-3 text-left text-lg font-semibold tracking-wider">
                                Client Name
                            </th>
                            <th className="border px-6 py-3 text-left text-lg font-semibold tracking-wider">
                                Date
                            </th>
                            <th className="border px-6 py-3 text-left text-lg font-semibold tracking-wider">
                                Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionData.map((transaction) => (
                            <tr
                                key={transaction.id}
                                className="hover:bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 transition duration-300"
                            >
                                <td className="border px-6 py-4 text-gray-700 font-medium">
                                    {transaction.client.first_name}{' '}
                                    {transaction.client.last_name}
                                </td>
                                <td className="border px-6 py-4 text-gray-700 font-medium">
                                    {new Date(transaction.transaction_date).toLocaleDateString()}
                                </td>
                                <td className="border px-6 py-4 text-gray-700 font-medium">
                                    ${transaction.amount.toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
                {transactions?.links?.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`px-6 py-2 rounded-full text-sm font-semibold shadow-lg transition-all duration-300 transform ${
                            link.active
                                ? 'bg-blue-500 text-white hover:scale-110'
                                : 'bg-gray-300 text-gray-700 hover:bg-gray-400 hover:scale-105'
                        }`}
                    ></a>
                ))}
            </div>
        </div>
    );
}
