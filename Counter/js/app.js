let count = 0 ;

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn){
    btn.addEventListener("click", function (e){
        const styles = e.currentTarget.classList;
        if (styles.contains("btn-primary")) {
            count--;
        } else if (styles.contains("btn-success")) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;
    });
});
