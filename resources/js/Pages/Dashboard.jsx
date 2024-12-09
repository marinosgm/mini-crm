import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ clientCount,transactionTotal  }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold leading-tight text-gray-800">
                    Welcome to Your Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
                    {/* Clients Card */}
                    <Link
                        href={route('clients.index')}
                        className="overflow-hidden rounded-lg bg-white shadow-lg transform transition duration-300 hover:scale-105"
                    >
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-800">
                                Total Clients
                            </h3>
                            <p className="mt-2 text-4xl font-extrabold text-indigo-600">
                                {clientCount}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                See all client details and manage them here.
                            </p>
                        </div>
                    </Link>

                    {/* Placeholder for Transactions and Notifications */}
                    <Link
                            href={route('transactions.index')}
                            className="overflow-hidden rounded-lg bg-white shadow-lg transform transition duration-300 hover:scale-105"
                        >
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800">Transactions</h3>
                                <p className="mt-2 text-4xl font-extrabold text-green-600"> ${transactionTotal.toLocaleString()}</p>
                                <p className="mt-1 text-sm text-gray-500">
                                    Overview of your recent transactions.
                                </p>
                            </div>
                        </Link>
                    <div className="overflow-hidden rounded-lg bg-white shadow-lg transform transition duration-300 hover:scale-105">
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-800">
                                Notifications
                            </h3>
                            <p className="mt-2 text-4xl font-extrabold text-red-600">
                                5
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Check the latest updates and announcements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
