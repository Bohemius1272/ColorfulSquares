window.onload=function(){
    var add= document.getElementById("add");
    add.onclick = addSquare;
    var squareCount = parseInt(Math.random() * 21) + 30;
    for (let i = 0; i < squareCount; i++) {
        addSquare();
    }
}
function getRandomColor(){
    var possibilities = "0123456789ABCDEF";
    var result="#";
    for(var i = 0; i < 6; i++)
    {
        result+=possibilities.charAt(parseInt(
            Math.random()*possibilities.length));
    }
    return result;
}
function addSquare() {
    var squarearea = document.getElementById("squarearea");
    var newSquare = document.createElement("div");
        newSquare.className="square";
        var size = Math.floor(Math.random() * (55 - 45 + 1)) + 45;
        newSquare.style.width=size + "px";
        newSquare.style.height = size + "px";
        var containerWidth = squarearea.clientWidth || 700;
        var containerHeight = squarearea.clientHeight || 300;
        var maxLeft = Math.max(0, containerWidth - size - 4);
        var maxTop = Math.max(0, containerHeight - size - 4);
        newSquare.style.left = parseInt(Math.random()*651)+"px";
        newSquare.style.top = parseInt(Math.random()*251)+"px";
        newSquare.style.backgroundColor=getRandomColor();
        newSquare.style.zIndex = 0;



        newSquare.onclick = function (e) {
            var currentZ = parseInt(this.style.zIndex) || 0;
            if (currentZ === highestZ) {
                var self = this;
                this.classList.add('removing');
                var removed = false;
                function doRemove() {
                    if (removed) return;
                    removed = true;
                    if (self.parentNode) self.parentNode.removeChild(self);
                }
                this.addEventListener('transitioned', function te(e){
                    if (e.propertyName === 'opacity') {
                        doRemove();
                        self.removeEventListener('transitioned', te);
                    }
                });
                setTimeout(doRemove, 300);
            }
            else {
                highestZ++;
                this.style.zIndex = highestZ;
            }
        };
        squarearea.appendChild(newSquare);
}

function changeColors() {
    var squares = document.querySelectorAll('.square');
    squares.forEach(function(sq){
        sq.style.backgroundColor = getRandomColor;
    });
}