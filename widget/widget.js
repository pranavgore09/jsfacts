

function createFrame() {
    var frame = document.createElement('div');
    frame.id = "fdb"
    frame.style.bottom = 0;
    frame.style.right = 0;
    frame.style.position = "fixed";

    var lbl = document.createElement('label')
    lbl.appendChild(document.createTextNode('Your email'))
    var inp = document.createElement('input')
    inp.type = "text"
    frame.appendChild(lbl)
    frame.appendChild(inp)

    var lbl2 = document.createElement('label')
    lbl2.appendChild(document.createTextNode('Feedback'))
    var txt_area = document.createElement('textarea')
    frame.appendChild(lbl2)
    frame.appendChild(txt_area)

    var btn = document.createElement('button')
    btn.value="send out"
    btn.appendChild(document.createTextNode('Send!'))
    frame.appendChild(btn)

    return frame
}

(function foo(){
    document.body.appendChild(createFrame())
})()
