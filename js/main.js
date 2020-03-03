function reset () {
    let r = window.editormd.$marked.Renderer;
    let s = window.editormd.$marked.setOptions;
    window.editormd.$marked = function (src, opt, callback) { return rs_render(src) };
    window.editormd.$marked.Renderer = r;
    window.editormd.$marked.setOptions = s;
}


const config = {
    width: "100%",
    height: "100%",
    delay: 100,//ms
    syncScrolling: "single",
    path: "https://cdn.jsdelivr.net/npm/editor.md@1.5.0/lib/",
    placeholder: "Enjoy Notedown!",
    toolbarIcons: function () {
        return ["undo", "redo", "|", "watch", "preview"]
    },
    onload: function () {
        //console.log('onload', this);
        this.fullscreen();
        this.unwatch()
        reset()
        this.watch()
        MathJax.typeset()
    },
    onchange: function () {
        MathJax.typeset()
    }
}


$(function () { editormd("notedown_editor", config) });

