App.controllers = {
    getPage() {
        const paramsString = window.location.search;
        let searchParams = new URLSearchParams(paramsString);
        const page = searchParams.get("p");
        return page;
    },

    router() {
        console.log(window.location.search)

        const page = this.getPage()
        if (page === "cart") {
            this.createCheckout()
        } else if (!page) {
            this.createMain()
        } else {
            this.createError()
        }	
    },

    go(p) {
        history.pushState({ p }, "", App.state.routes[p])
        this.router()
    },
    
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
        header.logo.style.cursor = "pointer"
        header.logo.onclick = () => {
            App.controllers.go("home")
        }

        header.cartIcon.src = "./assets/cart.png"
        header.cartIcon.style.width = "36px"
        header.cartIcon.style.height = "36px"
        header.cartIcon.style.marginRight = "53px"
        header.cartIcon.style.cursor = "pointer"
        header.cartIcon.onclick = () => {
            App.controllers.go("cart")
        }
               
        header.container.appendChild(header.logo)
        header.container.appendChild(header.cartIcon)
        
        els.root.appendChild(header.container)
    },

    createMain() {
        const els = App.elements
        const main = els.main.main
        
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

        els.main.container.innerHTML = ""
        els.main.container.appendChild(main.container)
    },

    createCheckout () {
        const els = App.elements
        const { container, title, items, confirmBtn, confirmBtnContainer } = els.main.checkout

        container.style.backgroundColor = "#CCCCCC"
        container.style.height = "100%"
        container.style.paddingTop = "230px"

        title.innerText = "My cart [ Total Amount : xx ]"
        title.style.fontSize = "24px"
        title.style.fontStyle = "normal"
        title.style.fontWeight = "700"
        title.style.textAlign = "center"
        title.style.lineHeight = "29px"
        title.style.color = "#000000"

        confirmBtn.innerText = "Confirm purchase"
        confirmBtn.classList.add("btn")
        confirmBtnContainer.style.textAlign = "center"
        confirmBtnContainer.appendChild(confirmBtn)

        container.appendChild(title)
        container.appendChild(confirmBtnContainer)

        els.main.container.innerHTML = ""
        els.main.container.appendChild(container)
    },

    createError() {
        const els = App.elements
        const error = els.main.error
                
        error.errorEvent.innerText = "Error 404 - Page not found"
        error.errorEvent.style.width = "100%"
        error.errorEvent.style.marginTop = "600px"
        error.errorEvent.style.textAlign = "center"
        error.errorEvent.style.fontSize = "50px"

        error.container.appendChild(error.errorEvent)

        els.main.container.innerHTML = ""
        els.main.container.appendChild(error.container)
    },
    
    createFooter() {
        const els = App.elements
        const footer = els.footer

        footer.container.style.backgroundColor = "black"
        footer.container.style.justifyContent = "center"
        footer.container.style.alignItems = "center"
        footer.container.style.display = "flex"
        footer.container.style.padding = "50px"
        
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

        //this.createMain()
        //this.createCheckout()
        //this.createError()
        els.main.container.style.flexGrow = "1"
        els.root.appendChild(els.main.container)

        this.createFooter()
    },
}   

