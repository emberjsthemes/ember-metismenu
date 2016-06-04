# Ember-metismenu

Metis menu ember component. This component implements an ember wrappen addon for the
JQuery plugin [Metis Menu](https://github.com/onokumus/metisMenu).

See details about this plugin here [http://mm.onokumus.com](http://mm.onokumus.com).

## Usage

After installing this addon simple add the component and include the items that you would like to add.

For more information see the dummy app in this addon.

```
    {{#ember-metismenu classNames="side-bar-class"}}
        <li class="active">
            <a href="#" aria-expanded="true">Menu 1</a>
            <ul aria-expanded="true">
                <li>A</li>
                <li>B</li>
                <li>C</li>
            </ul>
            </li>
            <li>
            <a href="#" aria-expanded="false">Menu 2</a>
            <ul aria-expanded="false">
                <li>A</li>
                <li>B</li>
                <li>C</li>
            </ul>
        </li>
    {{/ember-metismenu}}
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

## Copyright

This ember component was implemented by [EmberJSThemes.com](http://www.emberjsthemes.com/) and it is released under MIT license.