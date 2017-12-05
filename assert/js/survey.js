/**
 * showDialog
 */
function showDialog(){
    $(document).on("click",".survey-item .explain_pic",function(){
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