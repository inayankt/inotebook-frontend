import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LoaderState } from './contexts/Loader';
import { UserState } from './contexts/User';
import { ApiState } from './contexts/Api';
import { NotesState } from './contexts/Notes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserState>
        <LoaderState>
          <ApiState>
            <NotesState>
              <App />
            </NotesState>
          </ApiState>
        </LoaderState>
      </UserState>
    </BrowserRouter>
  </React.StrictMode>
);