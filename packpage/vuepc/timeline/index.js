import Timeline from './main';
import TimelineItem from './item';

/* istanbul ignore next */
Timeline.install = function(Vue) {
  Vue.component(Timeline.name, Timeline);
  Vue.component(TimelineItem.name, TimelineItem);

};

export default Timeline;
