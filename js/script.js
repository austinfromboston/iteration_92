$(function() {
  var views = {
    "assessment": "#assessmentK, #conceptsInput",
    "framework": "#frameworkK, #conceptsRecord",
    "design": "#designK, #conceptsRecord",
    "publish": "#designK, #conceptsRecord"
  },
  changeView = function(oldID, newID) {
    var hideList = views[oldID],
    showList = views[newID],
    result = "";
    if (showList === undefined) {
       return;
    } else {
      showList = showList.split(",");
    }
    if (hideList !== undefined) {
      hideList = hideList.split(",");
      $(hideList).each(function(index, element) {
        //result += "hide "+index+" "+element+"\n";
        $(element).hide();
      });
    }
    $(showList).each(function(index, element) {
      //result += "show "+index+" "+element+"\n"; 
      $(element).show();
    });
    //alert(result);
  }

  function loadContents() {
    $('[data-content]:not(.loaded)').each( function() {
      $(this).load($(this).data('content'));
      $(this).addClass('loaded');
    });
  }

  loadContents();

  changeView("assessment", "assessment");
  // top level steps
  $("#progress").accordion({
   change: function(event, ui) {
     changeView(ui.oldHeader.attr('id'), ui.newHeader.attr('id'));
     // ui.newHeader // jQuery object, activated header
     // ui.oldHeader // jQuery object, previous header
     // ui.newContent // jQuery object, activated content
     // ui.oldContent // jQuery object, previous content
   }
  });
  
});

