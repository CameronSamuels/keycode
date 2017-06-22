var c = {
  3 : "break",
  8 : "backspace",
  9 : "tab",
  12 : 'clear',
  13 : "enter",
  16 : "shift",
  17 : "ctrl",
  18 : "alt",
  19 : "pause/break",
  20 : "caps lock",
  27 : "escape",
  32 : "spacebar",
  33 : "page up",
  34 : "page down",
  35 : "end",
  36 : "home",
  37 : "left arrow",
  38 : "up arrow",
  39 : "right arrow",
  40 : "down arrow",
  41 : "select",
  42 : "print",
  43 : "execute",
  44 : "print sreen",
  45 : "insert",
  46 : "delete",
  47 : "toggle touchpad",
  48 : "0",
  49 : "1",
  50 : "2",
  51 : "3",
  52 : "4",
  53 : "5",
  54 : "6",
  55 : "7",
  56 : "8",
  57 : "9",
  58 : ":",
  59 : "equals, semicolon (firefox)",
  60 : "<",
  63 : "ß",
  65 : "a",
  66 : "b",
  67 : "c",
  68 : "d",
  69 : "e",
  70 : "f",
  71 : "g",
  72 : "h",
  73 : "i",
  74 : "j",
  75 : "k",
  76 : "l",
  77 : "m",
  78 : "n",
  79 : "o",
  80 : "p",
  81 : "q",
  82 : "r",
  83 : "s",
  84 : "t",
  85 : "u",
  86 : "v",
  87 : "w",
  88 : "x",
  89 : "y",
  90 : "z",
  91 : "meta key",
  92 : "right window key",
  93 : "menu / right meta",
  96 : "numpad 0",
  97 : "numpad 1",
  98 : "numpad 2",
  99 : "numpad 3",
  100 : "numpad 4",
  101 : "numpad 5",
  102 : "numpad 6",
  103 : "numpad 7",
  104 : "numpad 8",
  105 : "numpad 9",
  106 : "multiply",
  107 : "add",
  109 : "subtract",
  110 : "decimal point",
  111 : "divide",
  112 : "f1",
  113 : "f2",
  114 : "f3",
  115 : "f4",
  116 : "f5",
  117 : "f6",
  118 : "f7",
  119 : "f8",
  120 : "f9",
  121 : "f10",
  122 : "f11",
  123 : "f12",
  124 : "f13",
  125 : "f14",
  126 : "f15",
  127 : "f16",
  128 : "f17",
  129 : "f18",
  130 : "f19",
  131 : "f20",
  132 : "f21",
  133 : "f22",
  134 : "f23",
  135 : "f24",
  144 : "num lock",
  145 : "scroll lock",
  160 : "^",
  161: '!',
  163 : "#",
  164: '$',
  165: 'ù',
  166 : "page backward",
  167 : "page forward",
  169 : "closing paren (AZERTY)",
  170: '*',
  171 : "~ + * key",
  173 : "mute/unmute, minus (firefox)",
  174 : "decrease volume level",
  175 : "increase volume level",
  176 : "next",
  177 : "previous",
  178 : "stop",
  179 : "play/pause",
  180 : "e-mail",
  186 : "semi-colon",
  187 : "equal sign",
  188 : "comma",
  189 : "dash",
  190 : "period",
  191 : "forward slash",
  192 : "grave accent",
  193 : "?, / or °",
  194 : "numpad period (chrome)",
  219 : "open bracket",
  220 : "back slash",
  221 : "close bracket",
  222 : "single quote",
  223 : "`",
  225 : "altgr",
  226 : "< /git >",
  230 : "GNOME Compose Key",
  231 : "ç",
  233 : "XF86Forward",
  234 : "XF86Back",
  251 : "toggle touchpad",
  255 : "toggle touchpad"
}, $ = function(i) { return document.querySelector(i) }, d=0;
function p(e) { e.preventDefault();d=0 }
function k(e) {
	e.preventDefault();
	var l = e.keyCode || e.which;
	if ((l == 16 || l == 17 || l == 18 || l == 91) && d) return;
	$('v').innerHTML = l;
	$('m').innerHTML = "<br /><k>" + c[l] + "</k><br />";
	if (d) {
		if (e.shiftKey) $('m').innerHTML += '<k title="e.shiftKey == \'true\'">shift</k>';
		if (e.ctrlKey) $('m').innerHTML += '<k title="e.ctrlKey == \'true\'">ctrl</k>';
    if (e.metaKey) $('m').innerHTML += '<k title="e.metaKey == \'true\'">meta</k>';
		if (e.altKey) $('m').innerHTML += '<k title="e.altKey == \'true\'">alt</k>';
	}
	if (!k)	$('v').innerHTML = '<a href="#">?</a>';
	d = 1;
}
document.onkeydown = k, document.onkeyup = p, document.oncontextmenu = function(e) { e.preventDefault() };
