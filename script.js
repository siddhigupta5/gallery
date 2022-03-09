function upDate(previewPic){
 
   document.querySelector("#image").style.backgroundImage ="url('"+ previewPic.src +"')";
  document.querySelector("#image").innerHTML=previewPic.alt;
	}

	function unDo(){
     document.querySelector("#image").style.backgroundImage ="url('')";
document.querySelector("#image").innerHTMl="Hover over an image below to display here.";
	}