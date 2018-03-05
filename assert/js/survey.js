/**
 * showDialog
 */
function showDialog(){
    $(document).on("click",".survey-item .explain_pic",function(){
        $(".dialog").fadeIn();
    });
    $(document).on("click",".survey-item .answer_pic",function(){
        $(".dialog").fadeIn();
    });
}

/**
* hideDialog
*/
function hideDialog(){
    $(document).on("click",".dialog .close-dialog",function(){
        $(".dialog").fadeOut();
    });
    $(document).on("click",".survey-item .answer_pic",function(){
        $(".dialog").fadeOut();
    });
}


/**
 * click Reset show confirm dialog
 */
function showConfirmResetDialog(){
    $(document).on("click","#reset",function(){
        $(".resetDialog").fadeIn();
    });
}

/**
 * hide reset confirm dialog
 */
function hideConfirmResetDialog(){
    $(document).on("click",".resetDialog .close-dialog",function(){
        $(".resetDialog").fadeOut();
    });
}

/**
 * confirm reset & clear input data
 */
function confirmResetClearData(){
    $(document).on("click",".resetDialog .btn-yes",function(){
        $(".score").val("");
        $(".certainty").val("");
        $(".comment").val("");
        $(".thanks-comment").val("");
        $(".resetDialog").fadeOut();
    });
}

/**
 * no reset & hide Dialog
 */
function hideNoConfirmReset(){
    $(document).on("click",".resetDialog .btn-no",function(){
        $(".resetDialog").fadeOut();
    });
}


/**
 *
 * Check that the input value is only 1-10.
 */
function checkNum(o){
    var value = Number(o.value);
    if( value<1 || value>10){
        $(".error-msg").show();
        o.value="";
    }else{
        //匹配1.0-10.0的数
        var reg = new RegExp(/^\d{1,2}(\.\d)?$/);
        if(reg.test(value)){
            $(".error-msg").hide();
            return true;
        }else{
            $(".error-msg").show();
            o.value="";
            return false;
        }
    }
}


/**
* 0305 answer_list module js
 */

$(function(){
   $(".select").mouseenter(function(){
       $(this).find(".arrow_icon").addClass("arrow_icon_hover");//change arrow icon
       $(this).find(".select_list").addClass("show").removeClass("hide");//show select list
       $(this).find(".hide").removeClass("hide");
       $(this).parents(".answer_item").css("z-index",1);
   }) ;

   $(".select").mouseleave(function(){
       //debugger;
       $(this).parents(".answer_item").css("z-index",0);
       $(this).find(".arrow_icon").removeClass("arrow_icon_hover");
       $(this).find(".select_list").addClass("hide").removeClass("show");
       $(this).find(".select_item").not(".show").addClass("hide");
   });
});

$(function(){
    $(".select_item").click(function(){
        $(this).find(".select_icon").addClass("select_icon_check");
        $(this).siblings().find(".select_icon").removeClass("select_icon_check");//change circle icon
        $(this).addClass("show-1").removeClass("hide");
        $(this).siblings(".select_item").addClass("hide").removeClass("show-1");
        $(this).parents(".select_list").addClass("show-1");
        $(this).parents(".select_list").prev(".input_hide").val($(this).text());//
    })
});


