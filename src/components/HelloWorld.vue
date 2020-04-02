<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <section>
      Separate components
      
        <button-component buttonText="Example button"></button-component>
        <other-button-component buttonText="Other button"></other-button-component>
      
    </section>
  </div>
</template>

<script>
import ButtonComponent from '../components/ButtonComponent';
import OtherButtonComponent from '../components/OtherButtonComponent';

export default {
  name: 'HelloWorld',
  components: {
    ButtonComponent,
    OtherButtonComponent
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
section p{
  text-align: center;
}
</style>
