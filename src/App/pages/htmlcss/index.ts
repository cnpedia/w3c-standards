import { Component } from 'nefbl'

import style from './index.scss'
import template from './index.html'

@Component({
    template,
    styles: [style]
})
export default class {

    $mounted() {
        document.getElementsByTagName('title')[0].innerText = "HTML & CSS - W3C"
    }

}
