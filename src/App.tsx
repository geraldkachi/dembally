import './App.css'
import { Suspense, useRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/home/About';
import Faq from './pages/home/Faq';
import Contact from './pages/home/Contact';

const App: React.FC = () => {
  const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

  const ref = useRef<QueryClient>();
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
  })
  ref.current = queryClient;

  return (
    <>
      <QueryClientProvider client={ref.current}>
        <ToastContainer />
        <Suspense fallback={"Loading"}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Suspense>

      </QueryClientProvider>
    </>
  )
}

export default App
// const sentence = ['Hello ', 'my ', 'is ', 'Gerald ']
// for (let i = 0; i < sentence.length; i++) {
//   const element = sentence[i];
//   const elementOptize = +sentence[i] + ' ';
//   console.log(elementOptize, 'elementOptize')
// }
