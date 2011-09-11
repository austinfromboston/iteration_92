$(function() {
  var views = {
    "assessment": "#assessmentK",
    "framework": "#frameworkK",
    "design": "#designK"
  },
  changeView = function(oldID, newID) {
    var fadeList = views[oldID].split(","),
    showList = views[newID].split(","),
    result = "";
    $(fadeList).each(function(index, element) {
      //result += "hide "+index+" "+element+"\n";
      $(element).hide();
    });
    $(showList).each(function(index, element) {
      //result += "show "+index+" "+element+"\n"; 
      $(element).show();
    });
    //alert(result);
  }
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

