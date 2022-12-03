document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "timeGridDay",
      initialDate: "2022-08-07",
      headerToolbar: {
        left: "prev,title,next ",
        center: 'renderCenter',
        right: "timeGridDay,timeGridWeek,dayGridMonth",
      },
      height: 650,
      nowIndicator: true,
      navLinks: true, // can click day/week names to navigate views
      businessHours: false, // display business hours
      editable: true,
      selectable: true,
      select: function (arg) {
        document.getElementById("eventtarget").classList.add("show");
        document.getElementById("eventtarget").style.display = "block";
        document.getElementById("cancelAddEvent").addEventListener("click", ()=>{
          document.getElementById("eventtarget").classList.remove("show");
          document.getElementById("eventtarget").style.display = "none";
        })
        calendar.unselect();
      },
      eventClick: function(arg) {
        console.log(arg);
        document.getElementById("scheduledetilesmodal").classList.add("show");
        document.getElementById("scheduledetilesmodal").style.display = "block";
        document.getElementById("scheduledetilesmodal").addEventListener("click", ()=>{
          document.getElementById("scheduledetilesmodal").classList.remove("show");
          document.getElementById("scheduledetilesmodal").style.display = "none";
        })
      },
      events: [
        {
          title: "All Day Event",
          start: "2022-08-01"
        },
        {
          title: "Long Event",
          start: "2022-08-07",
          end: "2022-08-10"
        },
        {
          groupId: "999",
          title: "Repeating Event",
          start: "2022-08-09T16:00:00"
        },
        {
          groupId: "999",
          title: "Repeating Event",
          start: "2022-08-16T16:00:00"
        },
        {
          title: "Conference",
          start: "2022-08-11",
          end: "2022-08-13"
        },
        {
          title: "Meeting",
          start: "2022-08-12T10:30:00",
          end: "2022-08-12T12:30:00"
        },
        {
          title: "Lunch",
          start: "2022-08-12T12:00:00"
        },
        {
          title: "Meeting",
          start: "2022-08-12T14:30:00"
        },
        {
          title: "Birthday Party",
          start: "2022-08-13T07:00:00"
        },
        {
          title: "Click for Google",
          url: "http://google.com/",
          start: "2022-08-28"
        }
      ]
    });
    setTimeout(() => {
      var calendarheader = document.querySelector(".fc-header-toolbar");
      var child = document.getElementById("statusBar");
      child.style.display="block"
      calendarheader.appendChild(child);
      
    }, 100);
    calendar.render();
    setTimeout(() => {
      calendar.changeView("dayGridMonth");
    }, 2000);
  });