import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            alert("Redirecting back");
            //it will redirect to 1 page above 
            navigate(-1)
        })
    }, [])
    return (
        <div>
            <main>
                <h1 >404</h1><br />
            </main>

        </div>
    )
}

export default ErrorPage
