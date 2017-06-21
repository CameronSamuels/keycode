# KeyCODE
A JavaScript developer tool for finding keyboard key codes for web applications.

## How to use
Open up [http://cameronsamuels.com/keycode](http://cameronsamuels.com/keycode) and type any key to get the key code value.

In your JavaScript code you can put the following for basic usage:

```javascript
document.onkeyup = function(e) {
  switch (e.keyCode || e.which) {
    case 8 /* backspace */: alert('backspace'); break;
    case 13 /* enter */: alert('enter'); break;
    case 32 /* spacebar */: alert('spacebar'); break;
    default /* none of the above */: alert('other key'); break;
  }
  alert('Ctrl Key: ' + e.ctrlKey); //e.ctrlKey; e.altKey; e.shiftKey; e.metaKey;
}
```
## Apps
I offer a [Chrome app](https://goo.gl/eQfc6p) currently, and soon I will release an Android and iOS app. Other platforms may come.

## Contributing
If you want to contribute, you may fork this repo or you can add issues in the issues tab if there is an uknown key or something. I really appreciate it.

## About
Made by [Cameron Samuels](http://cameronsamuels.com) in June 2017 using JavaScript, HTML, and CSS.
<br />
I used <a href="http://brackets.io">Adobe Brackets</a> for the code editor.
