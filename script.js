document.querySelectorAll('.offer-box').forEach(box => {
    box.addEventListener('click', function () {
        document.querySelectorAll('.offer-box').forEach(b => {
            b.classList.remove('active');
            b.querySelector('.offer-details').style.display = 'none';
            b.querySelector('.discount-button').checked = false;
        });

        this.classList.add('active');
        this.querySelector('.offer-details').style.display = 'block';
        this.querySelector('.discount-button').checked = true;
    });
});