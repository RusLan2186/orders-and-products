interface PageLoaderProps {
  message?: string;
}

export const PageLoader = ({ message = "Loading..." }: PageLoaderProps) => (
  <div className="page-loader">{message}</div>
);
