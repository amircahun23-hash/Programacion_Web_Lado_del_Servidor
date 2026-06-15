// jaiero amir cahun tamay
/* REFLEXIÓN - EJERCICIO 1.3

  1. ¿Cuál es la diferencia fundamental entre un módulo nativo (como 'fs')
     y un módulo de NPM (como 'sillyname') en cuanto a su origen e instalación?
     
     Un módulo nativo como 'fs' ya viene incluido con NodeJS, no necesitas
     instalarlo. Un módulo de NPM como 'sillyname' es creado por otros
     desarrolladores y debes instalarlo con 'npm i' antes de usarlo.

  2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require' (CommonJS)
     y 'import' (ES Modules)? Considera el momento en que se cargan los módulos.
     
     'require' carga el módulo en el momento en que se ejecuta esa línea
     (carga dinámica). 'import' carga el módulo antes de ejecutar el código
     (carga estática). Para usar 'import' se necesita agregar "type": "module"
     en el package.json.

  3. Sobre el archivo 'package.json':
     a) ¿Por qué es vital compartir este archivo pero NO la carpeta
     'node_modules' al subir a un repositorio?
     
     Porque 'node_modules' puede pesar mucho y contiene miles de archivos.
     Con el 'package.json' cualquier persona puede recuperar todas las
     dependencias corriendo 'npm install'.
     
     b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo
     tiene el package.json?
     
     NodeJS lee el package.json, descarga e instala automáticamente todos
     los paquetes listados en dependencies y crea la carpeta node_modules.
*/