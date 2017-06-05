# KeyCODE
A JavaScript developer tool for finding keyboard key codes for web applications.

## How to use
Open up [http://cameronsamuels.com/keycode](http://cameronsamuels.com/keycode) and type any key to get the key code value.

In your JavaScript code you can put the following code for basic usage:

```javascript
document.onkeydown = function(e) {
  switch (e.keyCode || e.which) {
    case 8 /* backspace */: alert('backspace');
    case 13 /* enter */: alert('enter');
    case 32 /* spacebar */: alert('spacebar');
    default /* none of the above */: alert('other key');
  }
  alert('Ctrl Key: ' + e.ctrlKey); //e.ctrlKey; e.altKey; e.shiftKey; e.metaKey;
}
```

## About
Made by [Cameron Samuels](http://cameronsamuels.com) in June 2017 using JavaScript, HTML, and CSS.
<br />
I used <a href="http://brackets.io">Adobe Brackets</a> for the code editor, GitHub & SourceTree for the source control, and Chrome on Lenovo & Windows 7.
