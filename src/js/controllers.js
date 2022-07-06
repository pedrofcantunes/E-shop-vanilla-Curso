App.controllers = {
    getPage() {
        const paramsString = window.location.search;
        let searchParams = new URLSearchParams(paramsString);
        const page = searchParams.get("p");
        return page;
    },

    router() {
    setInterval(() => {
        if (App.state.routerRendered) {
            return
        }

        const page = this.getPage()
        if (page === "cart") {
            this.createCheckout()
        } else if (!page) {
            this.createMain()
        } else {
            this.createError()
        }

        App.state.routerRendered = true	
      },100)
    },

    go(p) {
        App.state.routerRendered = false
        history.pushState({ p }, "", App.state.routes[p])
        this.router()
    },

    createProductsElements(container) {
        App.state.products.forEach(product => {
            const card = this.createCard 
            (product.name, product.description, product.price, product.images, () => {
           console.log("[clicou]...", product)
       })
       console.log(card)
       container.appendChild(card)
       })
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

        main.itemsContainer
        
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

        main.itemsContainer.style.display = "flex"
        main.itemsContainer.style.flexWrap = "wrap"
        main.itemsContainer.style.justifyContent = "center"
        this.createProductsElements(main.itemsContainer)

        main.container.appendChild(main.bg)
        main.container.appendChild(main.h1)
        main.container.appendChild(main.p)
        main.container.appendChild(main.itemsContainer)

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

    createBtn(content, type = "primary", onClick) {
        const el = document.createElement("button")
        
        el.style.display = "flex"
        el.style.flexDirection = "column"
        el.style.justifyContent = "center"
        el.style.alignItems = "center"
        el.style.padding = "5px 16px"
        el.style.height = "32px"
        el.style.borderRadius = "20px"
        el.style.color = "#FFFFFF"
        el.style.border = "none"

        if (type === "primary") {
         el.style.background = "#000000"
         el.style.boxShadow = "0px 2px 0px rgba(0, 0, 0, 0.043)"
        }

        if (type === "secondary") {
         el.style.background = "rgba(0, 0, 0, 0.6)"
         el.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)"
        }

        if (type === "other") {
         el.style.background = "rgba(0, 0, 0, 0.2)"
         el.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)"
        }

        if (type === "default") {
         el.style.background = "#ffffff"
         el.style.boxShadow = "0px 2px 0px rgba(0, 0, 0, 0.043)"
         el.style.border = "2px solid #000000"
         el.style.color = "#000000"
        }

        el.onclick = onClick

        el.innerHTML = content

        return el
    },

    createCard( title, description, price, imgs, onClick) {
        const el = document.createElement("div")

        el.style.display = "flex"
        el.style.flexDirection = "column"
        el.style.alignItems = "center"
        el.style.width = "fit-content"
        el.style.padding = "1rem"

        //const img = document.createElement("img")
        //img.src = "./assets/bcg.png"
        //img.style.maxWidth = "300px"
        //img.style.maxHeight = "300px"
        //img.style.borderRadius = "50%"
        const imgContainer = document.createElement("div")
        
        const carousel = new Carousel({ imgs, container: imgContainer })

        const titleEl = document.createElement("div")	
        titleEl.style.fontWeight = "700"
        titleEl.style.fontSize = "16px"
        titleEl.style.lineHeight = "19px"
        titleEl.style.color = "#000000"
        titleEl.style.marginTop = "40px"
        titleEl.innerText = title

        const priceEl = document.createElement("div")
        priceEl.style.fontWeight = "400"
        priceEl.style.fontSize = "16px"
        priceEl.style.lineHeight = "19px"
        priceEl.style.marginTop = "4px"
        priceEl.innerHTML = this.currencyFormat(price)

        const desc = document.createElement("div")
        desc.style.fontWeight = "400"
        desc.style.fontSize = "16px"
        desc.style.lineHeight = "19px"
        desc.style.marginTop = "4px"
        desc.innerHTML = description
       
        const btn = this.createBtn("Add to cart", "primary", onClick)
        
        btn.style.marginTop = "4px"

        el.appendChild(imgContainer)
        el.appendChild(titleEl)
        el.appendChild(priceEl)
        el.appendChild(desc)
        el.appendChild(btn)


        return el
    },

    createModal(children) {
        const el = document.createElement("div")
        const modal = document.createElement("div")

        const closeModal = () => {
            console.log("[close modal]...")	
            this.closeModal(el)
        }

        el.style.display = "flex"
        el.style.justifyContent = "center"
        el.style.alignItems = "center"
        el.style.position = "fixed"
        el.style.top = "0"
        el.style.left = "0"
        el.style.width = "100%"
        el.style.height = "100%"
        el.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        el.classList.add("backdrop")
        el.onclick = (e) => {
          if (e.target.classList.contains("backdrop")) {
            closeModal()
          }
        }

        modal.style.background = "#FFFFFF"
        modal.style.flexDirection = "column"
        modal.style.borderRadius = "4px"
        modal.style.width = "fit-content"
        modal.style.display = "flex"
        
        const close = document.createElement("div")
        close.style.display = "flex"
        close.style.justifyContent = "center"
        close.style.alignItems = "center"
        close.style.width = "fit-content"
        close.style.padding = "10px"
        close.style.background = "rgba(0, 0, 0, 0.6)"
        close.style.color = "#FFFFFF"
        close.style.borderRadius = "4px"
        close.style.cursor = "pointer"
        close.style.marginTop = "11px"
        close.style.marginRight = "12px"
        close.style.alignSelf = "flex-end"
        close.innerHTML = "X"
        close.onclick = closeModal
        
        const body = document.createElement("div")
        body.innerHTML = children

        const footer = document.createElement("div")
        footer.style.display = "flex"
        footer.style.justifyContent = "space-between"
        footer.style.margin = "45px 82px 71px 81px"
        
        const cancel = this.createBtn("Cancel", "other", closeModal)
        cancel.style.cursor = "pointer"
        footer.appendChild(cancel)

        const ok = this.createBtn("Confirm", "secondary")
        ok.style.cursor = "pointer"
        ok.style.marginLeft = "24px"
        footer.appendChild(ok)

        modal.appendChild(close)
        modal.appendChild(body)
        modal.appendChild(footer)
        el.appendChild(modal)

        return el
    },

    openModal(el) {
        el.style.display = "flex"
    },

    closeModal(el) {
        el.style.display = "none"
    },

    currencyFormat(value) {
        if (typeof value === "string") {
      }

      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value)
    },

}   

 