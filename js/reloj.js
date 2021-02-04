( function() {

    /**
     * Código del reloj
     */
    const actualizaHora = () => {
        const fechaHoy = new Date();
        const diasSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sánbado'];
        const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        
        /***
         * Variables para la fecha
        */
        let diaSemana = fechaHoy.getDay();
        let diaMesHoy = fechaHoy.getDate();
        let mesHoy = fechaHoy.getMonth();
        let anioHoy = fechaHoy.getFullYear();

        /**
         * Variables para la hora
         */
        let horaActual = fechaHoy.getHours();
        let minutosActual = fechaHoy.getMinutes();
        let segundosActual = fechaHoy.getSeconds();

        /**
         * Acceso al DOM
         */
        let diasemana = document.getElementById('diasemana');
        let dia = document.getElementById('dia');
        let mes = document.getElementById('mes');
        let anio = document.getElementById('anio');

        let hora = document.getElementById('hora');
        let minutos = document.getElementById('minutos');
        let segundos = document.getElementById('segundos');
        let ampm = document.getElementById('ampm');

        
        /**
         * Asignacio de datos a textContent
         */
        diasemana.textContent = diasSemana[diaSemana];
        dia.textContent = diaMesHoy;
        mes.textContent = meses[mesHoy];
        anio.textContent = anioHoy;

        if(horaActual > 12) {
            horaActual = horaActual - 12;
            ampm.textContent = 'PM';
        } else {
            ampm.textContent = 'AM';
        }

        hora.textContent = horaActual;
        minutos.textContent = minutosActual;
        segundos.textContent = segundosActual;
    };

    actualizaHora();

    let reloj = setInterval(actualizaHora, 1000);
}() )