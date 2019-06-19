

var Sou=document.getElementsByClassName('sou')[0];
		var Suoou=document.getElementsByClassName('suoou')[0];
		var Qx=document.getElementById("qx");
		Sou.onclick=function(e)
		{
			e.preventDefault();
			Sou.style.background="#fff";
			Suoou.style.display="block";
		}
	    Qx.onclick=function(e)
	    {
	    	e.stopPropagation();
	    	e.preventDefault();
	    	Suoou.style.display="none";
	    	Sou.style.background="#eee";
		}
		var uls=document.getElementById("lb");
		var Li=uls.getElementsByTagName("li");
		var timer=null;
		var num=0;
		var Olist=document.getElementsByClassName("olist")[0];
		var Span=Olist.getElementsByTagName("span");
		timer=setInterval(f1,2000);
		var Lunbo=document.getElementsByClassName("lunbo")[0];
		Lunbo.onmouseover=function(){
			clearInterval(timer);
		}
		Lunbo.onmouseout=function(){
			timer=setInterval(f1,2000);
		}
		function f1(){
			num++;
			if(num==Li.length){num=0;}
			for(var i=0;i<Li.length;i++){
				Li[i].id="";
				Span[i].id="";
			}
			Li[num].id="first";
			Span[num].id="cur";
		}
		for(var i=0;i<Li.length;i++){
			Span[i].index=i;
			    Span[i].onmouseover=function(){
					for(var j=0;j<Span.length;j++)
					{
						Li[j].id="";
						Span[j].id="";
					}
					num=this.index;
					Span[num].id="cur";
					Li[num].id="first";
				}
			}
			
		// function f3()
		// {
		// 	var date1=new Date();
		// 	var date2=new Date(2019,5,5,6,0,0);
		// 	var t=date2-date1;
		// 	var s=Math.floor(t/1000);
		// 	var shi=Math.floor(s/3600);
		// 	var fen=Math.floor(s%86400%3600/60);
		// 	var miao=Math.floor(s%60);
		// 	var Cdjs=document.getElementsByClassName("clockdjs")[0];
		// 	var Span=Cdjs.getElementsByTagName('span');
		// 	Span[0].innerHTML=f2(shi);
		// 	Span[1].innerHTML=f2(fen);
		// 	Span[2].innerHTML=f2(miao);
		// }
		// function f2(n)
		// {
		// 		return n<10 ? "0"+n : ""+n;
		// }
		// f3();
		// setInterval(f3,1000);