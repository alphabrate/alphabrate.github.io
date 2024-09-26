=metadata=
title = PopupJS: Functions
author = AlphaBrate
date = 30 Aug 2024
=metadata=

## Alerts

* `pujs.alert(message, type, timeout, selectable, options = {})`: Display an alert message with an icon and optional callback.
+ `message` [String]: The alert message to display.
+ `type` [String]: The type of alert (error, success, etc.).
+ `timeout` [Integer]: The time in milliseconds to display the alert.
+ `selectable` [Bool]: Whether the alert text is selectable.

```javascript
pujs.alert(Message, Type, Duration, User-Selectable);
```

## Popups

* `pujs.popup(title, message, buttons, buttonType, input, options = {})`: Create a modal popup with a title, message, and buttons.
+ `title` [String]: The title of the popup.
+ `message` [String]: The message to display in the popup.
+ `buttons` [Array]: An array of button objects with text and callback properties.
  
```js
[
    { text: 'Action 1', callback: function() { }, color: '[OPTIONAL]' },
    { text: 'Action 2', callback: function() { } }
]
```

+ `buttonType` [String]: The type of buttons to display (vert or horiz).
+ `input` [JSON]: An optional input field to include in the popup.

```js
{
    type: 'text',
    placeholder: 'Enter your name',
    value: 'John Doe'
}
```

> The value of input fields will be returned in the callback function.

## Pull-Outs

* `pujs.pullOut(html, scroll, id, options = {})`: Create a pull-out notification with customizable HTML content.
+ `html` [String]: The HTML content to display in the pull-out.
+ `scroll` [Bool]: Whether the content of the pull-out should be scrollable.
+ `id` [String]: An optional ID to assign to the pull-out element.

## Banners

* `pujs.lastingBanner(html, type, pos, buttons, id, options = {})`: Create a banner notification that remains visible until dismissed.
+ `html` [String]: The HTML content to display in the banner.
+ `type` [String]: The type of banner (error, success, etc.).
+ `pos` [String]: The position of the banner (top or bottom).
+ `buttons` [Array]: An array of button objects with text and callback properties.
  
```js
[
    { text: 'Action 1', callback: function() { }, color: '[OPTIONAL]' },
    { text: 'Action 2', callback: function() { } }
]
```

+ `id` [String]: An optional ID to assign to the banner element.
+ `options` [JSON]: Additional options for the banner.

```js
{
    duration: 5000,
}
```

<br>
<hr>

<h2 class="center">Continue Reading</h2>


<a href="?article=more-examples" class="center no-margin"><button>More Examples</button></a>

<br>

<div class="space-break dots" data-height="4"></div>

## In this Manual

- [Quick Start](?article=index)
- [Functions](?article=functions) ◀
- [More Examples](?article=more-examples)
- [About This Project](?article=project)