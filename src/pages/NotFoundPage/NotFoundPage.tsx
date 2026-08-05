import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

export const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <Link className="not-found__btn" to="/">
        Return to main page
      </Link>
    </div>
  );
};
