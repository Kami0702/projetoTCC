   // Dados para o gráfico (porcentagens)
   const data = [25, 35, 20, 10, 10];

   // Cores para as fatias do gráfico
   const colors = ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#4bc0c0'];
   
   // Obtendo o elemento canvas
   const chartElement = document.getElementById('chart');
   
   // Renderizando o gráfico
   const ctx = chartElement.getContext('2d');
   let startAngle = 0;
   for (let i = 0; i < data.length; i++) {
     const sliceAngle = 2 * Math.PI * (data[i] / 100);
     ctx.fillStyle = colors[i];
     ctx.beginPath();
     ctx.moveTo(chartElement.width / 2, chartElement.height / 2);
     ctx.arc(
       chartElement.width / 2,
       chartElement.height / 2,
       Math.min(chartElement.width, chartElement.height) / 2,
       startAngle,
       startAngle + sliceAngle
     );
     ctx.closePath();
     ctx.fill();
     startAngle += sliceAngle;
   }

   
  