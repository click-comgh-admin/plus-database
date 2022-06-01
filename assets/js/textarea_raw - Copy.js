(function(document, cc, FroalaEditor) {
    document.addEventListener('DOMContentLoaded', function(loaded) {
        try {
            cc._s(`[awesome_text_box]`, (textBox) => {
                const editorInstance = new FroalaEditor(textBox, {
                    enter: FroalaEditor.ENTER_P,
                    placeholderText: null,
                    charCounterMax: "2800",
                    events: {
                        initialized: function() {
                            const editor = this
                            this.el.closest('form').addEventListener('submit', function(e) {
                                console.log(editor.$oel.val())
                                e.preventDefault()
                            })
                            cc._s(`.fr-box.fr-basic.fr-top .second-toolbar`, (st) => {
                                var children = st.children;
                                for (let i = 0; i < children.length; i++) {
                                    let child = children[i];
                                    child.nodeName == "A" ? child.remove() : void 0;
                                }
                                st.className += " p-2";
                                st.insertAdjacentHTML('beforeend', `<span style="padding: 10px; float: left;color: #999;font-size: 14px;font-family: sans-serif;z-index: 1;-webkit-background-clip: padding-box;background-clip: padding-box;">Click on Horizontal Ellipsis for more Items</span></div>`);
                            });
                            cc._s(`.fr-element.fr-view`, (box) => {
                                box.style.height = "250px"
                            });
                        }
                    }
                })
            });
        } catch (error) {
            console.log(error)
        }
    }, false);
})(document, new locale(), FroalaEditor);