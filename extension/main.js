function groove_de_set_body(body){
  document.body.innerHTML = '';
  document.close();
  document.open();
  document.write(body);
  document.close();
}
function groove_de_remove_timers(){
  var maxId = setTimeout(function(){}, 0);
  for(var i=0; i < maxId; i++) {
    clearTimeout(i);
  }
}
// dont run on googleCallback.php
if(!groove_de_run && window.location.pathname.indexOf('googleCallback.php') == -1){
  var groove_de_run = true;
  groove_de_set_body('loading...');
  groove_de_remove_timers();
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://PUTYOURAPPIDHERE.appspot.com", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if(xhr.status == 200)
          groove_de_set_body(xhr.responseText);
        else
          alert('Grooveshark Germany unlocker failed!');
      }
    };
    xhr.send();
}
