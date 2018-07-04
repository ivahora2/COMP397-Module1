module objects {
    //export is used to make it public
    export class Label extends createjs.Text {
        //private instance variables


        //public properties

        //Constructor
        constructor(labelString: string, fontSize: string, fontFamily: string, fontColor: string, x: number = 0, y: number=0, isCentered: boolean=false) {
            super(labelString,fontSize+ " "+fontFamily,fontColor);

            this.x = x;
            this.y = y;

            if(isCentered){
                this.regX = this.getMeasuredWidth()* 0.5;
                this.regY = this.getMeasuredHeight()* 0.5;
            }

        }

        //private mthods


        //public methods
    }
}