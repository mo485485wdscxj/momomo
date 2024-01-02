 

    function finishQuiz() {
        const form = document.getElementById('quizForm');
   
        const formData = new FormData(form);
        let yesCount = 0;
        for (let i = 1; i <= 3; i++) {
        for (const entry of formData.entries()) {
            if (entry[1] === 'yes') {
                yesCount++;
            } 
        }

        alert( "thank you "+    "  " +`Yes: ${yesCount}`);
        window.location.href="file:///C:/Users/moemen.mahmoud/Desktop/momen%20wheleer%20(3)/momen_home%20-page.html";

     
    }
    }
