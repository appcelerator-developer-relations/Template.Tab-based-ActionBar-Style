function doClick(e) {
    $.index.activeTab.open(Alloy.createController('childwindow').getView());
}

$.index.open();
