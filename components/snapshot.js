import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
console.log('snapshot ok');

//export default function TakeSnapshot() {
export default () => {
    useEffect(() => {
        window.jQuery = require('../public/jquery-latest.min');
        console.log('version:' + window.jQuery().jquery);
        console.log('eeeee');
        window.jQuery("#demo").html('hola');
    }, []);
    return (
    <div>
      <div id="demo">Hello</div>
    </div>
  );
}
