<template lang="html">
  <button type="button" name="button">{{ buttonText }}</button>
</template>

<script>
export default {
  name: 'OtherButtonComponent',
  props: {
    buttonText: String
  }
}
</script>

<style lang="css" scoped>
  button {
    background-color: red;
    color: white;
  }
</style>

<template lang="html">

    <button-component buttonText="Example button"></button-component>
    <other-button-component buttonText="Other button"></other-button-component>