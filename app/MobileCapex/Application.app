{
	"_Name": "MobileCapex",
	"Version": "/MobileCapex/Globals/Application/AppDefinition_Version.global",
	"MainPage": "/MobileCapex/Pages/Capex/Capex_List.page",
	"OnLaunch": [
		"/MobileCapex/Actions/Service/InitializeOnline.action"
	],
	"OnWillUpdate": "/MobileCapex/Rules/Application/OnWillUpdate.js",
	"OnDidUpdate": "/MobileCapex/Actions/Service/InitializeOnline.action",
	"Styles": "/MobileCapex/Styles/Styles.less",
	"Localization": "/MobileCapex/i18n/i18n.properties",
	"_SchemaVersion": "23.12"
}