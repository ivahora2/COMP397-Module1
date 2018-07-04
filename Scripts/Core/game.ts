//IIFE - Immediate;y invoked function expression
(function () {
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;
    let helloLabel: objects.Label;
    let clickMeButton: createjs.Bitmap;


    function Init(): void {
        console.log("Intialization Started");

        let myVariable: string = "foo";
        Start();

    }

    function Start(): void {
        console.log("Starting pllication");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update(): void {

        stage.update();
    }

    function Main(): void {
        console.log("Game Started");
        helloLabel = new objects.Label("Hello World", "40px", "Elephant", "red", 220, 200, true);
        stage.addChild(helloLabel);
        clickMeButton = new createjs.Bitmap("./Assets/Images/StartButton.png");
        clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
        clickMeButton.regY = clickMeButton.getBounds().height * 0.5;
        clickMeButton.x=300;
        clickMeButton.y =300;
        stage.addChild(clickMeButton);

    }

    window.onload = Init;

})();

