import { Link, useRouteError } from 'react-router-dom';
import BgImage from '../../assets/images/cars/bmw-3.jpg'

interface RouteError {
  error: Error;
  status: number | null;
}

const ErrorPage: React.FC = () => {
  const { error, status } = useRouteError() as RouteError;

  return (
    <section
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="bg-transparent bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-6xl font-extrabold text-white mb-4">
          {status || 404}
        </h2>
        <p className="text-xl font-semibold text-white mb-6">
          {error?.message || "Something went wrong."}
        </p>
        <Link
          to='/'
          className="inline-block text-white px-6 py-3 border rounded-md shadow-md transition-colors"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
