x=683
y=180
pressedOptions={type:"mousePressed",x,y,button:"left",clickCount:1}
releasedOptions={type:"mouseReleased",x,y,button:"left",clickCount:1}
//chrome.tabs.query({active:true},tabs=>{
	
//})
chrome.browserAction.onClicked.addListener(handleClick)
function handleClick(tab){
		console.log("Logging tab",tab)
		chrome.debugger.attach({tabId:tab.id},"1.0",clickButton.bind(null,tab.id))
}
function clickButton(tabId){
	console.log("Logging tabId",tabId)
	chrome.debugger.sendCommand({tabId},"Input.dispatchMouseEvent",
	pressedOptions
	,e=>chrome.debugger.sendCommand({tabId},"Input.dispatchMouseEvent",releasedOptions,e=>console.log("Clicked",e)))
}