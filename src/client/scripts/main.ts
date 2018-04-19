import Elm from '../elm/app.elmproj'
import * as _ from 'lodash'

export function foo() {
   console.log(Elm, _.find([1], 1))
}
