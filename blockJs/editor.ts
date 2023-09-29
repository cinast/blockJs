import "./lib.js"

/**
 * blockJs Experimental module
 * @author cinast
 * @version unkown-0.{}
 */
export module Blockjs {
    const Console = {
        log(massge: any) { },
        warn(massge: any) { }
    }
    function throwError(massge:string,errorObject?:Error) { }


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
        name: string = ""
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
        deteleEvListener(evID: string, replace?: eventObjet) {
            let thisEv = this.eventList
            const evIndex = thisEv.findIndex(ev => ev.id == evID)
            return replace instanceof eventObjet ? thisEv.splice(evIndex, 1, { id: replace.id, ev: replace }) : thisEv.splice(evIndex, 1)
        }
    }

    class sense extends element {
        Idnex = 0
        characters: Record<string, character> = {}
        addCharacter(...character: character[]) {
            character.forEach(c => {
                this.characters = { ...this.characters, [c.name]: c }
            })
        }
        remove
    }



    class partElement extends element {
        layerAt = 0;
        BaseType = "parter"
        content = {};
        constructor() {
            super()
        }
    }

    class Layer extends element {
        name = "";
        BaseType = "layer"
        type = "nomal";
        layerIndex = 0;
        content: partElement[] = [];
        parent: character
        constructor(size, { tag, type = "nomal" }) {
            super()
            this._id = id();
            this.type = type;
        }
        moveto(index: number) {
            let l = this.parent.layerset
            l.splice(index, 0, l.splice(this.layerIndex, 1)[0])
        }
        delete() {
            return this.parent.layerset.splice(this.layerIndex, 1)[0]
        }
        addParters(...parter: partElement[]) {
            parter.forEach(p => {
                if (p?.BaseType == "layer") { this.content.splice(p.layerAt) }
                else { throwError(`Type error:  type '${p?.BaseType}'`) }
            });
        }
        conactLayer() { }
    }

    class svgLayer extends Layer {
        type = "svg";
    }
}