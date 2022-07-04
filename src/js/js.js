const App = {
    init() {
        console.log("start")

        //this.controllers.createLayout()
        //this.controllers.router()

       //const el = this.controllers.createModal("hello")
       // const btn = this.controllers.createBtn("click me", "primary", () => {
       //     console.log("[]...clicked")
       //     this.controllers.openModal(el)
       // })

        //this.elements.root.appendChild(el)
        //this.elements.root.appendChild(btn)

        let el
        
        const imgs = [
            "https://amopaocaseiro.com.br/wp-content/uploads/2020/04/receita-de-pao-frances-caseiro-IMG_4360.jpg",
            "https://img.itdg.com.br/tdg/images/recipes/000/178/357/328308/328308_original.jpg?mode=crop&width=710&height=400",
            "https://img.estadao.com.br/fotos/crop/1200x900/resources/jpg/6/8/1453289237786.jpg",
        ]

        el = this.controllers.createCard("Pão", "Descrição dos melhores pães do mundo", 1.99, imgs)
        this.elements.root.appendChild(el)

        console.log("end")
    },
}


