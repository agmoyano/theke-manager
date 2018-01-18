<template>
  <v-app>
    <v-navigation-drawer
        fixed
        v-model="drawer"
        :clipped="true"
        app
        dark
      >
      <v-list>
        <v-list-tile
          v-for="(option, i) in options"
          :key="i"
          exact
          color="white"
          :to="option.to"
        >
          <v-list-tile-action>
            <v-icon v-html="option.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{option.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark app fixed clipped-left color="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom offset-y>
        <div slot="activator" class="mr-4"><v-icon>account_circle</v-icon> <span>Nombre Apellido</span></div>
        <v-list>
          <v-list-tile to="/">
            <v-list-tile-action>
              <v-icon>power_settings_new</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              Salir
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          icon: 'timeline',
          name: 'Estado de Cuenta',
          to: {name: 'State'}
        },
        {
          icon: 'payment',
          name: 'Configurar Pago',
          to: {name: 'Payment'}
        },
        {
          icon: 'history',
          name: 'Historial de Pagos',
          to: 'history'
        }
      ],
      drawer: true,
      title: 'Theke Manager',
      to: ''
    }
  }
}
</script>

<style>

</style>
