import React from 'react';
import { Loader } from 'react-loaders';
import './styles.css';

const BallLoader = () => (
  <div className="ballLoaderBackground">
    <Loader
      type="ball-scale-multiple"
      active
    />
  </div>
);
export default BallLoader;
