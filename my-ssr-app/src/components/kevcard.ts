
import * as React from 'react';
import {createComponent} from '@lit-labs/react';

import {KevCard as KevCardElement} from 'kevcard/dist/my-element.es.js';

export const KevCard = createComponent(
  React,
  'kev-card',
  KevCardElement,
  {
    
  }
);