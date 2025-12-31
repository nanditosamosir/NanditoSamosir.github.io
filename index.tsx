import React from 'react';
import ReactDOM from 'react-dom/client';
import { AskEditor } from './components/AskEditor';
import { portfolioContext } from './data';

// Pastikan halaman di-scroll ke paling atas saat dimuat/refresh
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

const editorWidget = document.getElementById('ask-editor-widget');

if (editorWidget) {
  const root = ReactDOM.createRoot(editorWidget);
  root.render(
    <React.StrictMode>
      <AskEditor portfolioContext={portfolioContext} />
    </React.StrictMode>
  );
}