var applaunchericon = "solydk-flat"

var filemanagericon = "file-manager"
var filemanagername = "dolphin"
var filemanagerdesc = "File Manager"
var filemanagerurl = "/usr/share/applications/org.kde.dolphin.desktop"

var panel = new Panel
panel.location = "bottom"
panel.height = 36

var applauncher = panel.addWidget("org.kde.plasma.kickoff")
applauncher.writeConfig("icon", applaunchericon)
applauncher.currentConfigGroup = ["Shortcuts"]
applauncher.writeConfig("global", "Alt+F1")

panel.addWidget("org.kde.plasma.showdesktop")

var fmlauncher = panel.addWidget("org.kde.plasma.icon")
fmlauncher.writeConfig("iconName", filemanagericon)
fmlauncher.writeConfig("applicationName", filemanagername)
fmlauncher.writeConfig("genericName", filemanagerdesc)
fmlauncher.writeConfig("url", filemanagerurl)

panel.addWidget("org.kde.plasma.pager")
panel.addWidget("org.kde.plasma.taskmanager")
panel.addWidget("org.kde.plasma.systemtray")
panel.addWidget("org.kde.plasma.digitalclock")
