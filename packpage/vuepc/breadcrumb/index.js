import ElBreadcrumb from './breadcrumb';
import ElBreadcrumbItem from './breadcrumb-item';


/* istanbul ignore next */
ElBreadcrumb.install = function (Vue) {
  Vue.component(ElBreadcrumb.name, ElBreadcrumb);
  Vue.component(ElBreadcrumbItem.name, ElBreadcrumbItem);

};

export default ElBreadcrumb;
