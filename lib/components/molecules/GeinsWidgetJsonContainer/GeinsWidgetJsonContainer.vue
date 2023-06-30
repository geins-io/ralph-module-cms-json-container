<template>
  <component :is="widgetType" v-if="widgetType" :configuration="widgetData" />
</template>
<script>
/* 
  (Description of component) 
*/
export default {
  name: 'GeinsWidgetJsonContainer',
  components: {},
  mixins: [],
  props: {
    // Widget configuration object
    configuration: {
      type: Object,
      required: true
    }
  },
  data: () => ({}),
  computed: {
    // Get the widget type from the configuration object
    widgetType() {
      if (this.confObject) {
        return this.confObject.renderWidget;
      }
      return '';
    },
    widgetData() {
      /*if (this.widgetType === 'CaWidgetStreamify'|| this.widgetType === 'GeinsWidgetStreamify') {
        return this.confObject.data;
      }*/
      return this.confObject.data ?? {};
    },
    confObject() {
      if (this.configuration?.json) {
        return JSON.parse(this.configuration?.json);
      }
      return {};
    }
  },
  watch: {},
  mounted() {
    console.log('GeinsWidgetJsonContainer mounted');
  },
  methods: {}
};
</script>
