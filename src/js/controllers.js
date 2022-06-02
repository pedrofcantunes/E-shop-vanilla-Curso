App.controllers = {

    createHeader() {
        const els = App.elements
        const header = els.header
        
        header.container.style.backgroundColor = "gray"
        header.container.style.display = "flex"
        header.container.style.justifyContent = "space-between"
        header.container.style.alignItems = "center"
        header.container.style.position = "fixed"
        header.container.style.top = "0"
        header.container.style.width = "100%"
                        
        header.logo.src = "./assets/logo.png"
        header.logo.style.margin = "35px 0 35px 48px"

        header.cartIcon.src = "./assets/cart.png"
        header.cartIcon.style.width = "36px"
        header.cartIcon.style.height = "36px"
        header.cartIcon.style.marginRight = "53px"
        header.cartIcon.style.cursor = "pointer"
        header.cartIcon.onclick = () => {
            console.log("click cart")
        }
               
        header.container.appendChild(header.logo)
        header.container.appendChild(header.cartIcon)
        els.root.appendChild(header.container)
    },

    createMain() {
        const els = App.elements
        const main = els.main

        main.container.style.flexGrow = "1"

        main.bg.src = "./assets/bcg.png"
        main.bg.style.width = "100%"
        
        main.h1.innerText = "Our products"
        main.h1.style.fontSize = "24px"
        main.h1.style.fontStyle = "normal"
        main.h1.style.fontWeight = "700"
        main.h1.style.textAlign = "center"
        main.h1.style.lineHeight = "29px"
        main.h1.style.color = "#000000"
  
        main.p.innerText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat."
        main.p.style.fontSize = "24px"
        main.p.style.fontStyle = "normal"
        main.p.style.fontWeight = "400"
        main.p.style.textAlign = "center"
        main.p.style.lineHeight = "29px"
        main.p.style.color = "#000000"

        main.container.appendChild(main.bg)
        main.container.appendChild(main.h1)
        main.container.appendChild(main.p)
        els.root.appendChild(main.container)
    },

    createFooter() {
        const els = App.elements
        const footer = els.footer

        footer.container.style.backgroundColor = "black"
        footer.container.style.justifyContent = "center"
        footer.container.style.alignItems = "center"
        footer.container.style.display = "flex"
        footer.container.style.padding = "100px"
        
        footer.logo.src = "./assets/logo.png"
        
        footer.container.appendChild(footer.logo)
        els.root.appendChild(footer.container)
    },

    createLayout() {
        const els = App.elements

        els.root.style.display = "flex"
        els.root.style.height = "100vh"
        els.root.style.flexDirection = "column"
        
        this.createHeader()
        this.createMain()
        this.createFooter()
    },
}   

