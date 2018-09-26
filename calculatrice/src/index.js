import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './app.css';

import Calculatrice from '~/components/Calculatrice';


// Ajout de l'élément virtuel dans le DOM du navigateur (mount/render).
// cible.appendChild(quoiajouter)
document.addEventListener('DOMContentLoaded', () => {
  const rootComponent =  <Calculatrice />
  const targetNode = document.getElementById('root');
  render(rootComponent, targetNode);
});