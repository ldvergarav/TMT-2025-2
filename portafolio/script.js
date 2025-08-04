document.addEventListener('DOMContentLoaded', () => {
const posts = [
  {
    type: "Artículo",
    date: "feb. 13, 2025",
    title: '"Las cuchas tienen razón" y no debemos olvidarnos de ello',
    thumbnail: "https://cdn.glitch.global/7141998e-ade9-4dcf-b6e6-c8043aa58702/mural-cuchas.jpeg?v=1741662588091",
    description: "El mural de 'Las cuchas tienen razón' ha generado disputas entre la ciudadanía y ha vuelto a abrir una conversación sobre los desaparecidos en La Escombrera por la Operación Orión.",
    url: "escritos/articulos/20250213-las-cuchas-tienen-razon-sin-olvido.html",
  },
  {
    type: "Entrevista",
    date: "mar. 4, 2025",
    title: '"Es un círculo de nunca acabar. La violencia es violencia, no importa de dónde venga"',
    thumbnail: "https://cdn.glitch.global/7141998e-ade9-4dcf-b6e6-c8043aa58702/JuanFernandoRamon.jpeg?v=1741664645755",
    description: "Entrevista con el neurocirujano Juan Fernando Ramón Cuellar. Sus vivencias en la Colombia profunda de 1997 -en su año como un jóven médico rural- dan cuenta de la realidad del conflicto armado en el país.",
    url:"escritos/articulos/20250204-entrevista-JuanFernandoRamon.html",
  },
  {
    type: "Ensayo",
    date: "jul. 24, 2023",
    title: "Del optimismo en los relatos del terror: Las declaraciones de Salvatore Mancuso en la JEP como una oportunidad para la restauración de derechos y reparación de las víctimas del conflicto armado en Colombia",
    thumbnail: "https://cdn.glitch.global/7141998e-ade9-4dcf-b6e6-c8043aa58702/mancuso.webp?v=1741841430035",
    description: "Ensayo argumentativo sobre las oportunidades de la inclusión del ex-paramilitar Salvatore Mancuso en la Justicia Especial para la Paz.",
    url:"escritos/ensayos/20230724-mancuso-jep.html",
  },
  {
    type: "Reseña",
    date: "ene. 30, 2023",
    title: "Matuna: la sombra del guerrero. Entre los diálogos y las tensiones de la interculturalidad",
    thumbnail: "https://cdn.glitch.global/7141998e-ade9-4dcf-b6e6-c8043aa58702/matuna.jpg?v=1741841372414",
    description: "Reseña sobre la película Matuna: la sombra del guerrero en clave antropológica.",
    url:"escritos/reseñas/20230130-matuna-interculturalidad.html",
  }
];

function createPostElement(post, index) {
  const postElement = document.createElement('a');
  postElement.classList.add('post-container');
  postElement.setAttribute('id', `post${index + 1}`);
  postElement.setAttribute('href', post.url);
  postElement.setAttribute('target', '_self');

   const column = (index % 2) + 1;
    postElement.style.gridColumnStart = column;

    if (column == 2) {
      postElement.style.position = 'relative';
      postElement.style.top = '50%';
    }

  postElement.innerHTML = `
    <div class="post-type">${post.type}</div>
    <div class="post-date">${post.date}</div>
    <div class="post-title">${post.title}</div>
    ${
      post.thumbnail
        ? `<img class="post-thumbnail" src="${post.thumbnail}" alt="${post.title}">`
        : ""
    }
    <div class="post-description">${post.description}</div>
  `;

  return postElement;
}

  window.loadPosts = function () {
    const container = document.querySelector('.blog-container');
    container.innerHTML = "";
    posts.forEach((post, index) => {
      const postElement = createPostElement(post, index);
      container.appendChild(postElement);
    });
  };

  window.loadFilteredPostsByType = function (...types) {
  const container = document.querySelector('.blog-container');
  container.innerHTML = "";

  const filteredPosts = posts.filter(post => types.includes(post.type));

  filteredPosts.forEach((post, index) => {
    const postElement = createPostElement(post, index);
    container.appendChild(postElement);
  });
};

  if (window.location.pathname.includes('articulos.html')) {
  window.loadFilteredPostsByType('Artículo', 'Entrevista');
} else if (window.location.pathname.includes('ensayos.html')) {
  window.loadFilteredPostsByType('Ensayo');
} else if (decodeURIComponent(window.location.pathname).includes('reseñas.html')) {
  window.loadFilteredPostsByType('Reseña');
} else {
  window.loadPosts();
}
  
      function observeElements(selector) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
  });

  elements.forEach((element) => {
    observer.observe(element);
  });
}
observeElements('.post-container');
 });

//videos

document.addEventListener('DOMContentLoaded', () => {
  const videos = [
    {
      title: "Crisis 2025",
      source: "https://www.youtube.com/embed/w42sxUqFxEU"
    },
    {
      title: "Perfil de medios - Revista Hekatombe",
      source: "https://www.youtube.com/embed/y-Cmbj_pBhU"
    },
    {
      title: "El amor en tiempos de redes sociales",
      source: "https://www.youtube.com/embed/kXDMHRO3EN4"
    },
    {
      title: "¿Cómo nos benefician las remesas?",
      source: "https://cdn.glitch.me/7141998e-ade9-4dcf-b6e6-c8043aa58702/GEFE%20Remesas.mov?v=1741989196339"
    },
    {
      title: "Reforma tributaria para empresas",
      source: "https://cdn.glitch.me/7141998e-ade9-4dcf-b6e6-c8043aa58702/GEFE%20Ref%20tribut%20empresas.mov?v=1741879724763"
    }
  ];

  function createVideoElement(video, index) {
    const videoElement = document.createElement('div');
    videoElement.classList.add('video-container');

    const column = (index % 3) + 1;
    videoElement.style.gridColumnStart = column;

    if (column !== 2) {
      videoElement.style.position = 'relative';
      videoElement.style.top = '50%';
    }

    if (video.source.includes('youtube.com')) {
     
      videoElement.innerHTML = `
        <iframe width="100%" height="250" 
          src="${video.source}" 
          title="${video.title}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
        <p>${video.title}</p>
      `;
    } else {
      
      videoElement.innerHTML = `
        <video width="100%" height="250" controls>
          <source src="${video.source}" type="video/mp4">
          Tu navegador no soporta esta extensión de video.
        </video>
        <p>${video.title}</p>
      `;
    }
    

    videoElement.addEventListener('click', () => openModal(video.source, video.source.includes('youtube.com')));
    return videoElement;
  }

  function openModal(videoSrc, isYouTube) {
    const modal = document.getElementById('videoModal');
    const modalContent = document.querySelector('.modal-content');
    modal.style.display = 'block';

    if (isYouTube) {
      
      modalContent.innerHTML = `
        <iframe id="modalVideo" width="100%" height="100%" src="${videoSrc}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      `;
    } else {
      
      modalContent.innerHTML = `
        <video id="modalVideo" width="100%" height="100%" controls autoplay>
          <source src="${videoSrc}" type="video/mp4">
          Tu navegador no soporta esta extensión de video.
        </video>
      `;
    }
  }

  function closeModal() {
    const modal = document.getElementById('videoModal');
    const modalContent = document.querySelector('.modal-content');
    modal.style.display = 'none';
    modalContent.innerHTML = ''; 
  }

  document.querySelector('.close').addEventListener('click', closeModal);

  window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
      closeModal();
    }
  };

  function loadVideos() {
    const videoContainer = document.querySelector('.audiovisual-container');
    if (!videoContainer) {
      console.log("No video container found");
      return;
    }

    videoContainer.innerHTML = "";

    videos.forEach((video, index) => {
      const videoElement = createVideoElement(video, index);
      videoContainer.appendChild(videoElement);
    });
  }

  if (window.location.pathname.includes('audiovisual.html')) {
    loadVideos(); 
  }

  const videoRatio = document.querySelectorAll('.video-container video');

  videoRatio.forEach(video => {
    video.addEventListener('loadedmetadata', () => {
      if (video.videoHeight > video.videoWidth) {
        video.parentElement.classList.add('vertical');
      }
    });
  });

  function observeElements(selector) {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    elements.forEach((element) => {
      observer.observe(element);
    });
  }

  observeElements('.video-container');
});