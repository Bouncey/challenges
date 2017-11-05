import React from 'react';

const meta = [
  <meta charSet='utf-8' />,
  <meta content='ie=edge' httpEquiv='x-ua-compatible' />,
  <meta
    content='width=device-width, initial-scale=1, shrink-to-fit=no'
    name='viewport'
  />
];

module.exports = meta.map((el, i) => ({ ...el, key: i }));
