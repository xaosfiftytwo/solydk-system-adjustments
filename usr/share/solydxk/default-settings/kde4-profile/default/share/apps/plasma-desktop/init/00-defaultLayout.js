// Placed in /usr/share/solydxk/default-settings/kde4-profile/default/share/apps/plasma-desktop/init/
// This script is run for new users, which do not have a .kde directory
// and it set's the default wallpaper for all activities

// Wallpaper theme: sub directory of /usr/share/wallpapers/
var wallpaper = "solydk-flat"
var launchericon = "solydk-flat"
var dolphindesktop = "/usr/share/applications/kde4/dolphin.desktop"
var backgroundrgb = "142,182,201"

for (var i = 0; i < screenCount; ++i) {
  //desktop = new Activity
  var desktop = new Activity("folderview")
  desktop.name = i18n("Desktop")
  desktop.screen = i
  desktop.wallpaperPlugin = 'image'
  desktop.wallpaperMode = 'SingleImage'
  desktop.currentConfigGroup = Array('Wallpaper', 'image')
  desktop.writeConfig('wallpaper', wallpaper)
  desktop.writeConfig("userswallpaper", wallpaper)
  desktop.writeConfig('wallpaperposition', '2')          //2 enables croping
  desktop.writeConfig('wallpapercolor', backgroundrgb)
  desktop.currentConfigGroup = Array('Wallpaper', 'color')
  desktop.writeConfig('color1', backgroundrgb)
  desktop.currentConfigGroup = new Array('ToolBox')
  desktop.writeConfig('corner', '1')
  desktop.writeConfig('offset', '0')
  
  // Add desktop folderview if no folderviews exist
  //var folderview
  //if (desktop.widgets("folderview").length == 0) {
  //  folderview = desktop.addWidget("folderview")
  //} else {
  //  folderview = desktop.widgets("folderview")
  //}
  //folderview.writeConfig("url", "desktop:/")
  //folderview.height = 200
  //folderview.width = 300
  //folderview.x = screenGeometry(0).width / 2

  panel = new Panel
  panel.screen = i
  panel.location = 'bottom'
  //panel.height = panels()[i].height = screenGeometry(0).height > 1024 ? 35 : 27
  panel.height = 36

  // Add SolydXK widgets
  launcher = panel.addWidget("launcher")
  launcher.globalShortcut = "F13"
  launcher.writeConfig("icon", launchericon)

  panel.addWidget("showdesktop")
        
  var widget = panel.addWidget("icon")
  widget.writeConfig("Url", dolphindesktop)
        
  var tasks = panel.addWidget("tasks")
  tasks.writeConfig("showOnlyCurrentScreen", true);

  var systray = panel.addWidget("systemtray")
  j = 0;
  if (hasBattery) {
    systray.currentConfigGroup = new Array("Applets", ++j)
    systray.writeConfig("plugin", "battery")
  }
  systray.currentConfigGroup = new Array("Applets", ++j)
  systray.writeConfig("plugin", "message-indicator")
  systray.currentConfigGroup = new Array("Applets", ++j)
  systray.writeConfig("plugin", "org.kde.networkmanagement")
  systray.currentConfigGroup = new Array("Applets", ++j)
  systray.writeConfig("plugin", "notifier")

  var clock = panel.addWidget("digital-clock")
  clock.writeConfig("showDate", "false")
  
}
