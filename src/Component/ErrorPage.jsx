import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (<div id="error-page" style={{color:"white"}}>
        <h1>Ooops!!!</h1>
        <p>An Unexpected error happened</p>
        <p>
            <i>{error.statusText||error.message}</i>
        </p>
    </div>
    );
}