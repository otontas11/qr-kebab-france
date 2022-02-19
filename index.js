$('.thumbnail').click(function () {
    $('.modal-body').empty();
    $($(this).parents('div').html()).appendTo('.modal-body');
    $('#modal').modal({ show: true });
});

$('#modal').on('show.bs.modal', function () {
    $('.col-6,.row .thumbnail').addClass('blur');
})

$('#modal').on('hide.bs.modal', function () {
    $('.col-6,.row .thumbnail').removeClass('blur');
})


let switcherLi = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

switcherLi.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", filter);
});

function removeActive() {
    switcherLi.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

function filter() {
    imgs.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    });
}
