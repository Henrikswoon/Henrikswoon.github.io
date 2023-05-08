import { useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
    const error: unknown = useRouteError();
    return(
        <div id="error-page" className='grid h-screen gap-5  place-items-center content-center' >
        <div className='flex flex-col bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' role="alert">
        <h1 className='font-bold'>Oops!</h1>    
        <p>Sorry, an unexpected error has occurred.</p>
        <p className='text-slate-400'>
        <i>
            {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
        </p>
        </div>
        <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Take me home</a>
        </div>
    )
}

export default ErrorPage;
