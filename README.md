# 🧘‍♀️ Landing Page Pilates

Landing page moderna e inspiracional sobre Pilates con diseño tipo Apple Fitness+, Nike Training Club y Adidas Mindful Movement.

## 🎨 Características

- **Hero dinámico adaptativo**: Video en desktop, imagen estática en mobile (mejor UX)
- **Diseño responsive** mobile-first (320px - 1440px+)
- **Animaciones suaves** con transiciones CSS
- **Barra superior inteligente** que aparece/desaparece con scroll
- **Botones funcionales** con integración a Google Maps
- **6 secciones completas** con contenido profesional
- **Paleta de colores** elegante y minimalista
- **Optimizado para rendimiento**: imágenes estáticas en mobile, video solo en desktop

## 💡 Decisiones UX/UI Profesionales

### Estrategia de Video Adaptativa

**Mobile (< 768px):**
- ✅ **Hero limpio con imagen** - Primera impresión profesional sin distracciones
- ✅ **Video accesible debajo** - Usuario puede ver el video scrolleando, en tamaño controlado
- ✅ **Carga rápida** - Hero con imagen estática carga instantáneo
- ✅ **Sin problemas de autoplay** - El video en sección dedicada no interfiere
- ✅ **Experiencia intuitiva** - El usuario decide cuándo ver el video
- ✅ **Video con controles** - Usuario puede pausar, ver en fullscreen, etc.

**Desktop (> 768px):**
- ✅ **Video inmersivo en hero** - Pantalla completa con overlay elegante
- ✅ **Autoplay con loop** - Experiencia cinematográfica
- ✅ **Controles disponibles** - Usuario puede pausar/reproducir/ajustar volumen
- ✅ **HD 1080p** - Máxima calidad visual

### ¿Por qué esta estrategia?

Esta solución combina lo mejor de ambos mundos:
1. **Hero profesional** en mobile (imagen estática)
2. **Video accesible** justo debajo (el usuario scrollea 1 segundo y lo ve)
3. **Mejor rendimiento** - La página carga rápido
4. **Control del usuario** - Decide cuándo interactuar con el video

Es la estrategia que usan sitios premium como **Peloton**, **Lululemon** y **ClassPass**.

## 📁 Estructura del Proyecto

```
pilates-landing/
│
├── index.html          # Estructura HTML principal
├── style.css           # Estilos personalizados
├── script.js           # Componentes React y funcionalidad
└── README.md           # Documentación
```

## 🚀 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/pilates-landing.git
   cd pilates-landing
   ```

2. **Abre el proyecto:**
   - Simplemente abre `index.html` en tu navegador
   - No requiere instalación de dependencias
   - Todo carga desde CDN

## 🌐 Despliegue

### GitHub Pages

1. Ve a la configuración de tu repositorio
2. En "Pages", selecciona la rama `main` o `master`
3. Tu sitio estará disponible en: `https://tu-usuario.github.io/pilates-landing`

### Netlify

1. Arrastra la carpeta del proyecto a [Netlify Drop](https://app.netlify.com/drop)
2. Tu sitio estará online en segundos

### Vercel

```bash
npm i -g vercel
vercel
```

## 🎯 Funcionalidades

### Navegación Inteligente

- **Botón "Descubre sus beneficios"**: Scroll suave a la sección de beneficios
- **Botón "Encuentra un centro cercano"**: Abre Google Maps con búsqueda de centros de Pilates
- **Botón "Explora más"**: Scroll suave a la sección "¿Qué es el Pilates?"

### Barra Superior

- Se oculta cuando estás en el hero (pantalla completa del video)
- Aparece suavemente después de 100px de scroll
- Logos clickeables con enlaces a:
  - [Fundación La Cumbre](http://www.fundacionlacumbre.cl/)
  - [Mindep - Ley del Deporte](http://www.mindep.cl/)

## 🎨 Paleta de Colores

- **Blanco puro**: `#FFFFFF`
- **Gris cálido**: `#F7F7F7`
- **Azul profundo**: `#0C3C78`
- **Verde bienestar**: `#31B977`

## 🔧 Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **React 18** - Componentes UI
- **Tailwind CSS** - Utilidades de diseño
- **Google Fonts** - Inter & DM Sans

## 📱 Responsive

La landing está optimizada para:
- 📱 Móviles (320px - 767px)
- 📱 Tablets (768px - 1023px)
- 💻 Desktop (1024px+)
- 🖥️ Wide screens (1440px+)

## 🤝 Colaboradores

- **Fundación La Cumbre** - [www.fundacionlacumbre.cl](http://www.fundacionlacumbre.cl/)
- **Mindep - Ley del Deporte** - [www.mindep.cl](http://www.mindep.cl/)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## ✨ Créditos

- **Imágenes**: [Unsplash](https://unsplash.com) (libres de derechos)
- **Video**: YouTube
- **Iconos**: SVG personalizados

---

Hecho con 💚 para promover el bienestar y el movimiento consciente
