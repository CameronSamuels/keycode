# KeyCODE
A developer tool for `e.keyCode` in webpages. Use this app to find out the `e.keyCode` or `e.which` value to use in your JavaScript code for keyboard events like `onkeydown`, `onkeyup`, and `onkeypress`.
## How to use
Open up <https://cameronsamuels.com/keycode> and type any key to get the keyCode.

In your JavaScript code, you can use the following for basic usage:
```javascript
document.onkeyup = function(e) {
  switch (e.keyCode || e.which) {
    case 8: alert('backspace'); //show if back key
    case 13: alert('enter'); //show if enter key
    case 32: alert('spacebar'); //show if spacebar
    default: alert('other key'); //show if none of the above
  }
  alert('Ctrl Key: ' + e.ctrlKey); //show if the ctrl key
}
```
## Contributing
If you want to contribute, you may fork this repo, and submit a pull request. Also, you can add issues in the issues tab if there is an unknown key or bug. I will really appreciate it.
## License
KeyCODE is licensed under the [Cameron Samuels License](LICENSE).
