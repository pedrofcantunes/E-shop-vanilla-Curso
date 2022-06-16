const App = {
    init() {
        console.log("start")

        //this.controllers.createLayout()
        //this.controllers.router()

        const el = this.controllers.createBtn("test")
        this.elements.root.appendChild(el)

        console.log("end")
    },
}


