const translations = {
    es: {
        nav: {
            home: 'Inicio',
            about: 'Sobre Mí',
            skills: 'Habilidades',
            experience: 'Experiencia',
            contact: 'Contacto'
        },
        hero: {
            greeting: 'Hola, soy',
            role: 'Desarrollador Full Stack | Especialista en Backend | CEH Certified Ethical Hacker'
        },
        about: {
            title: 'Sobre Mí',
            description: 'Desarrollador de Software Senior con amplia experiencia en desarrollo Full Stack y especialización en Backend. Certificado como Ethical Hacker (CEH), con un historial probado en la construcción de sistemas robustos y escalables.',
            education: {
                title: 'Educación',
                degree: 'TSU en Informática, IUTA, 2013 - 2017',
                languages: 'Español nativo, Inglés intermedio'
            }
        },
        skills: {
            title: 'Habilidades Técnicas',
            languages: {
                title: 'Lenguajes',
                description: 'Typescript/Javascript, Java, Python, Golang'
            },
            cloud: {
                title: 'Cloud & DevOps',
                description: 'GCP, AWS, Docker, Kubernetes, GitLab CI/CD, Terraform'
            },
            databases: {
                title: 'Bases de Datos',
                description: 'MySQL, PostgreSQL, MongoDB, Redis'
            },
            backend: {
                title: 'Backend',
                description: 'Django, NodeJS, NestJS, Spring Boot, Echo'
            },
            frontend: {
                title: 'Frontend & Mobile',
                description: 'Angular, React, React Native, Ionic, Flutter'
            },
            security: {
                title: 'Seguridad',
                description: 'OAuth, JWT, RBAC, Gestión de Sesiones, Análisis de Vulnerabilidades, Pruebas de Penetración, CEH'
            },
            osint: {
                title: 'OSINT',
                description: 'Búsqueda y análisis de información, Maltego, Shodan, SET, SpiderFoot, análisis de datos'
            },
            ethicalhacking: {
                title: 'Ethical Hacking',
                description: 'Pentesting Web, Mobile & Network, Burp Suite, Metasploit, Nmap, Wireshark, Kali Linux'
            },
            redteam: {
                title: 'Red Team',
                description: 'Post-Explotación, Evasión de EDR/AV, Ingeniería Social, Escalación de Privilegios, Persistencia'
            },
            securityoffensive: {
                title: 'Seguridad Ofensiva',
                description: 'XSS, SQLi, CSRF, RCE, Buffer Overflow, Reverse Engineering, Malware Analysis'
            }
        },
        experience: {
            title: 'Experiencia Laboral',
            current: 'Presente',
            consultor: {
                title: 'Consultor Senior en Ciberseguridad',
                position: 'División de Seguridad Bancaria - CICPC (Cuerpo de Investigaciones Científicas, Penales y Criminalísticas)',
                date: '2024 - Presente',
                description1: 'Lideré la creación y estructuración de departamentos de ciberseguridad a nivel nacional para la División de Seguridad Bancaria del CICPC',
                description2: 'Diseño e implementación de frameworks de seguridad adaptados a regulaciones bancarias y requisitos específicos de investigación criminal',
                description3: 'Desarrollo de programas de evaluación y respuesta a incidentes de seguridad en el sector bancario',
                description4: 'Asesoramiento en cumplimiento normativo, estándares de seguridad internacionales y procedimientos de investigación'
            },
            acidlabs: {
                title: 'ACIDLABS - LATAM Airlines',
                position: 'Desarrollador de Software Senior',
                date: '2024 - 2025',
                description1: 'Lidero el area de frontend del proyecto VideoWall, refactorizando e implementando código y optimizando el flujo de desarrollo a producción. (Tecnologías: Typescript/Javascript, React, Node.js, Looker, Docker) ',
                description2: 'Abordé la deuda técnica é implementé mejoras impulsadas por el negocio para aumentar la eficiencia del sistema. (Tecnologías: Java, Spring Boot, Hibernate, Python, Django, GCP, PostgreSQL, MongoDB) ',
                description3: 'Superviso toda la pila (frontend + backend), refactorizando cloud functions, y optimizando el rendimiento  de los servicios (Tecnologías: GCP, Cloud Functions, Kafka)  '
            },
            witi: {
                title: 'WITI - CENCOSUD CHILE',
                position: 'Desarrollador de Software Senior',
                date: '2021 - 2024',
                description1: 'Desarrollé microservicios usando Java y Spring Boot, mejorando la arquitectura de la aplicación. (Tecnologías: Java, Spring Boot, NestJs, Docker, Kubernetes)  ',
                description2: 'Implementé soluciones de rendimiento utilizando AWS Lambda para manejar tráfico pesado, optimizando los tiempos de respuesta. (Tecnologías: AWS Lambda, AWS SQS, AWS SNS, DynamoDB, Terraform)  ',
                description3: 'Optimización de arquitectura a Serverless, aumentando la escalabilidad y rendimiento'
            },
            ucropit: {
                title: 'UCROPIT',
                position: 'Desarrollador de Software Senior',
                date: '2021 - 2021',
                description1: 'Lideré un equipo de frontend para crear un servicio de llenado de PDF, facilitando el manejo de datos de clientes. (Tecnologías: React, React Native, TypeScript, Node.Js, MongoDB)  ',
                description2: 'Incremente el tiempo de respuesta, desarrollando una capa intermedia de cacheo, por medio de Redis, haciendo de las consultas un 50% mas rapidas. (Tecnologías: Redis, JavaScript)  ',
                description3: 'Intregacion de servicio PDF, para el envio de documentos a clientes. (Tecnologías: Node.Js, MongoDB, Docker, AWS S3)  '
            },
            shokworks: {
                title: 'SHOKWORKS',
                position: 'Desarrollador de Software Senior',
                date: '2019 - 2020',
                description1: 'Colabore en la migración de la plataforma Blockchain Kinesis hacia una arquitectura de microservicios con Java, reduciendo el tiempo de respuesta del soporte en un 70%. (Tecnologías: Java, Spring Boot, Solidity, Kafka, Docker)',
                description2: 'Construí sistemas robustos orientados a eventos con Kafka y AWS SQS para manejar un alto tráfico de manera eficiente. (Tecnologías: Kafka, AWS, SQS)',
                description3: 'Diseñe y desarrolle múltiples APIs que no solo cumplen con los requisitos funcionales, sino que también son robustas, escalables y seguras. (Tecnologías: NestJs, Typescript, Golang, Python, Java)'
            },
            hablax: {
                title: 'HABLAX INC',
                position: 'Desarrollador de Software de Nivel Medio',
                date: '2018 - 2019',
                description1: 'Como responsable del equipo frontend, lleve un 40% más rápido los features faltantes de la app a ambiente productivos. (Tecnologías: JavaScript, React, React Native)  ',
                description2: 'Colaboré con el equipo en optimizar la carga del interfaz de usuario, asegurando una optima respuesta en cada modulo. (Tecnologías: JavaScript, HTML, CSS)  '
            },
            consortio: {
                title: 'CONSORCIO CREDICARD C.A',
                position: 'Desarrollador de Software Junior',
                date: '2016 - 2017',
                description1: 'Desarrollé multiples integraciones para la app móvil Pos Móvil (PUNTO DE VENTA), con los sistemas internos de la empresa. (Tecnologías: Java, Spring Boot, Golang, Typescript, Angular, PostgreSQL, REST APIs, SOAP)  ',
                description2: 'Implementación de APIs y servicios (Java, Spring Boot, Golang, Typescript, Angular, PostgreSQL, REST, SOAP)'
            }
        },
        contact: {
            title: 'Contacto',
            email: 'susarraed@gmail.com',
            phone: '+58 4128093729'
        },
        footer: {
            rights: 'Todos los derechos reservados.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            experience: 'Experience',
            contact: 'Contact'
        },
        hero: {
            greeting: "Hi, I'm",
            role: 'Full Stack Developer | Backend Specialist | CEH Certified Ethical Hacker'
        },
        about: {
            title: 'About Me',
            description: 'Senior Software Developer with extensive experience in Full Stack development and Backend specialization. Certified Ethical Hacker (CEH) with a proven track record in building robust and scalable systems.',
            education: {
                title: 'Education',
                degree: 'Technical Degree in Computer Science, IUTA, 2013 - 2017',
                languages: 'Native Spanish, Intermediate English'
            }
        },
        skills: {
            title: 'Technical Skills',
            languages: {
                title: 'Languages',
                description: 'Typescript/Javascript, Java, Python, Golang'
            },
            cloud: {
                title: 'Cloud & DevOps',
                description: 'GCP, AWS, Docker, Kubernetes, GitLab CI/CD, Terraform'
            },
            databases: {
                title: 'Databases',
                description: 'MySQL, PostgreSQL, MongoDB, Redis'
            },
            backend: {
                title: 'Backend',
                description: 'Django, NodeJS, NestJS, Spring Boot, Echo'
            },
            frontend: {
                title: 'Frontend & Mobile',
                description: 'Angular, React, React Native, Ionic, Flutter'
            },
            security: {
                title: 'Security',
                description: 'OAuth, JWT, RBAC, Session Management, Vulnerability Analysis, Penetration Testing, CEH'
            },
            osint: {
                title: 'OSINT',
                description: 'Information gathering and analysis, Maltego, Shodan, SET, SpiderFoot, data analysis'
            },
            ethicalhacking: {
                title: 'Ethical Hacking',
                description: 'Web, Mobile & Network Pentesting, Burp Suite, Metasploit, Nmap, Wireshark, Kali Linux'
            },
            redteam: {
                title: 'Red Team',
                description: 'Post-Exploitation, EDR/AV Evasion, Social Engineering, Privilege Escalation, Persistence'
            },
            securityoffensive: {
                title: 'Offensive Security',
                description: 'XSS, SQLi, CSRF, RCE, Buffer Overflow, Reverse Engineering, Malware Analysis'
            }
        },
        experience: {
            title: 'Work Experience',
            current: 'Present',
            consultor: {
                title: 'Senior Cybersecurity Consultant',
                position: 'Banking Security Division - CICPC (Scientific, Criminal and Forensic Investigations Corps)',
                date: '2024 - Present',
                description1: 'Led the creation and structuring of cybersecurity departments nationwide for the CICPC Banking Security Division',
                description2: 'Design and implementation of security frameworks adapted to banking regulations and specific criminal investigation requirements',
                description3: 'Development of security incident assessment and response programs in the banking sector',
                description4: 'Advisory on regulatory compliance, international security standards, and investigation procedures'
            },
            acidlabs: {
                title: 'ACIDLABS - LATAM AIRLINES',
                position: 'Senior Software Developer',
                date: '2024 - Present',
                description1: 'I lead the frontend area of the VideoWall project, refactoring and implementing code while optimizing the development to production flow. (Technologies: Typescript/Javascript, React, Node.js, Looker, Docker)',
                description2: 'I addressed technical debt and implemented business-driven improvements to increase system efficiency. (Technologies: Java, Spring Boot, Hibernate, Python, Django, GCP, PostgreSQL, MongoDB)',
                description3: 'I supervise the entire stack (frontend + backend), refactoring cloud functions, and optimizing the performance of services. (Technologies: GCP, Cloud Functions, Kafka)'
            },
            witi: {
                title: 'WITI - CENCOSUD CHILE',
                position: 'Senior Software Developer',
                date: '2021 - 2024',
                description1: 'I developed microservices using Java and Spring Boot, improving the application architecture. (Technologies: Java, Spring Boot, NestJs, Docker, Kubernetes)',
                description2: 'I implemented performance solutions using AWS Lambda to handle heavy traffic, optimizing response times. (Technologies: AWS Lambda, AWS SQS, AWS SNS, DynamoDB, Terraform)',
                description3: 'Optimization of architecture to Serverless, increasing scalability and performance'
            },
            ucropit: {
                title: 'UCROPIT',
                position: 'Senior Software Developer',
                date: '2021 - 2021',
                description1: 'I led a frontend team to create a PDF filling service, facilitating the handling of customer data. (Technologies: React, React Native, TypeScript, Node.Js, MongoDB)',
                description2: 'I increased response time by developing an intermediate caching layer using Redis, making queries 50% faster. (Technologies: Redis, JavaScript)',
                description3: 'Integration of PDF service for sending documents to clients. (Technologies: Node.Js, MongoDB, Docker, AWS S3)'
            },
            shokworks: {
                title: 'SHOKWORKS',
                position: 'Senior Software Developer',
                date: '2019 - 2020',
                description1: 'I collaborated in migrating the Kinesis Blockchain platform to a microservices architecture using Java, reducing support response time by 70%. (Technologies: Java, Spring Boot, Solidity, Kafka, Docker)',
                description2: 'I built robust event-driven systems with Kafka and AWS SQS to efficiently handle high traffic. (Technologies: Kafka, AWS, SQS)',
                description3: 'I designed and developed multiple APIs that not only meet functional requirements but are also robust, scalable, and secure. (Technologies: NestJs, Typescript, Golang, Python, Java)'
            },
            hablax: {
                title: 'HABLAX INC',
                position: 'Mid-Level Software Developer',
                date: '2018',
                description1: 'Frontend team leadership, accelerating feature delivery by 40% (JavaScript, React, React Native)',
                description2: 'UI optimization and response times improvement (JavaScript, HTML, CSS)'
            },
            consortio: {
                title: 'CONSORCIO CREDICARD C.A',
                position: 'Junior Software Developer',
                date: '2016 - 2017',
                description1: 'I developed multiple integrations for the Pos Móvil mobile app (POINT OF SALE) with the company\'s internal systems (Technologies: Java, Spring Boot, Golang, Typescript, Angular, PostgreSQL, REST APIs, SOAP)',
                description2: 'I implemented multiple APIs and services (Technologies: Java, Spring Boot, Golang, Typescript, Angular, PostgreSQL, REST, SOAP)'
            }
        },
        contact: {
            title: 'Contact',
            email: 'susarraed@gmail.com',
            phone: '+58 4128093729'
        },
        footer: {
            rights: 'All rights reserved.'
        }
    }
};
