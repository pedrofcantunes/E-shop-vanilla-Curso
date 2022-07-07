class Carousel {
    config = {}
    imageEls = []
    
    container = null
    leftContainer = null
    imgContainer = null
    rightContainer = null

    currentImgIdx = 0

    /**
     * Configure the carousel
     * @param {Object} config
     * @param {HTMLElement} config.container Where should I render the images?
     * @param {Array} config.imgs List of images to be displayed
     */
    constructor(config) {
        
        this.config = config
        this.container = config.container

        this.setContainerStyle()
        this.createElements()
        this.preLoadImages()
        this.renderImg()

    }

    renderImg() {
        this.imgContainer.innerHTML = ""         
        this.imgContainer.appendChild(this.imageEls[this.currentImgIdx])
    }

    createElements() {
        this.leftContainer = document.createElement("div")
        this.imgContainer = document.createElement("div")
        this.rightContainer = document.createElement("div")
        
        const caretLeft = document.createElement("img")
        caretLeft.src = "./assets/caret.svg"
        caretLeft.style.transform = "rotate(270deg)"
        caretLeft.style.width = "32px"

        const caretRight = document.createElement("img")
        caretRight.src = "./assets/caret.svg"
        caretRight.style.transform = "rotate(90deg)"
        caretRight.style.width = "32px"
        
        this.leftContainer.style.cursor = "pointer"
        this.leftContainer.onclick = () => {
            this.currentImgIdx--
            if (this.currentImgIdx < 0) {
                this.currentImgIdx = this.imageEls.length -1
            }
            this.renderImg()
        }
        
        this.imgContainer.style.margin = "3px"
        
        this.rightContainer.style.cursor = "pointer"
        this.rightContainer.onclick = () => {
            this.currentImgIdx++
            if (this.currentImgIdx > this.imageEls.length -1) {
                this.currentImgIdx = 0
            }
            this.renderImg()
        }
        
        this.leftContainer.appendChild(caretLeft)
        this.rightContainer.appendChild(caretRight)

        this.container.appendChild(this.leftContainer)
        this.container.appendChild(this.imgContainer)
        this.container.appendChild(this.rightContainer)
    }

    setContainerStyle() {
        this.container.style.display = "flex"
        this.container.style.alignItems = "center"
        this.container.style.width = "fit-content"
        this.container.style.height = "300px"
    }

    preLoadImages() {
        this.config.imgs.forEach((img, i) => {
            const el = document.createElement("img")

            el.src = this.config.imgs[i]
            el.style.maxWidth = "300px"
            el.style.maxHeight = "300px"
            el.style.borderRadius = "50%"

            this.imageEls.push(el)
        });
    }
}
