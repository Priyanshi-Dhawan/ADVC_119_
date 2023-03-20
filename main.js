console.log drawn_sketch()
random_no=Math.floor((math.random()array_1.legnth)+1)
document.getElementbyId("sketch_to_be_drawn").innerHTML = ("sketch to be drawn"+Element of array);
timer_counter=0;
drawn_sketch="";
timer_check="";
score=0;
answer_holder="";

function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}
function setup(){
    canvas = createCanvas (280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    
}

function draw(){
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX,pmouseY,pmouseX,pmouseY);
    }
}

function gotResult(error,results){
    if(error){
        console.error(error);

    }
    console.log(results);
    document.getElementById('label').innerHTML='Label: '+results[0].label;
    document.getElementById('confidence').innerHTML ='Confidence: ' + Math.round(results[0].confidence *100) +'%';
    
}