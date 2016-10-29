$(function(){
	var box=$('.B-bettow')[0];
	var img=$('.banner-img');
	var lis=$('.Yuan-lii');
	var width=parseInt(getStyle(box,'width'));
	var left=$('#left');
	var right=$('#right');
	var n=0;
	var next=0;
	var flag=true;
	var t=setInterval(move,2000);
	function move(){
		if(!flag){
			return;
		}
		flag=false;
		next=n+1;
		if(next>=img.length){
			next=0;
		}
		img[next].style.left=width+'px';
		animate(img[n],{left:-width},800);
		animate(img[next],{left:0},800,function(){
			flag=true;
		});

		for(var i=0;i<lis.length;i++){
			lis[i].style.background='#211616';
		}
		lis[next].style.background='#B61B1F';
		n=next;
	}



	right.onclick=function(){
		move();
	}


	left.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		next=n-1;
		if(next<0){
			next=img.length-1;
		}
		img[next].style.left=-width+'px';
		animate(img[n],{left:width},800);
		animate(img[next],{left:0},800,function(){
			flag=true;
		});
		for(var i=0;i<lis.length;i++){
			lis[i].style.background='#211616';
		}
		lis[next].style.background='#B61B1F';
		n=next;
	}

	box.onmouseover=function(){
		animate(right,{opacity:1})
		animate(left,{opacity:1})
		clearInterval(t);
	}
	box.onmouseout=function(){
		t=setInterval(move,2000);
		animate(right,{opacity:0})
		animate(left,{opacity:0})
	}



	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			if(this.index>n){
				if(!flag){
					return;
				}
				flag=false;
				img[this.index].style.left=width+'px';
				animate(img[n],{left:-width},800);
				animate(img[this.index],{left:0},800,function(){
			flag=true;
		});
				for(var i=0;i<lis.length;i++){
				lis[i].style.background='#211616';
				}
				lis[this.index].style.background='#B61B1F';
			}else if(this.index<n){
				if(!flag){
					return;
				}
				flag=false;
				img[this.index].style.left=-width+'px';
				animate(img[n],{left:width},800);
				animate(img[this.index],{left:0},800,function(){
			flag=true;
		});
				for(var i=0;i<lis.length;i++){
					lis[i].style.background='#211616';
				}
				lis[this.index].style.background='#B61B1F';
			}
			n=this.index;
			next=this.index;
		}
	}













// 小轮播
	function lunboNode(obj,simg,slis,left_pic,right_pic){

		var sbox=obj;

		var simg=simg;
		var slis=slis;
		var left_pic=left_pic;
		var right_pic=right_pic;
		var kuang=parseInt(getStyle(sbox,'width'));
		var sn=0;
		var snext=0;
		var flag=true;
		var sit=setInterval(smove,6000);
		function smove(){
			if(!flag){
			return;
			}
			flag=false;
			snext=sn+1;
			if(snext>=simg.length){
				snext=0;
			}
			simg[snext].style.left=kuang+'px';
			animate(simg[sn],{left:-kuang},800);
			animate(simg[snext],{left:0},800,function(){
					flag=true;
				});

			for(var i=0;i<slis.length;i++){
				slis[i].style.background='#3E3E3E';
			}
			slis[snext].style.background='#B61B1F';
			sn=snext;
		}


		sbox.onmouseover=function(){
			animate(left_pic,{opacity:1},0)
			animate(right_pic,{opacity:1},0)
			clearInterval(sit);
		}
		sbox.onmouseout=function(){
			animate(right_pic,{opacity:0},0)
			animate(left_pic,{opacity:0},0)
			sit=setInterval(smove,6000);
		}

		right_pic.onclick=function(){
			smove();
		}


		left_pic.onclick=function(){
			if(!flag){
			return;
			}
			flag=false;
			snext=sn-1;
			if(snext<0){
				snext=simg.length-1;
			}
			simg[snext].style.left=-kuang+'px';
			animate(simg[sn],{left:kuang},800);
			animate(simg[snext],{left:0},800,function(){
					flag=true;
				});

			for(var i=0;i<slis.length;i++){
				slis[i].style.background='#3E3E3E';
			}
			slis[snext].style.background='#B61B1F';
			sn=snext;
			// snext=this.index;
		}


		



		for(var i=0;i<slis.length;i++){
			slis[i].index=i;
			slis[i].onclick=function(){
				if(this.index>sn){
					if(!flag){
					return;
					}
					flag=false;
					simg[this.index].style.left=kuang+'px';
					animate(simg[sn],{left:-kuang},800);
					animate(simg[this.index],{left:0},800,function(){
							flag=true;
						});
					for(var i=0;i<slis.length;i++){
					slis[i].style.background='#3E3E3E';
					}
					slis[this.index].style.background='#B61B1F';
				}else if(this.index<sn){
					if(!flag){
					return;
					}
					flag=false;
					simg[this.index].style.left=-kuang+'px';
					animate(simg[sn],{left:kuang},800);
					animate(simg[this.index],{left:0},800,function(){
							flag=true;
						});
					for(var i=0;i<slis.length;i++){
						slis[i].style.background='#3E3E3E';
					}
					slis[this.index].style.background='#B61B1F';
				}
				sn=this.index;
				snext=this.index;
			}
		}
	}

	var sbox=$(".tongY")[0];
	var simg=$(".Simg",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[0];	
	var right_pic=$(".right-pic")[0];
	lunboNode(sbox,simg,slis,left_pic,right_pic);

	var sbox=$(".tongY")[1];
	var simg=$(".lunBO",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[1];	
	var right_pic=$(".right-pic")[1];
	lunboNode(sbox,simg,slis,left_pic,right_pic);

	var sbox=$(".tongY")[2];
	var simg=$(".Simg",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[2];	
	var right_pic=$(".right-pic")[2];
	lunboNode(sbox,simg,slis,left_pic,right_pic);

	var sbox=$(".tongY")[3];
	var simg=$(".Simg",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[3];	
	var right_pic=$(".right-pic")[3];
	lunboNode(sbox,simg,slis,left_pic,right_pic);

	var sbox=$(".tongY")[4];
	var simg=$(".Simg",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[4];	
	var right_pic=$(".right-pic")[4];
	lunboNode(sbox,simg,slis,left_pic,right_pic);

	var sbox=$(".tongY")[5];
	var simg=$(".lunBO",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[5];	
	var right_pic=$(".right-pic")[5];
	lunboNode(sbox,simg,slis,left_pic,right_pic);

	var sbox=$(".tongY")[6];
	var simg=$(".lunBO",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[6];	
	var right_pic=$(".right-pic")[6];
	lunboNode(sbox,simg,slis,left_pic,right_pic);

	var sbox=$(".tongY")[7];
	var simg=$(".lunBO",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[7];	
	var right_pic=$(".right-pic")[7];
	lunboNode(sbox,simg,slis,left_pic,right_pic);

	var sbox=$(".tongY")[8];
	var simg=$(".lunBO",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[8];	
	var right_pic=$(".right-pic")[8];
	lunboNode(sbox,simg,slis,left_pic,right_pic);

	var sbox=$(".tongY")[9];
	var simg=$(".Simg",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[9];	
	var right_pic=$(".right-pic")[9];
	lunboNode(sbox,simg,slis,left_pic,right_pic);

	var sbox=$(".tongY")[10];
	var simg=$(".Simg",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[10];	
	var right_pic=$(".right-pic")[10];
	lunboNode(sbox,simg,slis,left_pic,right_pic);

	var sbox=$(".tongY")[11];
	var simg=$(".Simg",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[11];	
	var right_pic=$(".right-pic")[11];
	lunboNode(sbox,simg,slis,left_pic,right_pic);

	var sbox=$(".tongY")[12];
	var simg=$(".Simg",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[12];	
	var right_pic=$(".right-pic")[12];
	lunboNode(sbox,simg,slis,left_pic,right_pic);


	







// 跳转楼层

  var louceng=$(".louceng")[0];
  var num=$(".num");
  var num1=$(".num4");
  var num2=$(".num2");
  var floor_0=$(".floor");
  var lnow;
  var sflag=true;
  for(var i=0;i<floor_0.length;i++){
    floor_0[i].h=floor_0[i].offsetTop;
  }
  window.onscroll=function(){ 
    if(sflag){
    	var obj=document.body.scrollTop?document.body:document.documentElement;
        // 出现楼层

        if(floor_0[0].h<=obj.scrollTop+450){
            louceng.style.display="block";
        }
        else{
          louceng.style.display="none";

        }
        // 楼层显示

        for(var i=0;i<floor_0.length;i++){    
          if(floor_0[i].h<=obj.scrollTop+80){  
             for(var j=0;j<floor_0.length;j++){
             num2[j].style.display="block";
             num1[j].style.display="none";
             num1[j].className="num4 num1"
              }
             num2[i].style.display="none";
             num1[i].style.display="block";
             num1[i].className="num4 num3";
             lnow=i;
          }       
        }
    }
}

 for(var i=0;i<num.length;i++){   
      num[i].index=i;
      if(i<=num.length){   
        if(this.index==lnow){
          num[i].onmouseover=function(){
            num4[i].className="num4 num1"
          }
        }
        num[i].onmouseover=function(){
          num1[this.index].style.display="block";
          num2[this.index].style.display="none";
        }
        num[i].onmouseout=function(){
          num1[this.index].style.display="none";
          num2[this.index].style.display="block";
        }
        num[i].onclick=function(){
        animate(document.body,{scrollTop:floor_0[this.index].h-200},function(){sflag=true})
        animate(document.documentElement,{scrollTop:floor_0[this.index].h-35},function(){sflag=true})
        sflag=false;
      		} 
          
        }
    }





// 回到顶部
	var obj=document.body.scrollTop?
			document.body:document.documentElement;
	var back=$(".backDing")[0];
	back.onclick=function(){			
		animate(document.body,{scrollTop:0},100);
		animate(document.documentElement,{scrollTop:0},100);
	}





// 回到顶部动画
	var topImg=$(".topImg");
	for(var i=0;i<topImg.length;i++){
		hover(topImg[i],function(){
			var width=this.offsetWidth;
			this.style.background="#B1191A";
			this.style.overflow="inherit";
			var ul=$(".tab-text",this)[0];
			animate(ul,{width:80},300);
		},function(){
			var that=this;
			that.style.background="#7A6E6E";
			that.style.overflow="hidden";
			var ul=$(".tab-text",this)[0];
			animate(ul,{width:0},100);
		})
	}



// 顶部下拉框
	var Xlk=function(jj,ewm){
        var mean=jj;
		var ewm=ewm;
		for(var i=0; i<mean.length;i++){
		 	mean[i].index=i;
		 	mean[i].onmouseover=function(){
		 		for(var i=0;i<ewm.length;i++){
		 			ewm[i].style.display="none";
		 		};
		 		ewm[this.index].style.display="block";
		 		this.style.cssText="border-left:1px solid #ccc;border-right:1px solid #ccc;background:#fff"
		 	}
		 	mean[i].onmouseout=function(){
		 		for(var i=0;i<ewm.length;i++){
		 			ewm[i].style.display="none";
		 		};
		 		this.style.background="#f1f1f1";
		 		this.style.cssText="border-left:1px solid #f1f1f1;border-right:1px solid #f1f1f1;background:#f1f1f1"
		 	}		 
		}
	}

		 var mean=$(".headleft");
		 var ewm=$(".map");
		 Xlk(mean,ewm);

		 var mean=$(".jingdong1");
		 var ewm=$(".jingDown");
		 Xlk(mean,ewm);

		 var mean=$(".jingdong2");
		 var ewm=$(".jingDown2");
		 Xlk(mean,ewm);

		 var mean=$(".jingdong3");
		 var ewm=$(".jingDown3");
		 Xlk(mean,ewm);

		 var mean=$(".jingdong4");
		 var ewm=$(".jingDown4");
		 Xlk(mean,ewm);

		 var mean=$(".jingdong5");
		 var ewm=$(".jingDown5");
		 Xlk(mean,ewm);



// banner出现隐藏

	function xiala1(kind,jty){
		var kind=kind;
		var jty=jty;
		for (var i=0;i<kind.length;i++){		
			kind[i].index=i;
		    hover(kind[i],function(){
		    	for(var i=0;i<kind-lis;i++){
		    		jty[i].index=i;
		    		jty[i].style.display="block";
		    	}
		    	jty[this.index].style.display="none";		    	
		        this.style.background='#fff';
		        var ui=$('.items')[this.index];  
		        animate(ui,{display:"block"},0);

			    },function(){
			    	for(var i=0;i<kind-lis;i++){
			    		jty[i].style.display="none";
			    	}
			    	jty[this.index].style.display="block";
			        var ui=$('.items')[this.index];      
			        var that=this
			        that.style.background='#C81623'; 
			        animate(ui,{display:"none"},0)
		    })
		}
	}

		var kind=$(".jydq")
		var jty=$(".jiantou")
		xiala1(kind,jty)



// tuijian 节点轮播
       var tuijian=$(".jiedian")[0];
       var tuijian1=$(".jiedian1")[0];
       var tuijian2=$("a",tuijian1);
       var tuil=$(".tuil")[0];
       var tuir=$(".tuir")[0];
       var flag2=true;
       tuijian.onmouseover=function(){
       	tuil.style.display="block"
       	tuir.style.display="block"
       }
        tuijian.onmouseout=function(){
       	tuil.style.display="none";
       	tuir.style.display="none";
       }

       var ww=parseInt(getStyle(tuijian2[0],"width"));
       tuijian1.style.width=tuijian2.length*ww+"px";
       function remove(){
				 animate(tuijian1,{left:-ww*4},1000,function(){
				 for(var i=0;i<4;i++)
				 {

				 var first=getFirst(tuijian1);
				 tuijian1.appendChild(first)
				}
				 tuijian1.style.left=0;
				 flag2=true;
				 })}
	  function removel(){
	  	        for(var i=0;i<4;i++)
				 {var first=getFirst(tuijian1);
				  var last=getLast(tuijian1);
				  tuijian1.insertBefore(last,first);}
				 tuijian1.style.left=-ww*4+"px";
				 animate(tuijian1,{left:0},1000,function(){flag2=true})}
	  tuil.onclick=function(){
	  	if(flag2)
             {
            removel();
             	
             }
           flag2=false;
	  }
	  tuir.onclick=function(){
	  	if(flag2)
             {
            remove();
             }
          flag2=false;
	  }


// 第一层
	function navsty(obj11,obj22){
		var bar=$("a",obj11);
	    obj22[0].style.display="block"
		  for(var i=0;i<bar.length;i++){
		  	bar[i].index=i;
		  	bar[i].onmouseover=function(){
	               for(var i=0;i<bar.length;i++){
	               	bar[i].className="style1"
	                obj22[i].style.display="none";
	               }
	                this.className="style2"
	                obj22[this.index].style.display="block";
		  	}
		  } 
    }
    var floor_1=$(".bigbox")[0]
	var firstl=$(".mt1")[0] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);

    var floor_1=$(".bigbox")[1]
	var firstl=$(".mt1")[1] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);

    var floor_1=$(".bigbox")[2]
	var firstl=$(".mt1")[2] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);

    var floor_1=$(".bigbox")[3]
	var firstl=$(".mt1")[3] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);

    var floor_1=$(".bigbox")[4]
	var firstl=$(".mt1")[4] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);

    var floor_1=$(".bigbox")[5]
	var firstl=$(".mt1")[5] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);

    var floor_1=$(".bigbox")[6]
	var firstl=$(".mt1")[6] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);

    var floor_1=$(".bigbox")[7]
	var firstl=$(".mt1")[7] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);

    var floor_1=$(".bigbox")[8]
	var firstl=$(".mt1")[8] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);

    var floor_1=$(".bigbox")[9]
	var firstl=$(".mt1")[9] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);

    var floor_1=$(".bigbox")[10]
	var firstl=$(".mt1")[10] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);





  //热门晒单
	  var readall=$(".read")[0]
	  var reads=$(".read1");

	  console.log(reads)
	  reads[0].style.top=0;
	  reads[1].style.top=123+"px";
	  for(var i=0;i<reads.length;i++){
	    if(i>1){
	      reads[i].style.top=-123+"px";
	    }
	  }

	  var nowday=0;
	  var front;
	  var nextday=0;
	  var ct=setInterval(xiabo,2000)
	  readall.onmouseover=function(){
	    clearInterval(ct)
	  }
	  readall.onmouseout=function(){
	    ct=setInterval(xiabo,2000)
	  }
	  function xiabo(){
	    front=nowday-1
	    nextday=nowday+1
	    if(front<0)
	    {
	      front=reads.length-1
	    }
	    if(nextday==reads.length)
	    {
	      nextday=0;
	    }
	    reads[front].style.top=-123+"px";
	    animate(reads[nowday],{top:123})
	    animate(reads[front],{top:0})
	    animate(reads[nextday],{top:246})
	    nowday=front;
	    nextday=nowday;
	  }

})