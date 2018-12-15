//Vue code goes here ...
new Vue({
  el : "#app",
  data : {
    show : true,
    fruits : ["Apple","Mango","Orange","Bananas"],
    persons : [
      {name:"Joro", age:40,country:"USA"},
      {name:"Sita", age:20,country:"Nepal"}
    ],
    count : 0,
  },
  methods : {
      addItems : function(){
        let myArray = ["Guava","Pineapple","watermellon","Lemon","Sweetpotatos"];
        this.fruits.push((myArray[this.count++]));
        if(this.count === myArray.length){
          this.count = 0;
        }
      }
  },
});
