$("#btn-next").on("click", function(event){
    event.preventDefault();

    var zipcode = $('#InputZipcode').val();
    console.log(zipcode);

    var modal = $('#ModalForm');
    modal.find("#inputZip").val(zipcode);
});


