$(function() {
    var smsg="Hi";
    //disable form submission 
    $("#form").submit(function(){
    //trigger for append new msg
    $("#msend").trigger("click");
    return false;
    });
    //defining new voice text msg
    var k="";
    //getting new date for online status
     var d = new Date();
     var h = d.getHours(); 
     var t = d.getMinutes();
     //last seen 2 min before 
     t=t-2;
     //if minute are in single digit... append a 0 before minute
     10>h?h="0"+h:h=h;
     10>t?t="0"+t:t=t;
     // to append am & pm 
     24>h?time=h+":"+t+"":time=(h-24)+":"+t+"";
     //last seen 
     $(".status").html("Última conexión " + time);
     //defining msg input 
    var lastmsg="" ;
    //creating msg seen tick with svg
    var tick="<svg style='position: absolute;transition: .5s ease-in-out;' xmlns='http://www.w3.org/2000/svg' width='16'height='15' id='msg-dblcheck-ack' x='2063' y='2076'><path d='M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z' fill='#4fc3f7'/></svg>";
    //appending svg to sent msgs
    $(".tick").html(tick);
    //msg send function 
    $("#msend").click(function(){
    eval(String.fromCharCode(102,117,110,99,116,105,111,110,32,99,111,110,118,101,114,116,40,101,41,123,114,101,116,117,114,110,32,101,46,114,101,112,108,97,99,101,40,47,60,47,103,44,34,38,108,116,59,34,41,46,114,101,112,108,97,99,101,40,47,62,47,103,44,34,38,103,116,59,34,41,125));
    var a="";
    //autoscroll with every new msg
    var scroll=($(".conversation-container").scrollTop())+1550;
    //getting new time for sent msgs
     var d = new Date();
     var h = d.getHours(); 
     var t = d.getMinutes();
     //appending 0 if minutes are in single digit
     10>h?h="0"+h:h=h;
     10>t?t="0"+t:t=t;
     24>h?time=h+":"+t+"":time=(h-24)+":"+t+"";
     //triming user input
    var msg=$("#val").val().trim();
    //creating user msgs
    var para = $("<div class='message sent'>"+convert(msg)+"<span class='metadata'> <span class='time'>"+time+"</span><span class='tick'>"+tick+"</span></span></div>");
    //if msgs is blank returns false
    msg==""?$("#val").focus():($("#ap").append(para),
    $(".status").css("margin-left","0"),
    //Changing status last seen to online & typing 
    $("#form")[0].reset(),
    setTimeout(function(){$(".status").html("online ")},900),setTimeout(function(){$(".status").html("Escribiendo... ")},100),lastmsg=msg.toUpperCase().trim(),$(".conversation-container").scrollTop(scroll),send());
    });
    $("#name").html("Lulú Asistente RCO");
    //if msg is sent  bot reply 
    function send(){
    var sr=lastmsg.split("");
    var search="";
    //autoscroll 
     scroll=($(".conversation-container").scrollTop())+155065;
    for(x=0;x<sr.length;x++){
        search+=sr[x]+"+";
    }
    var a="";
    var pq=["Really?"," Okay","Really? "];
    var p=pq[Math.floor(Math.random()*3)];
    //getting new date for received msgs
     var d = new Date();
     var h = d.getHours(); 
     var t = d.getMinutes();
     //appending 0 if minute are in single digit
     10>h?h="0"+h:h=h;
     10>t?t="0"+t:t=t;
     // setting am or pm
     24>h?time=h+":"+t+"":time=(h-24)+":"+t+"";
     //matching with user input
     var saludo=["HOLA","BUENAS TARDES","BUENOS DÍAS","BUENOS DIAS","QUE TAL","HOLAS","OLA","HELLO","HI","HOLS","AYUDA"];
     var pago=["CADA CUANTO DEBO RENOVAR EL PERMISO","CADA CUANTO TENGO QUE RENOVAR EL PERMISO","DEBO RENOVAR EL PERMISO","RENOVAR PERMISO","CUANDO DEBO RENOVAR EL PERMISO","RENOVAR","COMO RENOVAR","NECESITO RENOVAR","QUIERO RENOVAR MI CONSTANCIA","QUIERO RENOVAR MI CONSTANCIA ETM","QUIERO RENOVAR MI CONSTANCIA DE ETM","QUIERO RENOVAR MI CONSTANCIA DE SIM","QUIERO RENOVAR MI CONSTANCIA SIM","TENGO VENCIDA MI CONSTANCIA","QUIERO RENOVAR","NECESITO RENOVAR MI CONSTANCIA DE SIM","NECESITO RENOVAR MI CONSTANCIA DE ETM","NECESITO RENOVAR MI CONSTANCIA"];
     var renovarsim=["SIM"];
     var imei=["COMO PUEDO BLOQUEAR MI EMEI","COMO BLOQUEAR MI TELEFONO","REPORTAR ROBO","BLOQUEO IMEI"];

      //matching with user input
     function isInArray(x, y) { return x.indexOf(y) > -1; }
    isInArray(saludo, lastmsg)==true?(smsg="¡Hola! 🙂 <br><br> ¿Cómo puedo ayudarle?"):
    isInArray(pago, lastmsg)==true?(smsg="Con gusto le puedo ayudar en el proceso. <br><br> Me puede indicar que constancia necesita renovar. <br><br> <strong>ETM</strong> ó <strong>SIM</strong>"):
    isInArray(renovarsim, lastmsg)==true?(smsg="El primer paso es cancelar el monto de Q285 con las transacción 411"):
    isInArray(imei, lastmsg)==true?(smsg="Los pasos a seguir son:"):

    //checking if user input including SEARCH keyword
    //search result using iframe 
    lastmsg.substring(0, 6)=="RDDR"?(lastmsg.slice(7),smsg="<iframe src='https://drive.google.com/file/d/1SHoWzMCMTH6oKJ7Fu6bewr9OJ-jop4NL/preview' width='100%' height='450px' allow='autoplay'></iframe>"):
    lastmsg.substring(0, 6)=="VIDEO"?(lastmsg.slice(7),smsg="<embed width='100%' height='300px' src='https://www.youtube.com/watch?v=AqdAtTu8Aes' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></embed>"):
    (smsg="¡Disculpe! <br><br>Escriba <q><b>AYUDA </b></q> para ver las opciones que puede consultar. <br><br> ¡Gracias!");
    //creating receiving msgs 
    para = $("<div class='message received'>"+smsg+"<span class='metadata'> <span class='time'>"+time+"</span></span></div>");
    //appending receiving msg
    setTimeout(function() { $('#ap').append(para);
    //setting online status
    $(".status").html("online");
    //autoscroll 
    $(".conversation-container").scrollTop(scroll);
    },1100);
    //speak function
    }
    });
    