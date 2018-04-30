# Subliminal [NOT RELEASED YET]

**Subliminal** is an opinionated minimalistic VS Code theme that is very loosely based on [Oceanic Next](https://github.com/voronianski/oceanic-next-color-scheme) and [Spacegray](https://github.com/kkga/spacegray). See [Credits](#credits) for a detailed lineage.

![Screenshot](https://i.imgur.com/LOA6KW8.png)

## Disclaimer

I’m just sharing what works for me. I’m an engineer and not a graphic designer.

This theme is intentionally focused on a small subset of VS Code features that I use (basic editing, file tree, and debugger) and may not work well in other scenarios. However, I’ll happily take changes that respect the design intention but fix rough edges in parts I didn’t polish (e.g. viewing diffs, terminal, or search).

The theme is intentionally [very opinionated](https://mobile.twitter.com/dan_abramov/status/990768800717996032) and we may disagree about some of its choices. Philosophically, it owes some inspiration to [Alabaster](https://github.com/tonsky/vscode-theme-alabaster) and [White](https://github.com/arthurwhite/white-theme-vscode). I love colors though.

The config is pretty hacky and was only tested with [Sublime Babel](https://github.com/joshpeng/Sublime-Babel-VSCode) syntax. The theme is probably horribly broken with other languages (even JSON or CSS). Pull requests to fix this that adhere to the theme’s JS look and feel are welcome.

## More Than a Theme

To me, this isn’t just a theme, but an attempt to recreate a more minimalistic experience that I’m used to from Sublime Text. I suggest using these settings for the intended effect:

```js
{
    // ...
    "editor.fontSize": 18,
    "editor.folding": false,
    "editor.hideCursorInOverviewRuler": true,
    "editor.lineHeight": 26,
    "editor.lineNumbers": "off",
    "editor.matchBrackets": false,
    "editor.minimap.enabled": false,
    "editor.occurrencesHighlight": false,
    "editor.overviewRulerBorder": false,
    "editor.renderIndentGuides": false,
    "editor.renderLineHighlight": "none",
    "editor.scrollbar.horizontal": "hidden",
    "explorer.openEditors.visible": 0,
    "window.zoomLevel": 0,
    "workbench.activityBar.visible": false,
    "workbench.colorTheme": "Subliminal",
    "workbench.iconTheme": null,
    "workbench.editor.showIcons": false,
    "workbench.statusBar.visible": false,
}
```

Note this will hide Status Bar and Activity Bar because I don’t use them.  
I suggest to memorize these shortcuts instead:

* <kbd>shift</kbd> + <kbd>command</kbd> + <kbd>E</kbd> for Explorer (file tree).  
* <kbd>shift</kbd> + <kbd>command</kbd> + <kbd>D</kbd> for Debugger.  
* <kbd>command</kbd> + <kbd>B</kbd> to show and hide the left pane.

Since we turned off Code’s default matching brackets highlighting, install [this extension](https://marketplace.visualstudio.com/items?itemName=rafamel.subtle-brackets) that does it better.

Furthermore, to reduce the noise I prefer to turn off some features:

```js
{
    // ...
    "javascript.validate.enable": false,
    "editor.suggestOnTriggerCharacters": false,
    "editor.parameterHints": false,
    "editor.quickSuggestions": false,
    "editor.hover": false,
}
```

Your mileage may vary.

## Going a Step Further

If you don’t mind potentially breaking your VS Code setup beyond the point of recovery, I recommend trying [this extension](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css) with the following custom CSS:

```css
.title-actions > .monaco-toolbar > .monaco-action-bar > .actions-container > .action-item > .action-label.icon.explorer-action {
  display: none !important;
}
.editor-actions > .monaco-toolbar > .monaco-action-bar {
  display: none !important;
}
```

This will remove the icon buttons on panels.

You may notice VS Code isn’t very happy about you overriding its CSS. You can remove the warning from title bar with [this extension](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-no-unsupported).

Don’t say I didn’t warn you everything might break.

## Credits

Forked from [this theme](https://github.com/marioterron/one-dark-bimbo-theme) which is itself based on [these](https://github.com/pawelgrzybek/bimbo-theme) [two](https://github.com/Binaryify/OneDark-Pro) themes. Most of the original credit goes to the [Oceanic Next](https://github.com/voronianski/oceanic-next-color-scheme) color scheme by [Dmitri Voronianski](https://github.com/voronianski). I ended up changing most colors and their mappings quite significantly though.

Philosophically, it owes some inspiration to [Alabaster](https://github.com/tonsky/vscode-theme-alabaster) and [White](https://github.com/arthurwhite/white-theme-vscode). I love colors though.

The UI chrome styling is inspired by [Spacegray](https://github.com/kkga/spacegray) by [Gadzhi Kharkharov](https://github.com/kkga) although my theme is much more sloppy. If you can make it less sloppy and more in the spirit of the original, send a PR.

## License

MIT
