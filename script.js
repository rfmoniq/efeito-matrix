var canvas = document.getElementById ('canvas');
        var ctx = canvas.getContext ('2d');

        // tela cheia
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        var texts = '01010101'.split ('');
        var fontSize = 16;
        var columns = canvas.width/fontSize;
        var drops = [];
        for (var x =0; x < columns; x++) {
            drops[x] = 1;
        }

        // desenhando os caracteres
        function draw () {
            ctx.fillStyle = 'rgba(0,0,0,0.05)';
            ctx.fillRect (0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0F0';
            ctx.font = fontSize+ 'px arial';

            // criando o looping 
            for (var i =0; i < drops.length; i++) {

                var text = texts[Math.floor (Math.random()*texts.length)]; // imprime caracteres aleatórios
                ctx.fillText (text,i*fontSize,drops[i]*fontSize);

                // adicionando gotas aleatórias 
                if (drops[i]*fontSize > canvas.height || Math.random() > 0.95) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

        setInterval(draw, 33);