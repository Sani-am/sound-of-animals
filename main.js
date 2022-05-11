function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true,video:false});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PIZ4ttOrh/model.json',{ probabilityThreshold: 0.7 }, modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var Background= 0;
var Mooing= 0;
var Barking= 0;
var Meowing= 0;

function gotResults(error,results){
if(error){
    console.error(error);
}
else{
    random_number_r= Math.floor(Math.random()*255)+1;
    random_number_g= Math.floor(Math.random()*255)+1;
    random_number_b= Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML="I Can Hear - " + results[0].label;
    document.getElementById("result_count").innerHTML="Detected Voice Of - " + Barking + "Detected Voice Of - " + Meowing +"Detected Voice Of - " + Mooing + "Detected Voice Of - " + Background;
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_count").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";


 img= document.getElementById("img"); 
 

if(results[0].label=="Barking")
        {
            img.src="dog.png";
            Barking= Barking+1;
           
        }

        else if(results[0].label=="Meowing")
        {
            img.src="Cat.png";
            Meowing= Meowing+1;
            
        }

        else if(results[0].label=="Mooing")
        {
            img.src="Cow.png";
            Mooing= Mooing+1;
            
        }

        else{
            img.src="Background Noise.png";
            Background= Background+1;
            
        }
        }
    }





