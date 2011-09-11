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
  setInterval(loadContents, 2000);

  $('.assessmentInputButton input').live('click', function() {
    $('.assessmentAnswer').show();
    $(this).hide();
    $('.assessmentAnswerSaveButton').show();
  });
  $('.assessmentAnswerSaveButton input').live( 'click', function() {
    $('#framework').click();
    $(this).hide();
    $('#rightColumnViews .view').hide();
    $('#rightColumnViews .view2').show();
  });

  $('.startWritingButton input').live('click', function() {
    $(this).parent().hide();
    $('.procedureInputArea').show();
  });

  $('.saveProcedure').live('click', function() {
    $('.mid-segment').hide();
    $('.procedureNotes').show();
    $('#rightColumnViews .view').hide();
    $('#rightColumnViews .view3').show();
  });


  $('#keyConceptsDropdown').live('change', function() {
    $('.keyConceptAnswers').show();
  });

  $('#coreStandardsDropdown').live('change', function() {
    $('.commonCoreStandard').show();
    $('.assessmentQuestions').show();
    $('.analyzeBlock').show();
  });

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

