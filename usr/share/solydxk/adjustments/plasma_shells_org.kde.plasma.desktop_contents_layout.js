loadTemplate("org.kde.plasma.desktop.defaultPanel")

for (var i = 0; i < screenCount; ++i) {
    //var id = createActivity("Desktop");
    var id = createActivity("Desktop", "org.kde.plasma.folder");
    var desktopsArray = desktopsForActivity(id);
    print(desktopsArray.length);
    for( var j = 0; j < desktopsArray.length; j++) {
        desktopsArray[j].currentConfigGroup = ["Wallpaper","General"];
        desktopsArray[j].writeConfig("Color", "142,182,201");
        desktopsArray[j].wallpaperPlugin = 'org.kde.image';
        desktopsArray[j].currentConfigGroup = ["Wallpaper","org.kde.image","General"];
        desktopsArray[j].writeConfig("FillMode", 2);
        desktopsArray[j].writeConfig("Color", "142,182,201");
        //desktopsArray[j].addWidget("org.kde.plasma.folder");
    }
}
