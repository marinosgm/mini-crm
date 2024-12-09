import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-6">
            <div className="mb-8">
                <Link href="/">
                    <ApplicationLogo className="h-24 w-24 fill-current text-white animate-bounce" />
                </Link>
            </div>

            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg transform transition duration-500 hover:scale-105">
                {children}
            </div>

            <footer className="mt-6 text-center text-sm text-white">
                <p>
                    &copy; {new Date().getFullYear()} Your App Name. All rights reserved.
                </p>
                <p className="mt-1">
                    <Link
                        href="/"
                        className="text-white underline transition hover:text-gray-200"
                    >
                        Back to Home
                    </Link>
                </p>
            </footer>
        </div>
    );
}
