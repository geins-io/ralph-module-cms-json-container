<template>
  <component :is="widgetType" v-if="widgetType" :configuration="widgetData" />
</template>
<script>
/* 
  Container component for widgets that are configured via JSON widget in Geins CMS.
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
    // Get the widget data from the configuration object
    widgetData() {
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
  mounted() {},
  methods: {}
};
</script>
