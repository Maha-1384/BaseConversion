  function convrt() {
      let to = parseInt(document.getElementById('to').value, 10);
      let from = parseInt(document.getElementById('from').value, 10);
      let input = document.getElementById('val').value;
      // Check if both bases and input is provided
      if (!from || !to) {
        document.getElementById('ans').textContent = "Please select both 'from' and 'to' bases.";
        return;
      }
      if (input.trim() === "") {
        document.getElementById('ans').textContent = "Please enter a value to convert.";
        return;
      }
      // Validate the input for the 'from' base
      let value = parseInt(input, from);
      if (isNaN(value)) {
        document.getElementById('ans').textContent = `Invalid value for base ${from}.`;
        return;
      }
      // Convert to the target base
      let answer = value.toString(to);
      answer = answer.toUpperCase()
      document.getElementById('ans').innerHTML = input + "<sub>(" + from + ")</sub> = " + answer + "<sub>(" + to + ")</sub>";
    }
    document.getElementById('btn').addEventListener('click', function() {
    this.classList.add('shrink'); 
        setTimeout(() => {
            this.classList.remove('shrink');
        }, 200);
    });
