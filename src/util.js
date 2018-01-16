import markdownit from 'markdown-it'
import hljs from 'highlight.js'

hljs.configure({
    classPrefix: 'hljs-'
})

hljs.initHighlighting()

export default {
    createHtmlFromMarkdown(postContent) {
        const md = new markdownit({
            highlight (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return hljs.highlight(lang, str).value;
                    } catch (__) { }
                }
                return '';
            }
        })
        const content = md.render(postContent)
        return { __html: content }
    }
}