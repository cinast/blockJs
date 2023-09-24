class module {
    atuthor = ""
    version = ""
    introduction = ""
    updateTime = 0
    license = ""
    blockData = {}
}

/*
3 types block

1.
2.
3. compiled block (program)
*/

class compiled_block {

}

class block_HTMLrender {
    themeColor = ""
    borderWidth = ""
    borderColor = ""
    backgroundColor = ""

}

class partElement {
    layer = 0
    tag = ""
    type = ""
    content = {}
    constructor(){

    }
}

class Layer {
    name = ""
    id = ""
    layerIndex = 0
    /**@type {partElement[]} */
    content = []
    constructor(){
        const id = id()
    }
}


class svgLayer extends Layer{
    type = "svg"
}


class character {
    /**
     * @type {Layer[]}
     */
    style = {}
}



