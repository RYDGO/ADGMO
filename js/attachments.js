function showMarkerArea(target) {
  const markerArea = new markerjs2.MarkerArea(target);
  console.log(markerArea);
  markerArea.settings.displayMode = 'popup';
  markerArea.addEventListener("render", (event) => (target.src = event.dataUrl));
  markerArea.uiStyleSettings.toolbarStyleColorsClassName = "bg-white pt-4 pb-5 tb-rounded-top-lr-12 header";
  markerArea.uiStyleSettings.toolbarButtonStyleColorsClassName =
    "btn tb-btn-gray  w-h-40 rounded-circle mx-2";
  markerArea.uiStyleSettings.toolbarActiveButtonStyleColorsClassName =
    "btn  w-h-40 rounded-circle mx-2 tb-btn-gray text-white";
  markerArea.uiStyleSettings.toolbarOverflowBlockStyleColorsClassName =
    "";

  markerArea.uiStyleSettings.toolboxColor = "bg-white ";
  markerArea.uiStyleSettings.toolboxAccentColor = "text-base-white";
  markerArea.uiStyleSettings.toolboxStyleColorsClassName = "bg-white pb-3 tb-rounded-bottom-lr-12 justify-content-end flex-row-reverse insertingBtn";
  markerArea.uiStyleSettings.toolboxButtonRowStyleColorsClassName =
    "bg-white ";
  markerArea.uiStyleSettings.toolboxPanelRowStyleColorsClassName =
    "bg-white";
  markerArea.uiStyleSettings.toolboxButtonStyleColorsClassName =
    "btn tb-btn-gray  w-h-40 rounded-circle mx-2";
  markerArea.uiStyleSettings.toolboxActiveButtonStyleColorsClassName =
    "btn  w-h-40 rounded-circle mx-2 gray-300 text-white";
  markerArea.show();
}

function saveState() {

  $('#okEditButton').click();
}
