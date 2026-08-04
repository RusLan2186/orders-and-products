import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <Link className="btn" to="/">
        Return to main page
      </Link>
    </div>
  );
};