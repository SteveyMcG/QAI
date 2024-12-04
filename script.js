const form = document.getElementById('exampleForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try{
            const response = await fetch(form.action, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Form submitted successfully!');
            } else {
                alert('Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        
    });