function TriggerJS(){this.init();for(var t=document.querySelectorAll('[data-event="click"]'),e=0;e<t.length;e++)t[e].addEventListener(CLICK_EVENT,this.handleToggleEvent),t[e].defaultClass=t[e].getAttribute(DATA_CLASS),t[e].toggleClass=t[e].getAttribute(DATA_TOGGLE),t[e].targetElem=t[e].getAttribute(DATA_TARGET),t[e].targetDefaultClass=t[e].getAttribute(DATA_TARGET_CLASS),t[e].targetToggleClass=t[e].getAttribute(DATA_TARGET_TOGGLE)}const CLICK_EVENT="click",DATA_CLASS="data-class",DATA_TOGGLE="data-toggle",DATA_TARGET="data-target",DATA_TARGET_CLASS="data-target-class",DATA_TARGET_TOGGLE="data-target-toggle";TriggerJS.prototype={init:function(){var t=document.body;t&&t.classList.contains("no-js")&&t.classList.remove("no-js")},handleToggleEvent:function(t){if(t.target.classList.toggle(t.target.defaultClass),t.target.classList.toggle(t.target.toggleClass),t.target.targetElem){t.target.targetDefaultClass&&t.target.targetToggleClass||console.error("Toggle of target class failed! Parameter missing.");var e=document.getElementById(t.target.targetElem);e&&(e.classList.toggle(t.target.targetDefaultClass),e.classList.toggle(t.target.targetToggleClass))}}},new TriggerJS;