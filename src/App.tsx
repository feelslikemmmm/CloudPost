import { useRoutes } from 'react-router-dom';
import { routes } from '@/pages/route';

function App() {
  const elem = useRoutes(routes);
  return elem;
}

export default App;
