require('./app.shit-css');
import React, { FC } from 'react';

interface AppProps {}

export const App: FC<AppProps> = () => {
    return (
        <div className="select-none flex justify-center h-screen items-center">
            <div className="text-xl text-gray-50 font-bold p-10 bg-purple-800 rounded-xl">
                Hello world!
            </div>
        </div>
    );
};
