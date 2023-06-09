# Testing

Return back to the [README.md](README.md) file.

## Code Validation


### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdmp-86.github.io%2Fquizzical%2F) | ![screenshot](images/w3cverify1.png) | Pass: No Errors |
| Game| [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdmp-86.github.io%2Fquizzical%2Fgame.html) | ![screenshot](images/w3cverify2.png) | Initial error - Section lacks text in heading. No action necessary as this doesn't effect the game. End result: Pass: No Errors |


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.


| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdmp-86.github.io%2Fquizzical%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#warnings) | ![screenshot](images/cssverify1.png) | Pass: No Errors |
| game.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdmp-86.github.io%2Fquizzical%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#warnings) | ![screenshot](images/cssverify2.png) | Pass: No Errors |

## Browser Compatibility

I have tested the live deployed site on the following browsers to check for compatibility issues:

- [Chrome](https://www.google.com/chrome)
- [Firefox (Developer Edition)](https://www.mozilla.org/firefox/developer)
- [Edge](https://www.microsoft.com/edge)


I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](images/chrome.png) | Works as expected |
| Firefox | ![screenshot](images/firefoxdev.png) | Minor CSS issues in result section  |
| Edge | ![screenshot](images/edge.png) | Works as expected |




## Lighthouse Audit


I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.
My first test produced some performance issues due to chrome extensions (see screenshot below). To negate further performance issues, I ran Lighthouse Audits in Incognito mode. 

| Page | Size | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | Desktop | ![screenshot](images/lighthousemain.png) | No issues |
| Home | Mobile | ![screenshot](images/lighthousemainmobile.png) | No issues |
| Game  | Desktop | ![screenshot](images/lighthousequiz.png) | No issues |
| Game | Mobile | ![screenshot](images/lighthousegamemobile.png) | A minor warning on performance |


## Bugs



## Unfixed Bugs

Styling issues in results section in a firefox Dev browser
