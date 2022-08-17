function carregar (){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById("imagem")
var data=new Date()
//var hora = data.getHours()
var hora=1
msg.innerHTML=`agora sao ${hora} horas`

if (hora>= 0 && hora<12){
    img.src="foto1.png"
    document.body.style.background="#F5F5DC"
}else if(hora >=12 && hora<18){
    img.src="foto2.png"
    document.body.style.background="#F0E68C"
}else{
    img.src="foto3.png"
    document.body.style.background="	#696969"
}





}
