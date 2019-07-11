'use strict'
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { 'default': mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
var chai_1 = require('chai')
var test_utils_1 = require('@vue/test-utils')
var HelloWorld_vue_1 = __importDefault(require('@/components/HelloWorld.vue'))
describe('HelloWorld.vue', function () {
  it('renders props.msg when passed', function () {
    var msg = 'new message'
    var wrapper = test_utils_1.shallowMount(HelloWorld_vue_1.default, {
      propsData: { msg: msg }
    })
    chai_1.expect(wrapper.text()).to.include(msg)
  })
})
// # sourceMappingURL=example.spec.js.map
