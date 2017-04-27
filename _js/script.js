/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Queue = {  
    currentPos : 0,
    queue : new Array(), // or [],
    
    pushToQueue : function (parameter) {
        this.queue[this.currentPos++] = parameter;
        
    },
    
    popFromQueue : function() {
        if(this.currentPos === 0){
            //document.write("<h2>Queue is empty...</h2>");
            alert("Queue is empty...")
        }else{
            var temQueue = new Array(this.currentPos-1);
            for (var i = 0; i < this.currentPos-1; i++) {
                temQueue[i] = this.queue[i+1];
            }
            this.queue = temQueue;
            this.currentPos = this.currentPos-1;
        } 
    },
    
    printQueue : function () {
        //document.write(this.queue+ "<br>");
        $("#the_queue").text(this.queue);
    }
};

$("#push").click(function(){
    var valu = $("#inputT").val();
    if(!inputT.value){
        alert("cannot push dueto without an object");
    }else{
        Queue.pushToQueue(valu);
    }  
});

$("#pop").click(function (){
    Queue.popFromQueue();
});

$("#print").click(function (){
    Queue.printQueue();
});







