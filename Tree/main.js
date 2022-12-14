import Tree from "./webModule.js"
let mouseDown = false
let xNav = 0;
let yNav = 0;

let tree = new Tree()
tree.addItem(80);
tree.addItem(84);
tree.addItem(82);
tree.addItem(70);
tree.addItem(75);
tree.addItem(72);
tree.addItem(71);
tree.addItem(74);
tree.addItem(60);
tree.addItem(50);
tree.addItem(55);


// console.log(tree.toString())
// console.log(tree.deleteRoot(70));
function drawRight(node){
    if (node === null) {
        return ''
    }
    // if (node === null) {
    //     return  _.template(`
    //         <div class="node-right"></div>
    //     `)()
    // }

    return  _.template(`
            <div class="node-right">`+drawNode(node)+`</div>
    `)()
}
function drawLeft(node){
    if (node === null) {
        return ''
    }
    // if (node === null) {
    //     return  _.template(`
    //         <div class="node-left"></div>
    //     `)()
    // }
    return  _.template(`
            <div class="node-left">`+drawNode(node)+`</div>
    `)()
}
function drawNode(node){
    if (node == null) {
        return _.template(`
        <div class="node">
            <div class="node-value">null</div>
        </div>
    `)()
    }
    return _.template(`
        <div class="node">
            <div class="node-value">`+ node.value +`</div>
            `+ drawRight(node.right)+`
            `+ drawLeft(node.left)+`

        </div>
    `)()
}
let treeHTML = document.querySelector('.tree')

function drawTree(){
    let treeObj = tree.toObject()
    let tr = _.template(`
    <div class="tree">
       `+ drawNode(treeObj)+`
    </div>
    `)
    document.querySelector('.treeView').innerHTML = (tr())
    treeHTML = document.querySelector('.tree')
    Object.assign(treeHTML.style, {
        transform: 'translate('+xNav+'px,'+yNav+'px)'
    })
}
drawTree()


let zoomInBtn = document.querySelector('#zoomIn')
let zoomOutBtn = document.querySelector('#zoomOut')
let clearTreeBtn = document.querySelector('#clearTree')
let addNumBtn = document.querySelector('#addNum')
let removeNumBtn = document.querySelector('#removeNumBtn')
let removeNumInput = document.querySelector('#removeNumInput')
let addNumInput = document.querySelector('#Num')
let treeView = document.querySelector('.treeView')
let scale = 4
treeView.style.transform = 'scale('+scale+')';

zoomInBtn.addEventListener('click', ()=>{
    scale = scale * 1.2
    treeView.style.transform = 'scale('+scale+')';

})
zoomOutBtn.addEventListener('click', ()=>{
    scale = scale / 1.2
    if (parseFloat(treeView.style.zoom) <= 1) return
    treeView.style.transform = 'scale('+scale+')';
})

clearTreeBtn.addEventListener('click', ()=>{
    tree = new Tree()
    drawTree()
})
addNumBtn.addEventListener('click',()=>{
    tree.addItem(parseFloat(addNumInput.value))
    drawTree()
})
removeNumBtn.addEventListener('click', ()=>{
    tree.deleteRoot(parseFloat(removeNumInput.value))
    drawTree()
})

// navigations

document.querySelector('main').addEventListener('mousedown', ()=>{
    mouseDown = true
})
document.addEventListener('mouseup', ()=>{
    mouseDown = false
})
document.querySelector('main').addEventListener('mousemove', (e)=>{
    if (!mouseDown) return
    xNav +=e.movementX/scale;
    yNav +=e.movementY/scale;
    Object.assign(treeHTML.style, {
        transform: 'translate('+xNav+'px,'+yNav+'px)'
    })
})
document.addEventListener('wheel',(e)=>{
    if (e.deltaY < 0) zoomInBtn.click()
    if (e.deltaY > 0) zoomOutBtn.click()
})