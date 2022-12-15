 	var text= document.createElement("p");
	text.style.textAlign = "center";
	text.style.font="initial";
    text.style.font="italic nold 20px arial ";
    document.body.appendChild(text);
	text.innerHTML="REVERSE STRING PROGRAM";
	document.write("<br/>", "<br/>");
	
	
	var input1=document.createElement("INPUT");
	input1.setAttribute("type","text");
	input1.setAttribute("placeholder","Enter a number:");
	input1.setAttribute("id","sam");
	input1.style.backgroundColor="palegreen";
	input1.style.height="60px";
	input1.style.width="270px";
	input1.style.border="10px solid red";
	document.body.appendChild(input1);
	document.write('<br/>','<br/>.');
	

	

	
	document.body.style.backgroundColor="orchid";
	document.body.style.textAlign="center";
	document.body.style.paddingTop="290px";
	
	button=document.createElement("button");
	button.setAttribute("onclick","deep()");
	button.innerText="start";
	//button.style.backgroundColor="aqua";
	//button.style.height="30px";
	//button.style.width="70px";
    document.body.appendChild(button)
	
	function deep()
	{
		
    button=document.createElement("button");
	button.setAttribute("onclick","sub()");
	button.innerText="Click";
	//button.style.backgroundColor="aqua";
	//button.style.height="30px";
	//button.style.width="70px";
    document.body.appendChild(button)
	}
	
	

   
   


   function sub()
{
var value1=document.getElementById("sam").value;
 while(value1>0){
     rem=value1%10
     value1=(value1-rem)/10
     if (rem==1)
	 {
		 document.write("one");
	 }
	 else if (rem==2)
	 {
		 document.write("two")
	 }
	 else if (rem==3)
	 {
		 document.write("three")
	 }
	 else if (rem==4)
	 {
		 document.write("four")
	 }
	 else if (rem==5)
	 {
		 document.write("five")
	 }
	 else if (rem==6)
	 {
		 document.write("six")
	 }
	 else if (rem==7)
	 {
		 document.write("seven")
	 }
	 else if (rem==8)
	 {
		 document.write("eight")
	 }
	 else if (rem==9)
	 {
		 document.write("nine")
	 }
	 else
	 {
		 document.write("zero")
	 }
 }
 document.body.style.backgroundColor="turquoise";
 document.body.style.textAlign="center";
 document.body.style.padding="250";


 
}


