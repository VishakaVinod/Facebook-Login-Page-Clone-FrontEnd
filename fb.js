$(document).ready(function(){
	 var flag=0;
	var ifn=0, iln=0, iem=0, ips=0, igen=0;
    $("#sub").on("click", function(){        
        var fn = $(".fn");
		var ln = $(".ln");
		var em = $(".em");
		var ps = $(".ps");
		
		
	do{
		if( fn.val() == "")
		{   
			$("input[class=fn]").css({"borderColor":"red"});
			while( ifn === 0){
			  $("input[class=fn]").after('<img src="https://www.liver.ca/wp-content/uploads/2017/09/Risk-Red.png" width="24px" height="24px" id="imgfn" />');
			  ifn+=1;
			}
		    flag+=1; 
		}	
		if( ln.val() == "")
		{
			$("input[class=ln]").css({"borderColor":"red"});
			while( iln === 0){
			  $("input[class=ln]").after('<img src="https://www.liver.ca/wp-content/uploads/2017/09/Risk-Red.png" width="24px" height="24px" id="imgln"/>');
			  iln+=1;
			}
			flag+=1;
		}
		if( em.val() == "")
		{
			$("input[class=em]").css({"borderColor":"red"});
			while( iem === 0){
			  $("input[class=em]").after('<img src="https://www.liver.ca/wp-content/uploads/2017/09/Risk-Red.png" width="24px" height="24px" id="imgem"/>');
			  iem+=1;
			}
			flag+=1;			
		}
		if( ps.val() == "")
		{
			$("input[class=ps]").css({"borderColor":"red"});
			while( ips === 0){
			  $("input[class=ps]").after('<img src="https://www.liver.ca/wp-content/uploads/2017/09/Risk-Red.png" width="24px" height="24px" id="imgps" />');
			  ips+=1;
			}
			flag+=1;
		}
  
		if($("input[type=radio][name=gender]:checked").length===0) 
		{
			$("span[id=f]").css({ "border":"1px solid red", "padding":"7px 7px 5px 0px", "marginTop":"12px", "marginBottom":"12px", "marginRight":"-7px", "borderRadius":"7px"});
			$("span[id=m]").css({ "border":"1px solid red", "padding":"7px 7px 5px 0px", "marginTop":"12px", "marginBottom":"12px", "marginLeft":"5px", "marginRight":"220px", "borderRadius":"7px"});
			while( igen === 0){
			  $("span[id=m]").after('<img src="https://www.liver.ca/wp-content/uploads/2017/09/Risk-Red.png" width="24px" height="24px" id="imggen" />');
			  igen+=1;
			}
			flag+=1;
		}		
		
      }while(flag === 0);	
	
      if(flag === 0)
		  return true;
	  else
		  return false;
		
		
    });
	
	$("#sub").on("click", function(){
		var fn = $(".fn");
		var ln = $(".ln");
		var em = $(".em");
		var ps = $(".ps");
	
		if( fn.val() != "")
		{   
			$("input[class=fn]").css({"borderColor":"#bdc7d8"});
			$("#imgfn").remove();
			ifn-=1;
		}	
		if( ln.val() != "")
		{
			$("input[class=ln]").css({"borderColor":"#bdc7d8"});
			$("#imgln").remove();
			iln-=1;
		}
		if( em.val() != "")
		{
			$("input[class=em]").css({"borderColor":"#bdc7d8"});
			$("#imgem").remove();
			iem-=1;
		}
		if( ps.val() != "")
		{
			$("input[class=ps]").css({"borderColor":"#bdc7d8"});
			$("#imgps").remove();
			ips-=1;
		}
		if($("input[type=radio][name=gender]:checked").length != 0) 
		{
			$("span[id=f]").css({ "border":"none"});
			$("span[id=m]").css({ "border":"none"});
			$("#imggen").remove();
			igen-=1;
		}			
	
	return true;
	});		
});