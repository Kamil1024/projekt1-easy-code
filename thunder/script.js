let pointer = 0
let pointUpdated = false;
const dimensions_left = [290,530,460,680,620,975,765,815,650,700,565,290]
const dimensions_top = [205,265,285,345,360,460,325,320,250,235,150,205]
const el_span = document.getElementById("dot")
el_span.style.left = dimensions_left[0]+"px"
el_span.style.top = dimensions_top[0]+"px"
el_span.style.transitionProperty = "ease-in"
el_span.style.transition = "3s"
const mouseOver = ()=>{
    el_span.style.left = dimensions_left[pointer+1] + "px"
    el_span.style.top = dimensions_top[pointer+1] + "px"
    pointUpdated = false;
}
const mouseOut = ()=>{
    el_span.style.left = dimensions_left[pointer]  + "px"
    el_span.style.top = dimensions_top[pointer] + "px"
    pointUpdated = false;
}
const nextPoint = ()=>{
    if(!pointUpdated&&(el_span.style.left === dimensions_left[pointer+1]+'px')&&(el_span.style.top === dimensions_top[pointer+1]+'px')){
        ++pointer;
        pointUpdated = true;
        if(pointer>10){
            pointer = 0
        }
    }
}
el_span.addEventListener("mouseover",mouseOver)
el_span.addEventListener("mouseout",mouseOut)
el_span.addEventListener("webkitTransitionEnd",nextPoint)