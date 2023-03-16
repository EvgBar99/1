document.addEventListener("DOMContentLoaded",function(){


  var x, i, j, selElmnt, a, b, c;
  /*look for any elements with the class "custom-select":*/
  x = document.getElementsByClassName("custom-select");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          /*when an item is clicked, update the original select box,
          and the selected item:*/
          var y, i, k, s, h;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          h = this.parentNode.previousSibling;
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
  }
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);
  
  
  
  
  
  
  
  
  
  
    $(".multiply_btn").each( function() {
      var currentMultiplyBtn = $(this);
      var multiplyingGroup = $(this).prev().prev(".form_group-multiple");
      var multiplyingGroupNewGroup = multiplyingGroup.clone();
  
      var count = 1;
  
      currentMultiplyBtn.on( "click", function() {
          var newGroup = multiplyingGroupNewGroup.clone();
          newGroup.find("input").val("");
          var blocks = $(this).prev(".multiply_content").find(".form_group-multiple").length + 1;
  
          $(this).prev(".multiply_content").append(newGroup);
          count++;
  
          newGroup.find("select").each( function() {
              var currentFormItem = $(this);
              var currentFormItemName = currentFormItem.attr("name");
              currentFormItem.attr("name", currentFormItemName + "-" + count);
          });
  
          newGroup.find("input").each( function() {
              var currentFormInput = $(this);
              var currentFormInputName = currentFormInput.attr("name");
              currentFormInput.attr("name", currentFormInputName + "-" + count);
          });
  
          if ( blocks == 2 ) {
              currentMultiplyBtn.addClass("no-action");
          }
  
          $(".multiply_reset_btn").click(function() {
              count--;
              $(this).parents(".form_group-multiple").remove();
  
              if ( blocks <= 2 ) {
                  currentMultiplyBtn.removeClass("no-action");
              }
          });
      });
    });
  
    $(".file_info").fadeOut(100);
    
    $(document).on('change', 'input[type=file][class!=multiple_input]', function(e) {
      var fileName = $(this).val().replace(/\\/g, '/').replace(/.*\//, '');
      $(this).next().fadeOut(100);
      $(this).parent().find(".file_name").text(fileName);
      $(this).parent().find(".file_info").fadeIn(200);
    });
  
  
  
    $("input[type=file][class!=multiple_input]").parent().find(".clear_file").on( "click", function() {
    $(this).parent().siblings("input[type=file]").val("");
    $(this).parent().siblings("input[type=file]").removeAttr("disabled");
    $(this).parent().fadeOut(100);
    $(this).parent().parent().find("input").next().fadeIn(200);
    });
  
    $(".is_value").each( function() {
      $(this).fadeIn(200);
      $(this).siblings(".add_btn").fadeOut(100);
    });
  
    var counter = 1;
  
    $(document).on('change', '.multiple_input', function(e) {
      var fileUploadGroup = $(this).parent().addClass("file_input-clone");
      var newFileUploanGroup = fileUploadGroup.clone().removeClass("file_input-clone");
      var currentName = $(this).attr("name");
      var currentId = $(this).attr("id");
  
      $(this).next(".uploaded_files").empty();
      var fname = this.files[0].name;
  
      for (var i = 0; i <= this.files.length - 1; i++) {
          fname = this.files[i].name;
          $(this).next(".uploaded_files").append('' +
              '<div class="inline_txt file_info file_info-multiple">' +
              '<span class="clear_file"><i class="material-icons">highlight_off</i></span>' +
              '<span class="file_name">' + fname + '</span></div>');
          $(this).parent(".file_input-clone").find("input[multiple]").attr("disabled","disabled");
  
          $(this).parent().parent().append(newFileUploanGroup);
      }
  
      counter++;
      newFileUploanGroup.find("input").attr("name", currentName + "-" + counter);
      newFileUploanGroup.find("input").attr("id", currentId + "-" + counter);
      newFileUploanGroup.find("label").attr("for", currentId + "-" + counter);
  
      $(this).parent().find(".clear_file").each(function () {
          $(this).on("click", function () {
              $(this).parent().parent().parent().find(".multiple_input").val("");
              $(this).parent().remove();
          });
      });
    });
  
    $(document).on('click', '.file_input .clear_file', function() {
      $(this).parent().parent().parent().find(".multiple_input").val("");
      $(this).parent().fadeOut(100);
    });
  
    $("input[type='radio']").change( function() {
    if ($('.false_value').is(':checked')) {
      $(".form_selectible_field").find("textarea").attr('disabled', "disabled");
      $(".form_selectible_field").find(".form_group input").attr('disabled', "disabled");
    }
    else {
    $(".form_selectible_field").find("textarea").removeAttr("disabled");
    $(".form_selectible_field").find(".form_group input").removeAttr("disabled");
    }
    });
  
     $("textarea").keyup(function(){
       var textLength = $(this).parent().find(".textarea-note").text().split(" ");
       if(!$(this).attr("rel")){
         $(this).attr("rel",textLength[0]);
       } else{
         textLength[0] = $(this).attr("rel")
       }
       if($(this).val().length<textLength[0]){
       showLength = textLength[0] -$("textarea").val().length;
       $(this).parent().find(".textarea-note").text(showLength+" "+textLength[1])
       } else{
         $(this).val($(this).val().substr(0, $(this).attr("rel")))
       }
    });
  
    $("textarea").keyup(function(){
      var textLength = $(this).parent().find(".textarea-note").text().split(" ");
      if(!$(this).attr("rel")){
          $(this).attr("rel",textLength[0]);
      } else{
          textLength[0] = $(this).attr("rel")
      }		
      if($(this).val().split(" ").length<textLength[0]){
          showLength = textLength[0] -$(this).val().split(" ").length;
          $(this).parent().find(".textarea-note").text(showLength+" "+textLength[1])
      } else{
          $(this).val($(this).val().substr(0, $(this).val().length-1));
      }
    });
  
    $(document).on('change', 'input', function() {
      if (this.value) {
          $(this).addClass("inpInvalid");
      } else {
          $(this).removeClass("inpInvalid");
      }
    });
  
  
    $(".datepicker").removeAttr("readonly");
  
    $(".datepicker").on('change', function() {
    if (this.value) {
    $(this).addClass("inpInvalid");
    } else {
    $(this).addClass("inpInvalid");
    }
    });
  
    $('select, textarea').on('change', function() {
    if (this.value) {
    $(this).addClass("inpInvalid");
    } else {
    $(this).removeClass("inpInvalid");
    }
    });
  
    $('select, textarea, input').each(function() {
    if ($(this).val()) {
    $(this).addClass("inpInvalid");
    } else {
    $(this).removeClass("inpInvalid");
    }
    });
  
    $('select, textarea').on('input', function() {
    if (this.value) {
    $(this).addClass("inpInvalid");
    } else {
    $(this).removeClass("inpInvalid");
    }
    });
  
    $("[type='submit']").on( "click", function() {
    $('input').addClass("inpInvalid");
    $('select').addClass("inpInvalid");
    $('textarea').addClass("inpInvalid");
  
    if( $('*').attr("required") === undefined ) {
    $("*[required!='required']").removeClass("inpInvalid");
    }
  
    $("*[required!='required']").each(function() {
    if( $(this).val() ) {
        $(this).addClass("inpInvalid");
    }
    });
  });
  
  });
  