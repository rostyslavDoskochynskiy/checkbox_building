function absCoords(elem){
    var obj = elem.getBoundingClientRect();
    return{
        left: obj.left + pageXOffset
    }
}

window.onload = function (){
    var field = document.getElementById("field");
    var check = document.getElementById("check");
    check.onclick = function (event){
        var shiftX = event.pageX - absCoords(this).left;
        var fieldShift = absCoords(field).left;
        var fieldWidth = field.offsetWidth;
            var tumblerCoords = event.pageX - shiftX - fieldShift;
            if(tumblerCoords < 0) tumblerCoords = 0;
            var rightSideField = fieldWidth - check.offsetWidth;
            if(tumblerCoords > rightSideField) tumblerCoords = rightSideField;
            this.style.marginLeft = rightSideField + "px";
            if(event.pageX > fieldWidth || event.pageX < 8)
                document.onmousemove = null;
            this.addEventListener("click",function (){
                this.style.marginLeft = "";
            });
    }
};





