import React from 'react';

const Icons = ({ icons }) =>
  icons.map((icon) => (
    <icon.Icon key={icon.name} style={{ width: ' 100px', margin: '10px' }} />
  ));

export default Icons;
