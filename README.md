# Detalles de la Implementación

Aquí está la prueba del Candidato Carlos Andrés Ortega Yate.

La prueba fue desarrollada en el framework de angular y cuenta con las siguientes características:
- la app cuenta con una sesión login y un dashboard, los cuales se activan con lazy loading, para un mejor performance.
- Cada módulo cuenta con un guard, el cual bloquea el acceso por URL.
- El usuario por defecto que se usa es admin y la contraseña es 12345, la sesión usa del Local Storage, para mantener iniciada.
- Cuenta con los dos componentes solicitados UserListComponent y UserFormComponent, además un componente Header, para reutilizar botones.
- El UserService como lo indicaba la prueba, solo se usa para la obtención de los usuarios y eliminación de estos. Las funciones de actualizar y añadir nuevo usuario, se realizan con sus respectivos eventos emitidos en el UserFormComponent.
- Los usuarios poseen una imagen, pero esto solamente es decorativa, ademas de ser opcional en la interfaz, por esta razón cuando se crea un nuevo usuario siempre se agrega la misma imagen de perfil por defecto, ya que la pueda no podia que fuera editable.
- El código está totalmente documentado, especificando que hace cada variable y función.
- Por último, el diseño implementado es totalmente responsivo, pensado para ser usado en cualquier dispositivo.

## test-codesa-carlos-ortega.vercel.app

## Development server

Clone el repositorio e instale las dependencias con "npm i".

Ejecute `ng serve` para un servidor de desarrollo. Navegue hasta `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Further help
Para obtener más ayuda sobre el CLI de Angular usa `ng help` o visita la página [Angular CLI Overview and Command Reference](https://angular.io/cli).
