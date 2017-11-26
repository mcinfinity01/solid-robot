gdjs.gameCode = {};


gdjs.gameCode.GDplaneObjects1= [];
gdjs.gameCode.GDbarrierObjects1= [];
gdjs.gameCode.GDobstacleObjects1= [];
gdjs.gameCode.GDpointObjects1= [];
gdjs.gameCode.GDobs_95removerObjects1= [];

gdjs.gameCode.conditionTrue_0 = {val:false};
gdjs.gameCode.condition0IsTrue_0 = {val:false};
gdjs.gameCode.condition1IsTrue_0 = {val:false};
gdjs.gameCode.condition2IsTrue_0 = {val:false};
gdjs.gameCode.conditionTrue_1 = {val:false};
gdjs.gameCode.condition0IsTrue_1 = {val:false};
gdjs.gameCode.condition1IsTrue_1 = {val:false};
gdjs.gameCode.condition2IsTrue_1 = {val:false};

gdjs.gameCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.gameCode.GDplaneObjects1.length = 0;
gdjs.gameCode.GDbarrierObjects1.length = 0;
gdjs.gameCode.GDobstacleObjects1.length = 0;
gdjs.gameCode.GDpointObjects1.length = 0;
gdjs.gameCode.GDobs_95removerObjects1.length = 0;


{


gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition1IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = context.triggerOnce(85753564);
}
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "time");
}}

}


{

gdjs.gameCode.GDobstacleObjects1.createFrom(runtimeScene.getObjects("obstacle"));
gdjs.gameCode.GDplaneObjects1.createFrom(runtimeScene.getObjects("plane"));
gdjs.gameCode.GDpointObjects1.createFrom(runtimeScene.getObjects("point"));

{for(var i = 0, len = gdjs.gameCode.GDobstacleObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDobstacleObjects1[i].addForce(-80, 0, 0);
}
}{for(var i = 0, len = gdjs.gameCode.GDpointObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDpointObjects1[i].addForce(-80, 0, 0);
}
}{for(var i = 0, len = gdjs.gameCode.GDplaneObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplaneObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{}
}


{

gdjs.gameCode.GDobstacleObjects1.length = 0;
gdjs.gameCode.GDpointObjects1.length = 0;

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.7, "time");
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "time");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("obstacle", gdjs.gameCode.GDobstacleObjects1).getEventsObjectsMap(), 301, gdjs.random(300)-300, "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("point", gdjs.gameCode.GDpointObjects1).getEventsObjectsMap(), 365, 0, "");
}}

}


{

gdjs.gameCode.GDobs_95removerObjects1.createFrom(runtimeScene.getObjects("obs_remover"));
gdjs.gameCode.GDobstacleObjects1.createFrom(runtimeScene.getObjects("obstacle"));

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("obstacle", gdjs.gameCode.GDobstacleObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("obs_remover", gdjs.gameCode.GDobs_95removerObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.gameCode.GDobstacleObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDobstacleObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.gameCode.GDplaneObjects1.createFrom(runtimeScene.getObjects("plane"));
gdjs.gameCode.GDpointObjects1.createFrom(runtimeScene.getObjects("point"));

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("plane", gdjs.gameCode.GDplaneObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("point", gdjs.gameCode.GDpointObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.gameCode.GDpointObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDpointObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))+1);
}}

}


{

gdjs.gameCode.GDbarrierObjects1.createFrom(runtimeScene.getObjects("barrier"));
gdjs.gameCode.GDplaneObjects1.createFrom(runtimeScene.getObjects("plane"));

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("plane", gdjs.gameCode.GDplaneObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("barrier", gdjs.gameCode.GDbarrierObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


{

gdjs.gameCode.GDobstacleObjects1.createFrom(runtimeScene.getObjects("obstacle"));
gdjs.gameCode.GDplaneObjects1.createFrom(runtimeScene.getObjects("plane"));

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("plane", gdjs.gameCode.GDplaneObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("obstacle", gdjs.gameCode.GDobstacleObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


{

gdjs.gameCode.GDplaneObjects1.createFrom(runtimeScene.getObjects("plane"));

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.gameCode.GDplaneObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplaneObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}

return;
}
gdjs['gameCode']= gdjs.gameCode;
