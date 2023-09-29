import { recordExpression, typeParameter } from "@babel/types"
import "./lib.js"

class element {
    protected _id: string
    public get id() { return this._id }
    public type: string
    readonly BaseType: string
    tag: string[] = []
}

class eventObjet extends element {
    BaseType = "eventObject"
    callback: Function
    triged: boolean = false
    constructor(type: string, callback: Function) {
        super()
        this._id = id()
        this.type = type
        this.callback = callback
    }
}

class character extends element {
    x: number = .0
    y: number = .0
    globalSize: number = 1.00
    visitable: boolean = true
    rotation: number = 0.00
    effects = {}
    layerset: Layer[] = []
    eventList: { id: string, ev: eventObjet }[]
    moveto(x: number, y: number) {
        this.x = x
        this.y = y
    }
    clone() {
        return
    }
    addEvListener(type: string, callback: Function) {
        let ev = new eventObjet(type, callback)
        this.eventList.push({ id: ev.id, ev: ev })
        return ev.id
    }
    deteleEvListener(evID: string, replace: eventObjet?) {
        let thisEv = this.eventList
        const evIndex = thisEv.findIndex((ev, index) => {
            if (ev.id == evID) return index
        })
        if (evIndex == 0) return void 0
        return replace instanceof eventObjet ? thisEv.splice(evIndex, 1, { id: replace.id, ev: replace }) : thisEv.splice(evIndex, 1)
    }
}

class sense extends element {
    Idnex = 0
    characters : Record<string,character> = {}
    addCharacter(...characters:character[]){
        characters
    }
}



class partElement extends element {
    layer = 0;
    BaseType = "parter"
    content = {};
    constructor() {
        super()
    }
}

class Layer extends element {
    name = "";
    /**@readonly */
    BaseType = "layer"
    type = "nomal";
    layerIndex = 0;
    /**@type {partElement[]} */
    content = [];
    /**@type {character}*/
    parent;
    constructor(size, { tag, type = "nomal" }) {
        super()
        this.id = id();
        this.type = type;
    }
    moveto(index) {
        let l = this.parent.style.layerset.layers
        l.splice(index, 1, l.splice(this.layerIndex, 1, l[index]))
    }
    delete() {
        this.parent.style.layerset.layers.splice(this.layerIndex, 1)
    }
    addParters(...parter: partElement[]) {
        let c = true
        parter.forEach(e => {
            c = parter[e]?.BaseType == "layer"
        });
        return c ? this.content.(parter) : thorwError()
    }
    conactLayer() { }
}

class svgLayer extends Layer {
    type = "svg";
}