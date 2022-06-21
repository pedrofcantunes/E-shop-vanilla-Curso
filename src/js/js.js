const App = {
    init() {
        console.log("start")

        //this.controllers.createLayout()
        //this.controllers.router()

        const el = this.controllers.createCard()
        this.elements.root.appendChild(el)

        //const el = this.controllers.createBtn("test", "primary", () => {
        //    console.log("click")
        //})
        //this.elements.root.appendChild(el)

        //const el2 = this.controllers.createBtn("test", "secondary")
        //this.elements.root.appendChild(el2)

        //const el3 = this.controllers.createBtn("test", "default")
        //this.elements.root.appendChild(el3)

        //const el4 = this.controllers.createBtn("test", "other")
        //this.elements.root.appendChild(el4)

        console.log("end")
    },
}


