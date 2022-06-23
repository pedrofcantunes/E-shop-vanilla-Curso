const App = {
    init() {
        console.log("start")

        this.controllers.createLayout()
        this.controllers.router()

       //const el = this.controllers.createModal("hello")
       // const btn = this.controllers.createBtn("click me", "primary", () => {
       //     console.log("[]...clicked")
       //     this.controllers.openModal(el)
       // })

        this.elements.root.appendChild(el)
        this.elements.root.appendChild(btn)

        console.log("end")
    },
}


