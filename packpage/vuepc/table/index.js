import ElTable from './table';
import TableColumn from './table-column';
/* istanbul ignore next */
ElTable.install = function(Vue) {
  Vue.component(ElTable.name, ElTable);
  Vue.component(TableColumn.name, TableColumn);
};

export default ElTable;
