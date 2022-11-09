import React from 'react';
import { Canvas } from '@react-three/fiber';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Main} from './main'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Canvas >
      <Main/>
    </Canvas>
  </React.StrictMode>
);
