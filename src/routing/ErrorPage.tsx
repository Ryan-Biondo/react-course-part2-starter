import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  isRouteErrorResponse(error); // $ExpectType error is RouteErrorResponse
  return (
    <>
      <h1>Oops...</h1>
      <p>{isRouteErrorResponse(error) ? 'Invalid Page' : 'Unexpected Error'}</p>
    </>
  );
};

export default ErrorPage;
