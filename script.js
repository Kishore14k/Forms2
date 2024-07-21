const forms=document.querySelector('.forms')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')

forms.addEventListener('submit',(e)=>{
    if(!validateforms()){
        e.preventDefault()
    }
})

function validateforms(){
    const usernameval=username.value.trim()
    const emailval=email.value.trim()
    const passwordval=password.value.trim()
    const cpasswordval=cpassword.value.trim()
    let success=true

    if(usernameval===""){
        success=false
        seterror(username,"*This field is required")
    }else{
        setsuccess(username)
    }

    if(emailval===""){
        success=false
        seterror(email,"*This field is required")
    }else if(!validemail(emailval)){
        success=false
        seterror(email,"*Enter a valid Email")
    }else{
        setsuccess(email)
    }

    if(passwordval===""){
        success=false
        seterror(password,"*This field is required")
    }else if(passwordval.length<8){
        success=false
        seterror(password,"*Password is short")
    }else{
        setsuccess(password)
    }

    if(cpasswordval===""){
        success=false
        seterror(cpassword,"*This field is required")
    }else if(cpasswordval!==passwordval){
        success=false
        seterror(cpassword,"*Password doesn't match")
    }else{
        setsuccess(cpassword)
    }

    return success
}

function seterror(element,msg){
    const fdetails=element.parentElement
    const err=fdetails.querySelector('.errmsg')

    err.textContent=msg
    fdetails.classList.add('error')
    fdetails.classList.remove('success')
}

function setsuccess(element){
    const fdetails=element.parentElement
    const err=fdetails.querySelector('.errmsg')

    err.textContent=""
    fdetails.classList.add('success')
    fdetails.classList.remove('error')
}

function validemail(email){
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}