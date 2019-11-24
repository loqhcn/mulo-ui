import Tree from './tree.vue';
import TreeNode from './tree-node.vue';
/* istanbul ignore next */
Tree.install = function (Vue) {
  Vue.component(Tree.name, Tree);
  Vue.component(TreeNode.name, TreeNode);

};

export default Tree;
