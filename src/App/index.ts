import { Component, ref } from 'nefbl'
import urlFormat from '../tool/urlFormat'

import style from './index.scss'
import template from './index.html'

import pages from './pages/lazy-load'

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    currentPage: any

    $setup() {
        return {
            currentPage: ref(null)
        }
    }

    $mounted() {
        let urlObj = urlFormat(window.location.href)
        pages[urlObj.router[0] in pages ? urlObj.router[0] : "standards"]().then(data => {
            this.currentPage = data.default
        })
    }

}
