App.state = {
    products: [
        {
            id: 1,
            name: "Pão Francês",
            description: "Pão feito de farinha, sal, água e fermento",
            price: 1.99,
            images: [
                "https://amopaocaseiro.com.br/wp-content/uploads/2020/04/receita-de-pao-frances-caseiro-IMG_4360.jpg",
            ],
        },
   
        {
            id: 2,
            name: "Pão Caseiro",
            description: "Pão feito de farinha, sal, água, fermento, leite e ovos",
            price: 1.99,
            images: [
                "https://img.itdg.com.br/tdg/images/recipes/000/178/357/328308/328308_original.jpg?mode=crop&width=710&height=400",
            ],
        },

        {
            id: 3,
            name: "Pão Baguete",
            description: "Pão feito de farinha, sal, água e fermento",
            price: 1.99,
            images: [
                "https://img.estadao.com.br/fotos/crop/1200x900/resources/jpg/6/8/1453289237786.jpg",
            ],
        },
        
        {
            id: 4,
            name: "Pão Italiano",
            description: "Pão feito de farinha, sal, água e fermento levain",
            price: 1.99,
            images: [
                "https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2008/04/Pao_italiano_caseiraaa.jpg",
            ],
        },        
            
    ],
    
    routes: {
        home: `${window.location.origin}${window.location.pathname}`,
        cart: "?p=cart",
    },
    routerRendered: false
   
}
