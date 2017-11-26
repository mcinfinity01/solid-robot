gdjs.MainMenuCode = {};


gdjs.MainMenuCode.GDtextObjects1= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};

gdjs.MainMenuCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.MainMenuCode.GDtextObjects1.length = 0;


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}

return;
}
gdjs['MainMenuCode']= gdjs.MainMenuCode;
