///<reference path="_refrences.ts"/>
//IIFE - Immediate;y invoked function expression
(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickMeButton;
    var assetManger;
    var assetManifest;
    assetManifest = [
        { id: "clickMeButon", src: "./Assets/Images/StartButton.png" }
    ];
    //Init function preloads assets
    function Init() {
        console.log("Intialization Started");
        assetManger = new createjs.LoadQueue();
        assetManger.installPlugin(createjs.Sound);
        assetManger.loadManifest(assetManifest);
        assetManger.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting pllication");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); //turn this on for buttons
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update();
    }
    function clickMeButtonMouseClick() {
        helloLabel.text = "Clicked";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    }
    function Main() {
        console.log("Game Started");
        helloLabel = new objects.Label("Hello World", "40px", "Elephant", "red", 220, 200, true);
        stage.addChild(helloLabel);
        clickMeButton = new objects.Button(assetManger, "clickMeButon", 300, 300);
        stage.addChild(clickMeButton);
        clickMeButton.on("click", clickMeButtonMouseClick);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map