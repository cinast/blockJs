import "./lib.js"

class element {
    /**@type {string} */
    id = ""
    type = ""
    /**@readonly */
    type_ = ""
    tag = ""
}
class module {
    atuthor = "";
    version = "";
    introduction = "";
    updateTime = 0;
    license = "";
    blockData = {};
}

/*
3 types block

1.
2.
3. compiled block (program)
*/

class compiled_block { }

class block_HTMLrender {
    themeColor = "";
    borderWidth = "";
    borderColor = "";
    backgroundColor = "";
}

class partElement extends element {
    layer = 0;
    type_ = "parter"
    content = {};
    constructor() { }
}

class Layer extends element {
    name = "";
    /**@readonly */
    type_ = "layer"
    type = "nomal";
    layerIndex = 0;
    /**@type {partElement[]} */
    content = [];
    /**@type {character}*/
    parent;
    constructor(size, { tag, type = "nomal" }) {
        this.id = id();
        this.type = type;
    }
    /**
     * exchange layers
     * @param {number} index 
     */
    moveto(index) {
        let l = this.parent.style.resLayer
        l.splice(index, 1, l, splice(this.layerIndex, 1, l[index]))
    }
    delete() {
        l.splice(this.layerIndex, 1)
    }
    /**
     * @param {partElement[]} parter 
    */
    addParters(...parter) {
        let c = true
        parter.forEach(e => {
            c = parter[e]?.type_ == "layer"
        });
        return c ? this.content.push(...parter) : thorwError()
    }
    conactLayer() { }
}

class svgLayer extends Layer {
    type = "svg";
}

class character extends element {
    style = {
        globalSize = 1.00,
        visitable = true,
        rotation = 0.00,
        effects = {},
        /**@type {Layer[]}*/
        resLayer =[]
    };
}

class screen extends element {
    /**@readonly*/
    Idnex = 0
    /**@type {Object<string,character>} */
    characters = {}
}