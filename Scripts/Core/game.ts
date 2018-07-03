//IIFE - Immediate;y invoked function expression
(function(){
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel:createjs.Text;


    function Init():void{
        console.log("Intialization Started");

        let myVariable: string = "foo";
         Start();

    }

    function Start():void{
        console.log("Starting pllication");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick",Update);
        Main();
    }

    function Update():void{
        helloLabel.rotation +=5;
        stage.update();
    }

    function Main():void{
        console.log("Game Started");
        helloLabel = new createjs.Text("Hello World","40px Elephant","red");
        console.log(helloLabel);
        helloLabel.x = 100;
        helloLabel.y = 200;
        stage.addChild(helloLabel);
    }

    window.onload = Init;

})();

