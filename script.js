var wrapper = document.body;
var data=[
{  
color:"blue",
number:"number"  
},
{  
color:"Green",
number:"number"  
},
{  
color:"Red",
number:"number"  
},
];
var elements=[];

function whatColor(color,number) {
  var that = this;
  this.color = color;
  this.number = number;
  this.ele = document.createElement("div");
  this.colorEle = document.createElement("h1");
  this.numberEle = document.createElement("h3");
  this.colorEle.innerHTML=this.color;
  if(this.number){
    this.numberEle.innerHTML="0"
  }else{
    this.numberEle.innerHTML="0"
  }
  this.ele.appendChild(this.colorEle);
    this.ele.appendChild(this.numberEle);
  
  this.ele.addEventListener("click", function(){
    that.changeNumber();
  });
  wrapper.appendChild(this.ele);
}

whatColor.prototype.changeNumber = function(){
  this.number=!this.number;
  if(this.color==="blue"){
    this.numberEle.innerHTML="0"
  }else{
    this.numberEle.innerHTML="0"
  }
}


for(var i=0; i<data.length;i++){
  elements.push(new whatColor(data[i].color,data[i].number))
}


document.querySelector("div").style.backgroundColor = "blue";