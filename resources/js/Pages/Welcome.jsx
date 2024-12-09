import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Home({ auth }) {
    return (
        <>
            <Head title="Home" />
            <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white flex items-center justify-center">
                <div className="max-w-6xl mx-auto px-6">
                    <header className="flex items-center justify-between py-6">
                        <h1 className="text-3xl font-bold">Mini CRM</h1>
                        <nav>
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="px-4 py-2 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-indigo-100 transition"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <div className="space-x-4">
                                    <Link
                                        href={route('login')}
                                        className="px-4 py-2 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-indigo-100 transition"
                                    >
                                        Login
                                    </Link>
                                </div>
                            )}
                        </nav>
                    </header>

                    <main className="mt-16 text-center">
                        <h2 className="text-4xl font-extrabold mb-4 animate-fade-in">
                            Welcome to Mini CRM
                        </h2>
                        <p className="text-lg mb-8">
                            Manage your clients and transactions effortlessly with a modern and intuitive platform.
                        </p>
                        <div className="space-x-4">
                            <Link
                                href={auth.user ? route('clients.index') : route('login')}
                                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-800 text-white font-semibold rounded-lg shadow-lg transition"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="https://example.com/docs"
                                className="px-6 py-3 bg-gray-200 text-indigo-700 font-semibold rounded-lg shadow-lg hover:bg-gray-300 transition"
                            >
                                Learn More
                            </Link>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
