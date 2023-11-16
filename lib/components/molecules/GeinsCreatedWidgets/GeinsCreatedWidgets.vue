<template>
  <component :is="widgetComponent" :configuration="widgetConfiguration" />
</template>
<script>
/* 
  Container component for widgets that are created via the Create your own widget in Geins CMS.
*/
export default {
  name: 'GeinsCreatedWidgets',
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
    widgetComponent() {
      return this.jsonConfiguration.component || this.jsonConfiguration.renderWidget || 'CaWidgetJson';
    },
    // Get the widget data from the configuration object
    widgetConfiguration() {
      return this.jsonConfiguration.configuration || this.jsonConfiguration.data || {};
    },
    // The configuration object
    jsonConfiguration() {
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
