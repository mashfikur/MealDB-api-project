import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h3 className="text-center text-4xl font-bold my-80">OOPS !! Error</h3>
        </div>
    );
};

export default ErrorPage;