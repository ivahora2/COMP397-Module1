//IIFE - Immediate;y invoked function expression
(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickMeButton;
    function Init() {
        console.log("Intialization Started");
        var myVariable = "foo";
        Start();
    }
    function Start() {
        console.log("Starting pllication");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        console.log("Game Started");
        helloLabel = new objects.Label("Hello World", "40px", "Elephant", "red", 220, 200, true);
        stage.addChild(helloLabel);
        clickMeButton = new createjs.Bitmap("./Assets/Images/StartButton.png");
        clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
        clickMeButton.regY = clickMeButton.getBounds().height * 0.5;
        clickMeButton.x = 300;
        clickMeButton.y = 300;
        stage.addChild(clickMeButton);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map