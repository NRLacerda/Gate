//setTimeout refresh(() => { // Essa função recarrega a pagina a cada 2 min. setTimeout(() => {
//    document.location.reload();
//}, 5000);

form.onclick = function(event) {
    event.target.style.backgroundColor = 'yellow';
  
    // chrome needs some time to paint yellow
    setTimeout(() => {
      alert("target = " + event.target.tagName + ", this=" + this.tagName);
      event.target.style.backgroundColor = ''
    }, 0);
  };

function deloit(){ 
    alert("Post deletado!")
}

