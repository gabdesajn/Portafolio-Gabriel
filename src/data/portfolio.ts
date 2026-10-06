// ---- Edita aquí tu información ----
export const nombre = 'Gabriel Ajin';
export const rol = 'Desarrollador Web y Móvil';
export const email = 'gabrielajin.26@gmail.com';
export const github = 'https://github.com/gabrielajiizaaaa';

export const proyectos = [
	{
		titulo: 'Invento',
		descripcion: 'Aplicación web de gestión de inventario.',
		url: 'https://invento.aserva.com.gt/',
	},
	{
		titulo: 'AservDesk',
		descripcion: 'Plataforma de mesa de ayuda y soporte.',
		url: 'https://servicedesk.versatel.com.gt/',
	},
	{
		titulo: 'Catálogo Radios',
		descripcion: 'Catálogo web de productos de radiocomunicación.',
		url: 'https://catalogo.belfone.com.gt/',
	},
	{
		titulo: 'Landing Page Aserva',
		descripcion: 'Landing page corporativa.',
		url: 'https://aserva.com.gt/',
	},
	{
		titulo: 'Landing Page Digesa',
		descripcion: 'Landing page institucional.',
		url: 'https://digesa.site.je/',
	},
];

export const experiencia = [
	{
		empresa: 'Versatel, S.A.',
		lugar: 'Guatemala',
		puesto: 'Desarrollador',
		fecha: 'Feb. 2026 – Actualidad',
		puntos: [
			'Desarrollo aplicaciones web con HTML, CSS, JavaScript y PHP; desarrollé y doy mantenimiento a una aplicación web en PHP para la generación de recibos de pago y documentos.',
			'Desarrollo de aplicaciones móviles con Flutter y Android Studio.',
		],
	},
	{
		empresa: 'Desarrollo Independiente',
		lugar: 'Guatemala',
		puesto: 'Desarrollador Web Independiente',
		fecha: 'Inicio en 2025',
		puntos: ['Diseño, desarrollo y publicación de sitios web.'],
	},
];

export const educacion: {
	institucion: string;
	lugar: string;
	titulo: string;
	fecha: string;
	detalle?: string;
}[] = [
	{
		institucion: 'Universidad Rafael Landívar',
		lugar: 'Ciudad de Guatemala',
		titulo: 'Ingeniería en Informática y Sistemas (6.º semestre, en curso)',
		fecha: '2024 – Actualidad',
		detalle: 'Cursos relevantes: Bases de Datos II, Investigación de Operaciones, Ingeniería de Software I.',
	},
	{
		institucion: 'Colegio Salesiano Don Bosco',
		lugar: 'Ciudad de Guatemala',
		titulo: 'Bachiller en Ciencias y Letras con Orientación en Computación',
		fecha: '2019 – 2023',
	},
];

export const certificaciones = [
	'Scrum Foundation Professional (SFPC™)',
	'Lean Six Sigma White Belt (LSSWBPC)',
	'Python Essentials 1',
];

export const habilidades = [
	{
		grupo: 'Lenguajes y bases de datos',
		items: ['Python', 'PHP', 'JavaScript', 'Dart', 'HTML', 'CSS', 'MySQL', 'SQL Server'],
	},
	{
		grupo: 'Frameworks y herramientas',
		items: ['Flutter', 'Android Studio', 'Tailwind CSS', 'Astro', 'Git / GitHub', 'Arduino', 'MIT App Inventor'],
	},
];
