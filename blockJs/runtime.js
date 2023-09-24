import "./lib.js";

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

class partElement {
    layer = 0;
    tag = "";
    type = "";
    content = {};
    constructor() { }
}

class Layer {
    name = "";
    /**@readonly */
    id = "";
    type = "";
    layerIndex = 0;
    /**@type {partElement[]} */
    content = [];
    /**@type {character}*/
    parent;
    constructor(size, { tag, type = "nomal" }) {
        this.id = id();
        this.type = type;
    }

    moveto() { }
    delete() { }
    addParters() { }
    conactLayer() { }
}

class svgLayer extends Layer {
    type = "svg";
}

class character {
    style = {
        globalSize = 1.00,
        visitable = true,
        rotation = 0.00,
        effects = {},
        /**@type {Layer[]}*/
       resLayer =[]
    };
}