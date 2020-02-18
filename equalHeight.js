class equalHeightClass {
    constructor(id) {
        this.id = id;
        this.equalHeightFromIds = document.getElementById(this.id).getElementsByClassName('equalHeight');
        this.equalHeightArray = new Array();
        this.equalHeightMax;
    }

    setColsSameHeight() {
        //set vars
        for(let equalHeightFromId of this.equalHeightFromIds) {
            equalHeightFromId.style.height = null;
            this.equalHeightArray.push (equalHeightFromId.clientHeight);
        }
        this.equalHeightMax = Math.max.apply(null, this.equalHeightArray); //hoogste waarde uit array

        //set cols height
        for(let equalHeightFromId2 of this.equalHeightFromIds) {
            equalHeightFromId2.style.height = this.equalHeightMax + "px";
        }
    }

    //sets footer element in ariticle
    //only use this method if article footer is used.
    setColsSameHeightFooter() {
        //set vars
        let footers = new Array();
        for (let i=0; i<this.equalHeightFromIds.length; i++) {
            footers[i] = this.equalHeightFromIds[i].getElementsByClassName("articleFooter");
        }

        //Set footer to position relative so calc hight
        for(let footer of footers) {
            footer[0].style.position = "relative";
        }

        this.setColsSameHeight();

        //Set footer position absolute
        for(let footer of footers) {
            footer[0].style.position = "absolute";
        }
    }
}


