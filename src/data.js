export const data = {
    hero: {
        name: "Lucas Ezequiel Flores",
        title: "Software Developer / .NET & Laravel",
        description: "Técnico Universitario en Programación (UTN). Transformo problemas complejos en soluciones web eficientes.",
        social: {
                LinkedIn:"https://www.linkedin.com/in/lucas-ezequiel-flores",
                GitHub:"https://github.com/LucasFloress",
                Email:"floreslucas125@gmail.com",
                CV: "./public/documents/CV-Lucas-Flores.pdf"
            }
    },
    whyWorkWithMe: {
        title: "¿Por qué elegirme?",
        reasons: [
        // 1. Esquina Superior Izquierda
        {
            icon: "Code2",
            title: "Código Limpio",
            desc: "Mantengo estándares estrictos. Código legible y mantenible es mi prioridad."
        },
        // 2. Esquina Superior Derecha
        {
            icon: "BrainCircuit",
            title: "Resolución Analítica",
            desc: "Analizo el 'por qué' antes del 'cómo' para crear soluciones eficientes."
        },
          // 3. CENTRO (La más importante)
        {
            icon: "Rocket",
            title: "Full Stack",
            desc: "Domino todo el ciclo: desde la base de datos SQL hasta el frontend."
        },
          // 4. Esquina Inferior Izquierda
        {
            icon: "Users",
            title: "Trabajo en Equipo",
            desc: "Comunicación clara y empática. Me integro rápido a flujos ágiles."
        },
        // 5. Esquina Inferior Derecha
        {
            icon: "Zap",
            title: "Aprendizaje Ágil",
            desc: "La tecnología vuela. Yo también. Me adapto a nuevas herramientas en tiempo récord."
        }
        ]
    },
    skills: [
        {name: "Frontend", tools: ["Html", "Css", "JavaScript", "React","Tailwind CSS"]},
        {name: "Backend", tools: ["C# .NET", "Laravel (PHP)", "SQL Server", "MySQL","Oracle Database","PL/SQL","Python"]},
        {name: "Tools", tools: ["Git", "GitHub", "VS Code", "Visual Studio","Postman","Cursor"]},
        {name: "Soft skills", tools: ["Resolución de problemas", "Comunicación", "Adaptabilidad", "Atencion al detalle"]},
    ],
    projects: [
        {
            tittle: "EcoFinder",
            des: "Plataforma de gestión de reciclaje. Sistema completo con roles, autenticación y gestión de ofertas.",
            tech: ["Laravel (PHP)", "SQL Server", "MySQL","HTML","CSS","JavaScript"],
            img: "https://tse4.mm.bing.net/th/id/OIP._xUbhr5zApL7CwvAuZaOGwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            url: "https://www.linkedin.com/posts/lucas-ezequiel-flores_laravel-php-desarrolloweb-activity-7411938742468485121-I3Gh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFV5ObQBjwV8ftvPWVo0kJHqW6rQ9jeUC2w",
        },
        {
            tittle: "Data Analytics",
            desc: "Análisis de ventas automotriz con Python, Pandas y Matplotlib. Trabajo académico para la UTN de Haedo",
            tech: ["Python", "Pandas", "Matplotlib"],
            repo: "https://github.com/LucasFloress/Global-Car-Sales-EDA",
            archivo: "global_car_sale.zip",
            img:"https://storage.googleapis.com/kaggle-datasets-images/4222457/7282177/624da4c8c4202819c722b82bf33be016/dataset-cover.jpg?t=2023-12-26-09-22-49"
        },
        {
            tittle: "Rick And Morty FAN PAGE",
            desc: "Una pagina sobre la famosa serie 'Rick and Morty'. Trabajo Académico para la UTN de Haedo",
            tech: ["HTML","CSS","JavaScript"],
            demo: "https://rick-and-morty-henna-two.vercel.app/",
            repo: "https://github.com/LucasFloress/RickANDMorty",
            img:"https://tse2.mm.bing.net/th/id/OIP.c5C1XfPg9AHLPTKENfgh_AHaE_?w=1600&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3"
        }
    ],
    education: [
        {
            institution: "Universidad Tecnológica Nacional (UTN)",
            degree: "Tecnicatura Universitaria en Programación",
            year: "2023 - 2025",
            url: "https://frh.utn.edu.ar/carreras/tec-universitaria-en-programacion/",
            img: "https://es-academic.com/pictures/eswiki/85/UTN_logo.jpg"
        },
        {
            institution: "Udemy",
            degree:"Construyendo Web APIs RESTful con ASP.NET Core 9",
            year: "2026",
            url: "https://www.udemy.com/course/construyendo-web-apis-restful-con-aspnet-core/",
            img: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
        },
        {
            institution: "LinkedIn Learning",
            degree: "Selenium",
            year: "2026",
            url: "https://www.linkedin.com/learning/certificates/02ec6b65ac22969c4c9c91f0eb5aa3662a6e56f287a65df959fc459f614d1f36",
            img: "https://tse4.mm.bing.net/th/id/OIP.iCxoj9bgSesYHiLe0cJzNQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
        }
    ]
}