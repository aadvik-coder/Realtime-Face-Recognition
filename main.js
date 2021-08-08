function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hDjt-J-2Q/model.json', modelLoaded);

}
function modelLoaded(){
    console.log('Model Loaded!1!');
}
function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results){
    if (error){
        console.log(error);
    } else {
        console.log(results);
        confidence = results[0].confidence.toFixed(2) * 100;
        family_member = results[0].label;
        document.getElementById("name").innerHTML = family_member;
        document.getElementById("accuracy").innerHTML = confidence + "%";

    }

}