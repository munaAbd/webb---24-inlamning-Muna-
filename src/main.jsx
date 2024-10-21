import { createRoot } from 'react-dom/client';
import App from './ app';  // Importera huvudkomponenten

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(<App />);
