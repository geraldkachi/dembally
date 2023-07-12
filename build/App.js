import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import { Suspense, useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/home/About';
import Faq from './pages/home/Faq';
import Contact from './pages/home/Contact';
const App = () => {
    const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
    const ref = useRef();
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchOnMount: false,
                refetchOnReconnect: false,
                retry: false,
                staleTime: twentyFourHoursInMs,
            },
        },
    });
    ref.current = queryClient;
    return (_jsx(_Fragment, { children: _jsxs(QueryClientProvider, { client: ref.current, children: [_jsx(ToastContainer, {}), _jsx(Suspense, { fallback: "Loading", children: _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(Home, {}) }), _jsx(Route, { path: '/about', element: _jsx(About, {}) }), _jsx(Route, { path: '/faq', element: _jsx(Faq, {}) }), _jsx(Route, { path: '/contact', element: _jsx(Contact, {}) })] }) })] }) }));
};
export default App;
