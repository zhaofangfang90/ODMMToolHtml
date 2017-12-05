/**
 * report tab
 */
$(function(){
    changeReport();
});

function changeReport(){
        $(document).on("click", ".report-tab .references-item", function(){
            var reportTab             = $(this).parents(".report-tab");
            var referencesItem      = reportTab.find(".references-item");
            var referencesContent = reportTab.find(".references-content");

            referencesItem.removeClass("references-curr-item");
            $(this).addClass("references-curr-item");
            var index = $(this).data("index");

            referencesContent.removeClass("references-curr-content");
            referencesContent.eq(index).addClass("references-curr-content");
        });
}