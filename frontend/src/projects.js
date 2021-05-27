const projects = [
    {
        name:'Forked',
        description:'This is a recipe storage application. Users can store and share recipes with others. In the future, I plan to add the ability for users to be to add and delete the ingredients from their shopping list.',
        image:[
            '/images/dashboard.png', 
            '/images/home.png', 
            '/images/ingredients.png', 
            '/images/instructions.png', 
            '/images/menu.png'
        ],
        site:'https://forked-recipe.vercel.app/login',
        git:'https://github.com/LoganNegley/Forked',
        techStack:{
            techDescription:'Full Stack Application- Mobile first',
            stack: [
            'React',
            'Node.js',
            'Express',
            'Sql']
        },
    },

    {
        name:'Invisibility Cloak',
        description:'This is a application is a Harry Potter character informational. This application uses the Harry Potter Api to retrieve character information. The frontend is built using Node.js and React',
        image:[
            '/images/harry-potter.png', 
            '/images/house-harry-potter.png'
        ],
        site:'https://hogwarts-invisibility-cloak.vercel.app/',
        git:'https://github.com/LoganNegley/Harry-Potter-React',
        techStack:{
            techDescription:'Frontend Application using Harry Potter Api- Responsive',
            stack: [
            'React',
            'Node.js',
            'Harry Potter Api',
            ]
        },
    },

    {
        name:"Conway's Game Of Life",
        description:"This is my take on the British mathematician John Conway's 'cellular automaton' Game Of Life.  It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply",
        image:[
            '/images/conways-game.png',
            '/images/cells.png',
            '/images/demo.png',

        ],
        site:'https://game-of-life-conways.vercel.app/',
        git:'https://github.com/LoganNegley/Game-of-Life-Conways',
        techStack:{
            techDescription:'Frontend Application- Desktop First',
            stack: [
            'React',
            'Node.js',
            ]
        },
    },

]