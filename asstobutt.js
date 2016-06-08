function assToButt(node) {
    node = node || document.body;
    if(node.nodeType == 3) {
        // Text node
        node.nodeValue = node.nodeValue.replace(/a[Ss]{2}/g,'butt');
        node.nodeValue = node.nodeValue.replace(/A[Ss]{2}/g,'Butt');
        node.nodeValue = node.nodeValue.replace(/A\.S\.S/g,'B.U.T.T');
    } else {
        var nodes = node.childNodes;
        if(nodes) {
            var i = nodes.length;
            while(i--) assToButt(nodes[i]);
        }
    }
}
document.addEventListener("DOMContentLoaded", assToButt()); 
