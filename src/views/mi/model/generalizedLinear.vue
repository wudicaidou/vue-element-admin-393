<template>
  <model-detail :is-edit="false"/>
</template>

<script>
import ModelDetail from './components/ModelDetail'

export default {
  name: 'CreateModel',
  components: { ModelDetail }
}
</script>

