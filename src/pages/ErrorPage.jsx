import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? `${error.status}: ${error.data}`
    : "Something went wrong.";

  return (
    <div className="grid min-h-screen place-items-center bg-base-100 p-6 text-center">
      <div>
        <h1 className="text-5xl font-bold text-primary">Down for the count</h1>
        <p className="mt-3 opacity-80">{message}</p>
        <Link to="/" className="btn btn-primary mt-6">
          Back to home
        </Link>
      </div>
    </div>
  );
}
