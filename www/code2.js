gdjs.GameOverCode = {};


gdjs.GameOverCode.GDgameoverObjects1= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};

gdjs.GameOverCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.GameOverCode.GDgameoverObjects1.length = 0;


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}

return;
}
gdjs['GameOverCode']= gdjs.GameOverCode;
