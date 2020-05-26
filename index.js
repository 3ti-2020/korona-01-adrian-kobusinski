console.log("okej")

const APP = {

    td : document.getElementById("test"),

    myEnterMouse: function(){
        this.td.addEventListener('mouseenter', function(){
            APP.td.style.cursor="pointer";
            APP.td.style.background="#FFFFA3";
            APP.td.style.background="#FFFFFF";
        });
    },

    myMouseLeave: function(){
        this.td.addEventListener('mouseleave', function(){
            APP.td.style.cursor="deafult";
            APP.td.style.background="";
            APP.td.style.background="";
    });
},

    init: function(){
        this.myEnterMouse();
        this.myMouseLeave();
    }
}