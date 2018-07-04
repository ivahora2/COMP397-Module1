///<reference path="_refrences.ts"/>

//IIFE - Immediate;y invoked function expression
(function () {
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;
    let helloLabel: objects.Label;
    let clickMeButton: objects.Button;


    function Init(): void {
        console.log("Intialization Started");

        let myVariable: string = "foo";
        Start();

    }

    function Start(): void {
        console.log("Starting pllication");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); //turn this on for buttons
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update(): void {

        stage.update();
    }

    
    function clickMeButtonMouseClick():void{
        helloLabel.text = "Clicked";
        helloLabel.regX = helloLabel.getMeasuredWidth()*0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight()*0.5;
    }

    function Main(): void {
        console.log("Game Started");
        helloLabel = new objects.Label("Hello World", "40px", "Elephant", "red", 220, 200, true);
        stage.addChild(helloLabel);
        clickMeButton = new objects.Button("./Assets/Images/StartButton.png",300,300);
        clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
        clickMeButton.regY = clickMeButton.getBounds().height * 0.5;
        clickMeButton.x = 300;
        clickMeButton.y = 300;
        stage.addChild(clickMeButton);

        clickMeButton.on("click", clickMeButtonMouseClick);


    }

    window.onload = Init;

})();

