import Elm from '../elm/app.elmproj'

const elm_root = document.createElement('div')

document.body.appendChild(elm_root)

Elm.Components.WidgetA.embed(elm_root)
