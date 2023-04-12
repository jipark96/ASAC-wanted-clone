const section7Ul = document.getElementById('section7Ul');
const section7Li = document.getElementById('section7Li');

        for(let i = 0; i<28; i++) {
          const newItem = section7Li.cloneNode(true);
          section7Ul.appendChild(newItem);
        }