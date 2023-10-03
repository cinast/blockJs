import "./lib.js"

/**
 * blockJs Experimental module
 * @author cinast
 * @version unkown-0.{}
 */

export const Console = {
    log(massge: any) { },
    warn(massge: any) { }
}
export function throwError(massge: string, errorObject?: Error) { }


export class basicElement {
    protected _id: string = ""
    public get id() { return this._id }
    public type: string = ""
    public readonly BaseType: string = ""
    tag: string[] = []
}

export class eventObjet extends basicElement {
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

export class character extends basicElement {
    BaseType = "character"
    x: number = .0
    y: number = .0
    name: string = ""
    globalSize: number = 1.00
    visitable: boolean = true
    rotation: number = 0.00
    isClone: boolean = false
    cloneNumber: number = 0
    hasCloned: number = 0
    clones: clonedCharacter[] = []
    CloneFrom: character | undefined = undefined
    effects = {}
    layerset: Layer[] = []
    eventList: { id: string, ev: eventObjet }[] = []
    moveto(x: number, y: number) {
        this.x = x
        this.y = y
    }
    clone() {
        this.hasCloned++
        let cl = new clonedCharacter(this)
        this.clones.push(cl)
        return cl
    }
    set cloneFrom(char: character | undefined) {
        if (!this.isClone && this.CloneFrom?.BaseType !== "character") return
        this.CloneFrom = char
    }
    addEvListener(type: string, callback: Function) {
        let ev = new eventObjet(type, callback)
        this.eventList.push({ id: ev.id, ev: ev })
        return ev.id
    }
    deteleEvListener(evID: string, replace?: eventObjet) {
        let thisEv = this.eventList
        const evIndex = thisEv.findIndex(ev => ev.id == evID)
        return replace instanceof eventObjet ? thisEv.splice(evIndex, 1, { id: replace.id, ev: replace }) : thisEv.splice(evIndex, 1)
    }
}

export class clonedCharacter extends character {
    isClone: boolean = true
    set cloneFrom(char: character | undefined) {
        if (this.CloneFrom?.BaseType == "character")
            this.CloneFrom = char
    }
    constructor(baseChara: character | clonedCharacter) {
        super()
        this.cloneNumber = baseChara.hasCloned
        this.cloneFrom = baseChara
    }
}

export class sense extends basicElement {
    Idnex = 0
    characters: Record<string, character> = {}
    addCharacter(...character: character[]) {
        character.forEach(c => {
            this.characters = { ...this.characters, [c.name]: c }
        })
    }
    remove() { }
}



export class partElement extends basicElement {
    layerAt = 0;
    BaseType = "parter"
    content = {};
    constructor() {
        super()
    }
}
export type layers = "nomal" | "svg" | "filter"
export class Layer extends basicElement {
    name = "";
    BaseType = "layer"
    type = "nomal";
    layerIndex = 0;
    content: partElement[] = [];
    parent: character | undefined = undefined
    constructor(size: number, type?: string) {
        super()
        this._id = id();
        this.type = type || "";
    }
    moveto(index: number) {
        if (this.parent === undefined) return;
        let l = this.parent.layerset
        l.splice(index, 0, l.splice(this.layerIndex, 1)[0])
    }
    delete() {
        return this.parent == undefined ? new TypeError : this.parent.layerset.splice(this.layerIndex, 1)[0]
    }
    addParters(...parter: partElement[]) {
        parter.forEach(p => {
            if (p?.BaseType == "layer") { this.content.splice(p.layerAt) }
            else { throwError(`Type error:  type '${p?.BaseType}'`) }
        });
    }
    concatLayer() { }
}

export class svgLayer extends Layer {
    type = "svg";
}