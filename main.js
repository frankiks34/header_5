window.addEventListener(("scroll"),()=>{
  document.querySelector(".home__h1").style.marginTop=`${window.scrollY *1.5}px`
    document.querySelector("#mouai1").style.marginBottom=`${106-window.scrollY}px`
    document.querySelector("#lefc").style.marginLeft=`${window.scrollY}  px`
    document.querySelector("#maic").style.marginTop=`${window.scrollY}px`
    document.querySelector("#ricl").style.marginRight=`${window.scrollY}px`

})