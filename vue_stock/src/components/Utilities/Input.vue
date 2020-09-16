<template>
  <input type="number" class="form-control" placeholder="Quantity" min="0" 
    :class="{'is-invalid': insufficient}"
    @input="input" :value="value" @keydown="onlyInteger">
</template>

<script>
export default {
  props: ['value', 'insufficient'],
  methods: {
    onlyInteger(e) {
      if (e.keyCode < 48 || e.keyCode > 57) {
        if (e.keyCode != 8) {
          e.preventDefault();
        }
      }
    },
    input(e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>

