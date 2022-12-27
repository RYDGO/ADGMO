document.addEventListener("DOMContentLoaded", function () {
	var calendarEl = document.getElementById("calendar");

	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: "timeGridDay",
		initialDate: new Date(),
		headerToolbar: {
			left: "prev,title,next ",
			center: 'renderCenter',
			right: "timeGridDay,timeGridWeek,dayGridMonth",
		},
		nowIndicator: true,
		navLinks: true, // can click day/week names to navigate views
		businessHours: false, // display business hours
		editable: true,
		selectable: true,
		select: function (arg) {
			document.getElementById("eventtarget").classList.add("show");
			document.getElementById("eventtarget").style.display = "block";
			document.getElementById("cancelAddEvent").addEventListener("click", () => {
				document.getElementById("eventtarget").classList.remove("show");
				document.getElementById("eventtarget").style.display = "none";
			})
			calendar.unselect();
		},
		eventClick: function (arg) {
			console.log(arg);
			document.getElementById("scheduledetilesmodal").classList.add("show");
			document.getElementById("scheduledetilesmodal").style.display = "block";
			document.getElementById("scheduledetilesmodal").addEventListener("click", () => {
				document.getElementById("scheduledetilesmodal").classList.remove("show");
				document.getElementById("scheduledetilesmodal").style.display = "none";
			})
		},
		events: [
			{
				title: "All Day Event",
				start: "2022-12-25",
				name: "PIN",
				number: 10,
				subTitle: "Social Media",
				etime: "9:30",
				bgDay: "tb-bg-green",
				bgCard: "status-color-green-light-op",
				txtColor: "tb-green"
			}, {
				title: "Non NGO Event",
				start: "2022-12-27",
				name: "GO",
				number: 10,
				subTitle: "Social Media",
				etime: "9:30",
				bgDay: "tb-bg-purple",
				bgCard: "status-color-purpal-op2",
				txtColor: "tb-purple"
			}
		]
	});
	setTimeout(() => {
		var calendarheader = document.querySelector(".fc-header-toolbar");
		var child = document.getElementById("statusBar");
		child.style.display = "block"
		calendarheader.appendChild(child);

	}, 100);
	calendar.render();
	setTimeout(() => {
		calendar.changeView("dayGridMonth");
	}, 2000);
});