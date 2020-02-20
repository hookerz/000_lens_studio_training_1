// -----JS CODE-----
// @input Component.ScriptComponent SegmentationFX
var faceIndex = 0;
var startEvent = script.createEvent("TouchStartEvent");
startEvent.faceIndex = faceIndex;
startEvent.bind(function (eventData)
{
    script.SegmentationFX.api.animate(true);
});

var finishEvent = script.createEvent("TouchEndEvent");
finishEvent.faceIndex = faceIndex;
finishEvent.bind(function (eventData)
{
    script.SegmentationFX.api.animate(false);
});
