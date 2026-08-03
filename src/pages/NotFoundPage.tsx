import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/orders">Вернуться на главную</Link>
    </div>
  );
};