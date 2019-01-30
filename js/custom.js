var contact=document.getElementsByClassName("js-btn")[0];
var form=document.getElementsByClassName("js-hide")[0];
contact.onclick=function(){
    if (form.className=="js-hide"){
        form.className="js-active"
    }
    else(form.className="js-hide");
}