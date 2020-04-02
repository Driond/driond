<template lang="html">
  <button type="button" name="button">{{ buttonText }}</button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    buttonText: String
  }
}
</script>

<style lang="css">
  button {
    background-color: green;
    color: white;
    border: none;
    min-height: 3em;
    min-width: 5em;
    border-radius: .3em;
    margin: 0.2em;
  }
</style>