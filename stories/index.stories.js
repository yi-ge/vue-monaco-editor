/* eslint-disable */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import vueMonacoEditor from '../index'

const code = `
function foo() {
  return 'foo'
}
`.trim()

const markdownCode = `
<template>
  <div id="app">hello</div>
</template>
<script>
export default {
  data() {
    return {
      foo: 'foo'
    }
  }
}
</script>
`

storiesOf('NodeComponent', module)
.add('recycler-node', () => ({
  components: { vueMonacoEditor },
  render (h) {
    return (
      <div>
        <button onClick={this.updateCode}>update</button>
        <vueMonacoEditor
          class="editor"
          style="height: 100%;"
          value={this.code}
          language={this.language}
          theme={this.theme}
          options={this.options}
          onChange={newValue => this.code = newValue}
          placeholder={<div>hello</div>}
        />
      </div>
    )
  },
  data () {
    return {
      code,
      language: 'javascript',
      theme: 'vs',
      options: {
        lineNumbers: true
      }
    }
  },
  methods: {
    updateCode (e) {
      action('点击按钮')(e)
      this.language = 'html'
      this.code = markdownCode
      this.options.tabSize = 8
      this.options.lineNumbers = false
      this.theme = 'vs-dark'
    }
  }
}))

/* eslint-enable react/react-in-jsx-scope */
