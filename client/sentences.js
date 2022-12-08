const sentences = {
  start: [
    'Decido pasear por el Reina Sofía, sin rumbo ni dirección específica.',
    'Accedo al Reina Sofía a través de una pequeña puerta.',
    'El cielo está despejado al otro lado de las ventanas del Reina Sofía.',
    'Me he comprado un nuevo videojuego en el que paseas virtualmente por el Reina Sofía.',
    'He estado haciendo cola para el horario gratuito del Reina Sofía, y ya estoy dentro.',
    'Me cuelo entre la multitud que accede al Reina Sofía.',
    'Entro en el Reina Sofía para olvidar que mi novio me ha dejado.',
    'He venido al Reina Sofía para conocer su Colección.',
    'Salto sobre un trampolín, y acabo en el interior del Reina Sofía.',
    'Tras leer un polémico hilo de Twitter, he decidido acercarme al Reina Sofía a ver si es tan interesante como dicen.',
    'He leído en la prensa que el Reina Sofía organizó su colección en ocho episodios, así que me acerco a mirar.',
    'Acabo de aterrizar en este extraño planeta, y he pensado empezar mi visita por el Reina Sofía.',
    'He entrado al Reina Sofía para llevarme una obra.',
    'He llegado al Reina Sofía siguiendo un pájaro extraño.',
    'Recuerdo la primera vez que entré al Reina Sofía.',
    'Una escalera misteriosa me ha conducido al Reina Sofía.',
    'Por mi cumpleaños, mi abuela me regaló una entrada al Reina Sofía, así que decido acercarme.',
    'Un recuerdo de mi infancia me ha dirigido hacia el Reina Sofía.',
    'Cruzo las puertas de entrada del Reina Sofía, con escaso interés.',
    'Voy al Reina Sofía de excursión con el colegio.',
    'Un hueco en la pared de mi habitación me ha dirigido al Reina Sofía.',
    'Hoy he quedado en el Reina Sofía.',
    'El día de mi cumpleaños, decido visitar el Reina Sofía.',
    'Me acerco al Reina Sofía, confundiéndolo con una nave espacial.',
    'Entro al Reina Sofía, ante una misteriosa invitación que ha llegado a mi bandeja de entrada.',
    'Miau, miau, soy un gato que se ha colado en el Reina Sofía.',
    'Dicen que el Reina Sofía está lleno de fantasmas; yo soy uno de ellos.',
    'Tras la lluvia, se han formado grandes charcos en el jardín del Reina Sofía.',
    'Unas grandes nubes prometen tormenta sobre el Reina Sofía.',
    'Espero con el grupo en la entrada de Sabatini. Hoy visto chándal.',
    'Me llegó un correo a spam donde me invitaban al Reina Sofía.',
    'Anoche soñé con las salas de un museo, hoy estoy aquí.',
    'Hace poco pasó algo triste. Vengo al museo en busca de paz.',
    'Hace poco pasó algo alegre. Entro al museo con ganas de celebrar.',
    'Entro en el museo por primera vez.',
    'Visito el museo por última vez.',
  ],
  end: [
    'Con extrañeza, pero también alegría, decido salir por la puerta del museo.',
    'Al marchar, en el trayecto, siento que algo ha cambiado.',
    'Al despertar, los recuerdos del museo siguen en mis retinas.',
    'Al salir del museo, decido ir a tomar una limonada.',
    'Al marchar, siento que he dejado parte de mí ahí dentro.',
    'Apoyo la cabeza en un banco y me dejo vencer por el sueño.',
    'Giro una última vez la cabeza al salir del museo, y veo a alguien transparente mirándome desde una ventana antes de desaparecer rápidamente.',
    'Fuera del Reina, hace un día buenísimo.',
    'Me despido del museo con una sonrisa de satisfacción.',
    'Alguien se ha dejado un trozo de empanada sobre un banco del jardín; tiene una pinta deliciosa.',
    'Marcho del museo y comienza a llover, así que corro a refugiarme de la tormenta.',
    'Antes de irme, tomo un poco de salvia del jardín del museo para la comida del día.',
    'Un vigilante de sala me observa mientras me acerco a la salida, y me dedica una última sonrisa.',
    'Al marchar, tengo la sensación de que alguien me persigue.',
    'Justo cuando quiero salir, caigo por un misterioso agujero a unas misteriosas profundidades.',
    'Mientras salgo del museo, doblo la entrada formando un avioncito de papel.',
    'Al atravesar el umbral para salir, una nave me abduce al espacio exterior.',
    'Intercambio una sonrisa con una de las mediadoras, y salgo del museo con satisfacción.',
    'Antes de salir, paso por el jardín del museo y me siento en un banco a mirar el cielo.',
    'Al salir del museo, sonrío sintiendo el peso de la obra que he tomado prestada.',
    'Durante la visita he pensado algunas cosas que no puedo decir',
    'Leí una vez un relato que hablaba de las últimas veces. Pienso: ¿habrá sido mi última visita al Reina Sofía?',
    'A la salida del museo, un montón de niños corretean por la plaza.',
    'Me despido del museo hasta dentro de dos semanas.',
    'Creo que me quedaré a vivir aquí.',
  ],
  experiences: [
    'Encuentro un grupo de personas bailando frente a una escultura.',
    'Sigo un camino de pintura azul a lo largo de unas escaleras.',
    'En el suelo, encuentro un cromo cuadrado con un trozo de mapa.',
    'En el suelo, encuentro un cromo cuadrado con la imagen de un barco.',
    'En una de las salas, el suelo está marcado con cintas de colores que unen las obras entre sí.',
    'Hay un señor mayor y una chica joven intercambiando cromos en un pasillo.',
    'Comparto uno de los ascensores de cristal con un grupo de chicas que se intercambian cromos.',
    'Un grupo de tres personas observan un recorte de periódico sobre un iceberg de la Expo del 92 en Sevilla.',
    'Hay un grupo haciendo una meditación guiada en los talleres de educación.',
    'Un grupo de tres personas avanzan por un pasillo mientras miran sus teléfonos móviles.',
    'Un grupo de tres personas observan con atención unas jarras con forma de cabezas humanas.',
    'Observo un conjunto de muebles pasados de moda y me pregunto qué harán allí expuestos.',
    'Alguien camina con un dibujo de un extraño ciervo colgado del cuello.',
    'Encuentro una pequeña silla de papel en una hornacina en la pared.',
    'Encuentro una pequeña mesa de papel sobre un escalón del museo.',
    'Atravieso varias salas sacando fotografías a los círculos que encuentro en las obras.',
    'Atravieso varias salas sacando fotografías a las líneas que encuentro en las obras.',
    'Observo una bandera de colores serpentear a lo lejos.',
    'Alguien ha metido un barco de papel en un cajetín con las hojas de sala; lo tomo y lo despliego.',
    'En el cajetín con las hojas de sala, encuentro una de ellas intervenida con dibujos.',
  ],
  words: {
    TIEMPO: [
      {
        sentence:
          'Intento señalar mi cumpleaños en el Calendario de Gilda Mantilla y Raymond Chaves.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/calendario-abril-2009-marzo-2010',
        key: 'Calendario',
      },
      {
        sentence:
          'En las pinturas de Carmen Laffón, las salinas parecen detenidas en el tiempo.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/sal-6',
        key: 'pinturas',
      },
      {
        sentence: 'Un enorme metrónomo marca el tiempo al final de un pasillo.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/indestructible-object-objeto-indestructible',
        key: 'metrónomo',
      },
    ],
    TERRITORIO: [
      {
        sentence:
          'Trato de distinguir los territorios demarcados en La división de la Tierra de Dierk Schmidt',
        url: 'https://www.museoreinasofia.es/coleccion/obra/die-teilung-der-erde-tableaux-zu-rechtlichen-synopsen-der-berliner-afrika-konferenz',
        key: 'La división de la Tierra',
      },
      {
        sentence:
          'Examino con atención los territorios señalados en el gran mapa de Juan Downey',
        url: 'https://www.museoreinasofia.es/coleccion/obra/video-trans-americas-0',
        key: 'gran mapa',
      },
      {
        sentence:
          'Miro durante cinco minutos la fotografía de un territorio llano y de apariencia adversa, que a la vez, me resulta poderosamente atrayente.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/vegas',
        key: 'la fotografía',
      },
    ],
    CELEBRACIÓN: [
      {
        sentence:
          'Me detengo a escuchar los instrumentos que cobran vida en la fiesta de Los Incontados de Mapa Teatro.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/incontados-triptico-variacion-pieza-teatral',
        key: 'Los Incontados',
      },
      {
        sentence:
          'Deseo estar en la fiesta que celebran los personajes de La Verbena de Maruja Mallo.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/verbena',
        key: 'La Verbena',
      },
      {
        sentence:
          'Deseo ponerme el traje de lagarteranas de una fotografía y llevármelo esta noche de fiesta.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/lagarteranas',
        key: 'una fotografía',
      },
    ],
    SILENCIO: [
      {
        sentence:
          'Deambulo por la sala con las esculturas de Richard Serra, que permanecen en un imponente silencio.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/equal-parallel-guernica-bengasi-igual-paralelo-guernica-bengasi',
        key: 'las esculturas',
      },
      {
        sentence:
          'La escultura Sin título de Hélio Oiticica se balancea muy lentamente en el silencio amarillo de la sala.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/sem-titulo-sin-titulo-2',
        key: 'Sin título',
      },
      {
        sentence:
          'Avanzo con asombro frente al silencio de las fotografías de paisajes de Bleda y Rosa.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/mesa-rey-navas-tolosa-verano-1212',
        key: 'fotografías',
      },
    ],
    IDENTIDAD: [
      {
        sentence:
          'Me subo a un andamio a observar las identidades de la obra Aparatoángel de Sonia Abián.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/aparatoangel',
        key: 'Aparatoángel',
      },
      {
        sentence:
          'Observo los números identificativos que cuelgan del cuello de los Yanomami fotografiados por Claudia Andujar.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/vertical-9',
        key: 'fotografiados',
      },
      {
        sentence:
          'Examino con atención algunas de las fichas de la obra Identidad de Artista de Angelo de Aquino.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/identidade-do-artista-identidad-artista',
        key: 'Identidad de Artista',
      },
    ],
    COLONIALISMO: [
      {
        sentence:
          'Avanzo mientras leo los textos de las Pinturas de Castas de Daniela Ortiz.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/pinturas-castas',
        key: 'Pinturas de Castas',
      },
      {
        sentence:
          'Me quedo observando largamente las vitrinas con piezas precolombinas pintadas por Sandra Gamarra.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/vitrina-vi-prehispanicoantisocialholgazaningrato',
        key: 'piezas precolombinas',
      },
      {
        sentence:
          'Observo con atención cada una de las piezas que conforman la instalación …y coloniales de Rogelio López Cuenca.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/coloniales',
        key: '…y coloniales',
      },
    ],
    CLIMA: [
      {
        sentence:
          'Observo con curiosidad la maqueta del pabellón climatizado de la Expo del 92, y casi puedo sentir el frío.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/maqueta-palenque',
        key: 'maqueta del pabellón climatizado',
      },
      {
        sentence:
          'Parece que hace un clima estupendo en una playa fotografiada por Xavier Miserachs.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/negocios-turisticos-objetivos-typical-cala-gogo',
        key: 'fotografiada',
      },
      {
        sentence:
          'En un paisaje de Esteban Francés, el cielo permanece detenido, generando un clima impropio en el mundo.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/arrangez-vous',
        key: 'un paisaje',
      },
    ],
    PODER: [
      {
        sentence:
          'Me siento frente a la instalación de Ines Doujak que habla sobre los dispositivos de poder durante la colonización de América.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/evviva-il-coltello-es-lebe-das-messer-viva-cuchillo',
        key: 'instalación de Ines Doujak',
      },
      {
        sentence:
          'Me planto frente a un póster de María María Acha-Kutscher, que me resulta empoderante.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/toma-calle-2011-madrid',
        key: 'póster',
      },
      {
        sentence:
          'En la penumbra, el edificio Flatiron de Nueva York se eleva imponente.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/toma-calle-2011-madrid',
        key: 'póster',
      },
    ],
    LÍNEAS: [
      {
        sentence:
          'Saco una fotografía de las serpenteantes líneas de Pájaros en el espacio de Joan Miró sin que nadie me mire.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/oiseaux-dans-lespace-pajaros-espacio',
        key: 'Pájaros en el espacio',
      },
      {
        sentence:
          'Observo con detenimiento las numerosas líneas que seccionan el Autorretrato cubista de Dalí.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/autorretrato-cubista',
        key: 'Autorretrato cubista',
      },
      {
        sentence:
          'Camino lentamente por encima de las líneas que se cruzan en una instalación de Luis Camnitzer.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/masacre-puerto-montt',
        key: 'una instalación',
      },
    ],
    CÍRCULO: [
      {
        sentence:
          'Me detengo con asombro ante el orbe parpadeante de Gil J Woman.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/lanticoncept-anticoncepto',
        key: 'orbe parpadeante',
      },
      {
        sentence:
          'Saco una rápida fotografía de una de las páginas del Libro de la Creación de Lygia Pape, con un gran círculo azul.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/livro-da-criacao-que-terra-era-redonda-e-girava-sobre-seu-proprio-eixo-libro-creacion',
        key: 'Libro de la Creación',
      },
      {
        sentence:
          'Observo el círculo central de la rueda de David Bestué, hecha con escoria de Valdemingómez.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/rueda-escoria-valdemingomez',
        key: 'círculo central',
      },
    ],
    REPETICIÓN: [
      {
        sentence:
          'Atiendo el vídeo Una y otra vez de Sara Ramo, mirando con sorpresa los personajes que van apareciendo.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/otra-vez',
        key: 'Una y otra vez',
      },
      {
        sentence:
          'Una secuencia geométrica en blanco y negro se repite en una obra de Soledad Sevilla.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/sin-titulo-336',
        key: 'una obra',
      },
      {
        sentence:
          'Busco una obra de Louise Lawler en el catálogo del museo, donde se explica cómo trabaja con la serialidad y la repetición.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/doubles-pairs-couples-dobles-pares-parejas',
        key: 'una obra',
      },
    ],
    MAPA: [
      {
        sentence:
          'Observo con atención las imágenes de uno de los tapices de TXT de Ana Torfs, centrándome en lo que parece un pequeño mapa.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/txt-engine-wandering-words-txt-motor-palabras-errantes-0',
        key: 'TXT',
      },
      {
        sentence:
          'Sigo con la mirada los elementos que se conectan entre sí sobre el mapa de Valencia de Rogelio López Cuenca.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/mapa-valencia-polivalencias-altercartografia-critica-ciudad',
        key: 'mapa de Valencia',
      },
      {
        sentence:
          'Me detengo para escudriñar con curiosidad el mapa de Sevilla intervenido por Constant.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/new-babylonsevilla-triana-groep-nueva-babiloniasevilla-grupo-triana',
        key: 'mapa de Sevilla',
      },
    ],
    TECNOLOGÍA: [
      {
        sentence:
          'Paseo alrededor de la instalación Hombre, máquina y movimiento de Richard Hamilton, estudiando las relaciones que plantea entre humanidad y tecnología.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/man-machine-motion-hombre-maquina-movimiento',
        key: 'Hombre, máquina y movimiento',
      },
      {
        sentence:
          'Observo una obra de Ana Buenaventura, generada por ordenador e impresa sobre papel continuo.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/salidas-ordenador-hexagonos-8',
        key: 'una obra',
      },
      {
        sentence:
          'Aprieto los ojos, tratando de descifrar el significado del Programa MOUVNT de Alexanco, sin éxito.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/programa-mouvnto',
        key: 'Programa MOVNT',
      },
    ],
    HOGAR: [
      {
        sentence:
          'Paso bajo el cuerpo de la Araña de Louise Bourgeois, y en lugar de intimidación, siento que me recoge como formando un hogar.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/spider-arana',
        key: 'Araña',
      },
      {
        sentence:
          'Camino con precaución junto a la ropa tendida en el hogar de Doña Concha, no sea que la vaya a manchar.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/dona-concha',
        key: 'ropa tendida',
      },
      {
        sentence:
          'Una mujer yace tumbada bajo una casa, como aplastada por su propio hogar.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/lying-house-casa-tumbada',
        key: 'yace tumbada',
      },
    ],
    CREACIÓN: [
      {
        sentence:
          'Me detengo con impresión ante las preciosas páginas del Libro de la Creación de Lygia Pape.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/livro-da-criacao-libro-creacion',
        key: 'Libro de la Creación',
      },
      {
        sentence:
          'Me inclino con curiosidad ante una obra de Tapiès y me pregunto por su proceso de creación.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/superposition-matiere-grise-superposicion-materia-gris',
        key: 'obra',
      },
    ],
    CUERPO: [
      {
        sentence:
          'Me quedo mirando los misteriosos cuerpos de las pinturas de Ángela García Codoñer.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/divertimento',
        key: 'misteriosos cuerpos',
      },
      {
        sentence:
          'Deseo tocar los cuerpos blandos de la escultura Abrazo de Dorothea Tanning',
        url: 'https://www.museoreinasofia.es/coleccion/obra/etreinte-abrazo',
        key: 'Abrazo',
      },
      {
        sentence:
          'Me pregunto cómo encajaría mi cuerpo en el interior una escultura de Franz Erhard Walther.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/ort-fur-korper-lugar-cuerpo',
        key: 'una escultura',
      },
    ],
    MIEDO: [
      {
        sentence:
          'Me pego un susto al entrar a una sala y ver sentadas a las esculturas humanas de Equipo Crónica.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/espectador-espectadores',
        key: 'esculturas humanas',
      },
      {
        sentence:
          'Me inquietan las figuras con máscaras blancas de una serie de fotografías en blanco y negro.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/cultura-felicidad',
        key: 'serie de fotografías',
      },
      {
        sentence: 'Me sobrecoge mirar una pintura con una enorme boca abierta.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/sonido-0',
        key: 'pintura',
      },
    ],
    FORMAS: [
      {
        sentence:
          'Las formas de una pintura de Juan Gris me producen curiosidad.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/table-du-musicien-mesa-musico',
        key: 'una pintura',
      },
      {
        sentence:
          'En un dibujo de Pepe Espaliú, unas muletas se entrelazan en formas indistinguibles.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/sin-titulo-359',
        key: 'dibujo',
      },
      {
        sentence:
          'Observo las sombras que producen en la pared las formas de una escultura de Gego.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/tronco-decagonal-no-4',
        key: 'escultura',
      },
    ],
    TERTULIA: [
      {
        sentence:
          'Me intrigan los oscuros personajes representados en La Tertulia del Café de Pombo, de José Solana.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/tertulia-cafe-pombo',
        key: 'La Tertulia del Café de Pombo',
      },
      {
        sentence:
          'Me pregunto de qué estarán hablando los personajes de La Tertulia de Ángeles Santos',
        url: 'https://www.museoreinasofia.es/coleccion/obra/tertulia',
        key: 'La Tertulia',
      },

      {
        sentence:
          'Me río con el título de esta fotografía: Atardecer en La Escala; ha llegado la hora del refresco lento y la conversación. Me dan ganas de ponerme a charlar con una limonada.',
        url: 'https://ladigitaldelreina.museoreinasofia.es/search/item/50527-atardecer-en-la-escala-ha-llegado-la-hora-del-refresco-lento-y-la-conversacion?offset=1',
        key: 'Atardecer en La Escala; ha llegado la hora del refresco lento y la conversación',
      },
    ],
    CIUDAD: [
      {
        sentence:
          'Observo una de las fotografías nocturnas de Berenice Abbott sobre la ciudad de Nueva York.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/new-york-night-nueva-york-noche',
        key: 'fotografías nocturnas',
      },
      {
        sentence:
          'Me pregunto por las vidas de unas personas fotografiadas por Paolo Gasparini en un parque de Bolivia.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/paz-bolivia-1',
        key: 'personas fotografiadas',
      },
      {
        sentence:
          'Miro con pesadumbre la fotografía de una ciudad derruida tomada por Gabriele Basilico.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/rue-allemby-rue-fakhry-bey-calle-allemby-calle-fakhry-bey',
        key: 'fotografía',
      },
    ],
    TRABAJO: [
      {
        sentence:
          'Imagino a los habitantes de La fábrica dormida, de Daniel Vázquez Díaz, despertándose para acudir a sus trabajos.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/fabrica-dormida',
        key: 'La fábrica dormida',
      },
      {
        sentence:
          'El cansancio del trabajo a veces es tan grande... de pronto leo "Campesino, rotas tus cadenas, no consientas te opriman otros tiranos" en una litografía de Arturo Ballester.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/campesino-rotas-tus-cadenas-no-consientas-opriman-otros-tiranos',
        key: '"Campesino, rotas tus cadenas, no consientas te opriman otros tiranos"',
      },
      {
        sentence:
          'Las ansiedades cotidianas del trabajo me asfixian. Ese lienzo del fondo me ordena: "¡Pare ahora!". Es de Pietrina Checcacci',
        url: 'https://www.museoreinasofia.es/coleccion/obra/pare-agora-pare-ahora-0',
        key: 'Pare ahora',
      },
    ],
    INOCENCIA: [
      {
        sentence:
          'Me produce inquietud y extrañeza la inocencia que transmite La comulgante de María Blanchard.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/comulgante',
        key: 'La comulgante',
      },
      {
        sentence:
          'Unas inocentes y humildes manos asoman en una obra de Andrea Büttner, pidiendo sin palabras.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/beggar-mendigo',
        key: 'obra',
      },
      {
        sentence:
          'En el interior de una inocente cajita, un astro traza su órbita sobre el mapa del cielo.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/celestial-navigation-birds-navegacion-celestial-aves',
        key: 'cajita',
      },
    ],
    CASA: [
      {
        sentence:
          'Me pregunto cómo quedaría la butaca de Josep Torres Clavé en el salón de mi casa.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/butaca',
        key: 'butaca',
      },
      {
        sentence:
          'En la fotografía de lo que parece una casa abandonada, una persona enmascarada me devuelve la mirada.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/arthur-rimbaud-new-york-arthur-rimbaud-nueva-york-0',
        key: 'la fotografía',
      },
      {
        sentence:
          'Una escultura blanca de Susana Solano forma lo que podría ser una pequeña casa.',
        url: 'https://ladigitaldelreina.museoreinasofia.es/search/item/96330-serie-la-lluna-n-ordm-4-serie-la-luna-n-ordm-4?offset=161',
        key: 'escultura blanca',
      },
    ],
    LEJANÍA: [
      {
        sentence:
          'Trato de distinguir el horizonte hacia el que dirige la mirada la Figura en una ventana de Salvador Dalí.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/figura-finestra-figura-ventana',
        key: 'Figura en una ventana',
      },
      {
        sentence:
          'En la obra Poniente de Rafael Alberti, unas pirámides se recortan frente a la coloreada lejanía, y deseo caminar hasta ella.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/sin-titulo-poniente',
        key: 'Poniente',
      },
      {
        sentence:
          'Más allá de unas misteriosas torres tubulares, me pregunto si en la lejanía se estará poniendo o saliendo el sol.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/paisaje-surrealista',
        key: 'misteriosas torres tubulares',
      },
    ],
    ESPACIO: [
      {
        sentence:
          'Miro con ensoñación el extraño espacio hostil de Alegoría del Invierno, de Remedios Varo.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/alegoria-invierno',
        key: 'Alegoría del Invierno',
      },
      {
        sentence:
          'Me imagino saltando por el espacio interior de una serie de esculturas de Donald Judd, de hueco en hueco.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/untitled-floor-sculpture-series-sin-titulo-serie-escultura-suelo',
        key: 'serie de esculturas',
      },
      {
        sentence: 'Una nave espacial de colores atraviesa el espacio exterior.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/viajeros-eter-1',
        key: 'nave espacial',
      },
    ],
    VIDA: [
      {
        sentence:
          'Observo con detenimiento todas las minúsculas vidas representadas en la superficie de Un mundo de Ángeles Santos.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/mundo',
        key: 'Un mundo',
      },
      {
        sentence:
          'Un vídeo de Marcelo Expósito muestra una calle rebosante de vida.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/imaginacion-radical-carnavales-resistencia',
        key: 'Un vídeo',
      },
      {
        sentence:
          'Me quedo mirando fijamente los maniquíes representados en una pintura de José Solana; casi pareciera que van a tomar vida.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/vitrinas',
        key: 'una pintura',
      },
    ],
    AMOR: [
      {
        sentence:
          'Contemplo con ternura (y también algo de vergüenza) la mirada amorosa que se intercambian Adán y Eva en la pintura de Rosario de Velasco.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/adan-eva-0',
        key: 'Adán y Eva',
      },
      {
        sentence:
          'Me pregunto si los dos personajes que aparecen en una pintura de Luis Castellanos serán amigos o amantes.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/atletas',
        key: 'una pintura',
      },
      {
        sentence:
          'Una gran letra A me hace pensar… ¿qué palabras empiezan por A? La primera que se me viene a la cabeza: amor.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/letra',
        key: 'una pintura',
      },
    ],
    EXPOSICIÓN: [
      {
        sentence:
          'Me detengo junto a la Dama oferente de Pablo Picasso, que se expuso en el Pabellón de España de la Exposición Internacional de París de 1937.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/femme-au-vase-dama-oferente',
        key: 'Dama oferente',
      },
      {
        sentence:
          'Paso junto a una pintura de Miró que, por lo que leo en la cartela, estuvo expuesta en la Trienal de Milán de 1988.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/personnages-et-oiseaux-devant-soleil-personajes-pajaros-delante-sol',
        key: 'pintura',
      },
      {
        sentence:
          'La maqueta del Pabellón de España en la Exposición Internacional de París de 1937 parece una casa de muñecas.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/pabellon-espana-exposicion-internacional-paris-1937',
        key: 'maqueta',
      },
    ],
    CAMINO: [
      {
        sentence:
          'Mis ojos siguen en vertical el camino que conforma la escultura blanca de Alberto, hasta la estrella de la cúspide.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/pueblo-espanol-tiene-camino-que-conduce-estrella-maqueta',
        key: 'la escultura blanca',
      },
      {
        sentence:
          'En una fotografía, veo con extrañeza un grupo de personas que permanecen tiradas al borde de un camino.',
        url: 'https://ladigitaldelreina.museoreinasofia.es/search/item/25308-trisha-brown-group-accumulation-in-central-park-acumulacion-de-grupos-en-central-park-de-trisha-brown?offset=25',
        key: 'una fotografía',
      },
    ],
    POESÍA: [
      {
        sentence:
          'El cielo de una pintura de René Magritte me genera una profunda intriga, como una poesía que no terminara de entender.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/grelots-roses-ciels-lambeaux-cascabeles-rosas-cielos-jirones',
        key: 'pintura',
      },
      {
        sentence:
          'Leo en voz alta, pronunciando como un poema, las palabras en francés que puedo entender de una obra de Broodthaers.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/peintures-pinturas',
        key: 'obra',
      },
      {
        sentence:
          'Me pregunto cómo podría replicar uno de los Poemobiles de Augusto de Campos y Julio Plaza.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/poemobiles',
        key: 'Poemobiles',
      },
    ],
    RITMO: [
      {
        sentence:
          'En la fotografía de los tejados de una ciudad, un grupo de personas se mueven al mismo ritmo.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/trisha-brown-roof-piece-1971-performance-work-trisha-brown-pieza-azotea-1971',
        key: 'la fotografía',
      },
      {
        sentence:
          'Trato de seguir el ritmo de los bailarines del vídeo M3X3 de Analívia Cordero.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/m3x3',
        key: 'vídeo',
      },
      {
        sentence:
          'Encuentro un atrayente ritmo en unas figuras cónicas que forman una curva en el espacio.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/sieves-tamices',
        key: 'figuras cónicas',
      },
    ],
    SUCIEDAD: [
      {
        sentence:
          'En una fotografía, sonríe una voluntaria tras limpiar la suciedad de los vertidos de chapapote en el mar.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/volunteer-watching-volunteer-smiling-isla-ons-191202-voluntaria-observando-voluntaria',
        key: 'una fotografía',
      },
      {
        sentence:
          'Una obra de Manolo Millares, que desde lejos me parece sucia y manchada, de cerca me transmite una sensibilidad especial.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/cuadro',
        key: 'Una obra',
      },
      {
        sentence:
          'Entre la suciedad de un vertedero, un grupo de hombres y mujeres, niñas y niños, rebuscan ante la mirada del fotógrafo.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/rebusca-vertederos-basura-tetuan-victorias',
        key: 'la mirada del fotógrafo',
      },
    ],
    BANDERA: [
      {
        sentence:
          'Deseo tomar la bandera de Asier Mendizábal y colgarla en la pared de mi cuarto.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/not-all-moves-red-tangram-4-7-no-todo-que-mueve-es-rojo-tangram-no-4-no-7',
        key: 'bandera',
      },
      {
        sentence:
          'Una tela de Maja Bajevic cuelga de una de las salas como una especie de bandera.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/arts-crafts-and-facts-100-productivity-77-total-compensationinflation-30-total',
        key: 'tela',
      },
      {
        sentence:
          'Observo una tela roja de Hélio Oiticica que cuelga solemne como una bandera.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/seja-marginal-seja-heroi-sea-marginal-sea-heroe-0',
        key: 'tela roja',
      },
    ],
    ARQUITECTURA: [
      {
        sentence:
          'Me quedo mirando durante largo rato la curiosa arquitectura de una pintura de Diego Rivera.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/cheminee-chimenea',
        key: 'pintura',
      },
      {
        sentence:
          'Una fotografía de ordenadas viviendas de un pueblo llama mi atención.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/vegaviana',
        key: 'fotografía',
      },
      {
        sentence:
          'Una extraña maqueta de forma cónica llama poderosamente mi atención, y me acerco a ella a curiosear.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/monumento-faro-colon',
        key: 'maqueta',
      },
    ],
    GUERRA: [
      {
        sentence:
          'Observo las fotografías de Dora Maar sobre la evolución del Guernica de Picasso, en cuya superficie se plasma el dolor de la guerra. ',
        url: 'https://www.museoreinasofia.es/coleccion/obra/reportage-sur-levolution-guernica-reportaje-sobre-evolucion-guernica-5',
        key: 'fotografías',
      },
      {
        sentence:
          'Me estremece una pintura de Ceija Stojka sobre los campos de concentración de la Segunda Guerra Mundial.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/auschwitz-2101944',
        key: 'pintura',
      },
      {
        sentence:
          'Observo el cartel de Joan Miró producido para reunir fondos republicanos durante la Guerra Civil.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/aidez-lespagne-ayudad-espana',
        key: 'cartel',
      },
    ],
    AMISTAD: [
      {
        sentence:
          'Las alegres mujeres de una pintura de Maruja Mallo me hacen pensar en mi mejor amiga.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/figuras-1',
        key: 'una pintura',
      },
      {
        sentence:
          'Me conmueve la amistad de la fotografía de Las dos Fridas de Las Yeguas del Apocalipsis.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/figuras-1',
        key: 'Las dos Fridas',
      },
      {
        sentence:
          'En una obra de Equipo Zaj, aparecen tres amigos que producen una sombra sobre el suelo.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/excavacion-zaj-i',
        key: 'una obra',
      },
    ],
    MEMORIA: [
      {
        sentence:
          'La obra Viñedo y Pájaros de Miguel Prieto me despierta lejanos recuerdos de mi pueblo.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/vinedo-pajaros',
        key: 'Viñedo y Pájaros',
      },
      {
        sentence:
          'Me quedo mirando una escultura de madera, que me trae a la memoria el parque infantil donde jugaba hace ya muchos años.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/formas-juegos-infantiles-iii',
        key: 'una escultura de madera',
      },
      {
        sentence:
          'Me quedo mirando durante cinco minutos una obra de Eusebio Sempere y trato de reproducir de memoria sus símbolos en un papel.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/sin-titulo-composicion',
        key: 'obra',
      },
    ],
    VIOLENCIA: [
      {
        sentence:
          'Sigo con la mirada las letras negras del cartel VIOLENCIA de Juan Carlos Romero.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/violencia',
        key: 'VIOLENCIA',
      },
      {
        sentence:
          'Pese a los vibrantes colores, percibo una violencia escondida en un dibujo de Aurelio Sánchez.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/carcel',
        key: 'un dibujo',
      },
      {
        sentence:
          'Ante la violencia aérea de la Guerra Civil, una mujer levanta con rabia su puño a un cielo cenizo.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/madrid-1937-aviones-negros',
        key: 'una mujer',
      },
    ],
    BARCO: [
      {
        sentence:
          'Agito levemente la cabeza mientras miro el pequeño barco en una obra de Feliciano Cinturón, como queriendo hacer que se balancee.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/inmensamente-azul',
        key: 'obra',
      },
      {
        sentence:
          'Una medalla de bronce muestra el hundimiento de un barco en el océano.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/sinking-hospital-and-civilian-refugee-ships-hundimiento-barco-hospital-refugiados',
        key: 'medalla de bronce',
      },
      {
        sentence:
          'Un grupo de personas contemplan con cansancio el océano desde la barandilla de un barco.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/como-llegue-mexico',
        key: 'grupo de personas',
      },
    ],
    TELEVISIÓN: [
      {
        sentence:
          'Trato de entender lo que sucede en las superficies pintadas de los televisores de Agustín Parejo School.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/lenin-cumbe',
        key: 'televisores',
      },
      {
        sentence:
          'Me detengo durante cinco minutos a observar lo que sucede en los televisores de una instalación.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/pm-magazine',
        key: 'una instalación',
      },
      {
        sentence:
          'En la televisión de una sala se reproduce una curiosa película de divertido nombre: Lúzirlúzir.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/luzirluzir',
        key: 'la televisión',
      },
    ],
    COTIDIANIDAD: [
      {
        sentence:
          'Una colorida familia representada por Luis Gordillo me transmite algo de cotidiano, y a la vez, una emoción perturbadora.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/familia-0',
        key: 'familia representada',
      },
      {
        sentence:
          'Una mujer se recoge el pelo en una larga coleta, y pienso en mi hermana peinándose esta misma mañana.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/femme-violet-mujer-violeta',
        key: 'Una mujer',
      },
      {
        sentence:
          'Sonrío ante una fotografía de un gran grupo de niños y niñas jugando con una pelota en un callejón.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/children-playing-baseball-ninos-jugando-al-beisbol',
        key: 'una fotografía',
      },
    ],
    VOZ: [
      {
        sentence:
          'Me resulta emocionante escuchar la voz de Pedro Lemebel saliendo de un altavoz en la sala.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/manifiesto-hablo-mi-diferencia-0',
        key: 'la voz',
      },
      {
        sentence:
          'Creo que, si las pinturas tuvieran voz, este retrato lanzaría un grito agudo y alarmado.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/cabeza-mujer-llorando-panuelo-i-postscripto-guernica',
        key: 'este retrato',
      },
      {
        sentence:
          'Puedo escuchar la voz cantarina de la escultura de una niña, riendo ante algo que sólo puedo imaginar.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/bambina-che-ride-nina-que-rie',
        key: 'escultura de una niña',
      },
    ],
    VIAJE: [
      {
        sentence:
          'Una pintura de Miró me recuerda a un viaje que hice hace años, donde me alojé en una casa en el campo.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/casa-palmera',
        key: 'pintura',
      },
      {
        sentence:
          'Veo una caja verde llena de papeles y objetos, como una maletita-museo que alguien se fuera a llevar de viaje.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/boite-verte-mariee-mise-nu-par-ses-celibataires-meme-caja-verde-novia-desnudada-sus',
        key: 'caja verde',
      },
      {
        sentence:
          'Veo unas fotografías en blanco y negro de personas en el metro… no parecen estar disfrutando mucho del viaje.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/untitled-subway-passengers-new-york-sin-titulo-pasajeros-suburbano-nueva-york-1',
        key: 'unas fotografías',
      },
    ],
    SUEÑO: [
      {
        sentence:
          'El hombre representado en una pintura de Alfonso Ponce de León parece dormido, puede que soñando bajo la luna.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/descanso',
        key: 'pintura',
      },
      {
        sentence:
          'Veo un largo rato la película Acariño Galaico, de Val del Omar, cuyas imágenes parecen salir de una delicada ensoñación.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/acarino-galaico-barro',
        key: 'Acariño Galaico',
      },
      {
        sentence:
          'Avanzando por el museo, me cruzo con una curiosa pintura cuyos colores y formas parecen sacadas de un sueño infantil.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/primer-consejo',
        key: 'curiosa pintura',
      },
    ],
    FRONTERA: [
      {
        sentence:
          'En una fotografía, una fila de personas entristecidas avanza por un camino, quizás hacia una frontera.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/road-barcelona-french-border-carretera-desde-barcelona-hasta-frontera-francia',
        key: 'una fotografía',
      },
      {
        sentence:
          'Una mesa de acero parece delimitar una silenciosa frontera entre la tierra y el suelo.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/mesa-omar-khayyam-ii',
        key: 'Una mesa de acero',
      },
      {
        sentence:
          'En el centro de un lienzo, una línea horizontal forma una frontera sobre el fondo amarillo.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/untitled-orange-plum-yellow-sin-titulo-naranja-ciruela-amarillo',
        key: 'centro de un lienzo',
      },
    ],
    DOLOR: [
      {
        sentence:
          'Me impacta una pintura de Maruja Mallo, que presenta una tierra arrasada por el dolor y la oscuridad.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/tierra-excrementos',
        key: 'una pintura',
      },
      {
        sentence:
          'Veo una fotografía de una mujer tirada en una escalera. Me pregunto si se habrá caído y le habrá dolido el golpe…',
        url: 'https://www.museoreinasofia.es/coleccion/obra/syntagma',
        key: 'una fotografía',
      },
      {
        sentence:
          'Al otro lado de una verja pintada, un grupo de personas me devuelve la mirada con miradas contraídas por el dolor.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/espoir-esperanza',
        key: 'una verja pintada',
      },
    ],
    TRANSFORMACIÓN: [
      {
        sentence:
          'Paso junto a una extraña obra en la que las figuras parecen en permanente transformación de colores.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/morfologia-psicologica',
        key: 'extraña obra',
      },
      {
        sentence:
          'Las Celdas de Clemente Padín me marean un poco. Parece que van a transformarse y convertirse en un videojuego.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/celda-1',
        key: 'Celdas',
      },
      {
        sentence:
          'Las sombras de una escultura tiemblan ligeramente contra la pared, transformando el espacio a su alrededor.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/proyecto-lausanne-maqueta',
        key: 'una escultura',
      },
    ],
    MUSEO: [
      {
        sentence:
          'Miro con curiosidad una fotografía de Ribalta en la que representa el interior de un museo de arte.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/imperio-o-kd-35',
        key: 'una fotografía',
      },
      {
        sentence:
          'Desde el interior de una vitrina de museo, una foquita me devuelve la mirada.',
        url: 'https://www.museoreinasofia.es/coleccion/obra/museo-historia-natural-londres',
        key: 'interior de una vitrina',
      },
      {
        sentence:
          'Me siento en uno de los bancos del museo y sigo con la mirada la separación entre las piedras de sus muros.',
        url: 'https://www.museoreinasofia.es/museo/historia',
        key: 'interior de una vitrina',
      },
    ],
  },
};
