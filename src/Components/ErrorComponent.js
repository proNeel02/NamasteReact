import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <>
      <h1>Oops</h1>
      <h2>Somthing Went Wrong!</h2>
    </>
  );
};

export default ErrorComponent;
