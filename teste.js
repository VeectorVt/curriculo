
        var i = 0
        function ver(){
          
            
            if (i == 0) {
                i = 1

                var bar = document.getElementsByClassName('movebar')
                var width = 10;
                var id = setInterval(frame, 10)
                function frame() {
                    
                     if (width >= 85) {
                        clearInterval(id)
                        i = 0
                    } else {
                        width++
                        bar.style.width = width + "%"
                        bar.innerHTML = width + "%"
                    }
                }
            }
        }  
    