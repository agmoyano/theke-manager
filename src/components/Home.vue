<template>
  <v-app dark>
      <v-navigation-drawer
        fixed
        v-model="drawer"
        :mini-variant="true"
        :clipped="true"
        app
        dark
      >
        <v-list>
          <v-list-tile
            value="true"
            v-for="(item, i) in items"
            :key="i"
            exact
          >
            <v-list-tile-action>
              <v-btn icon v-scroll-to="'#'+item.icon">
                <v-icon v-html="item.icon"></v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile value="true">
            <v-list-tile-action>
              <v-menu
                offset-x
                :nudge-width="200"
                v-model="menu"
                fixed
                right
              >
                <v-btn icon slot="activator">
                  <v-icon>account_circle</v-icon>
                </v-btn>
                <v-card>
                  <v-card-title>
                    <span class="headline">Sign In / Log In</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout row wrap>
                        <v-flex xs6 v-for="idp in providers" :key="idp.name">
                          <v-card height="100" tile flat hover :class="idp.color+' white--text'">
                            <v-container align-center justify-center fluid fill-height>
                              <span class="subheading">{{idp.name}}</span>
                            </v-container>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-menu>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <!--v-toolbar dark app fixed :clipped-left="clipped" color="primary">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat small @click="login()">log in / sign in</v-btn>
      </v-toolbar-->
      <v-content>
        <v-btn fab color="black" dark small fixed top right @click="lang=lang=='es'?'en':'es'">
          {{lang}}
        </v-btn>
        <v-container fluid fill-height align-center justify-center py-0 px-0>
          <v-slide-y-transition mode="out-in">
            <v-layout column align-center justify-center>
              <v-flex :id="item.icon" :key="item.icon" v-for="(item,index) in items" :class="index % 2 == 0 ? 'bg1':'bg2'" align-center justify-center>
                <v-layout column align-center justify-center>
                <div class="display-2" style="padding: 3vh"><v-icon class="display-2" v-html="item.icon"></v-icon> {{item.title}}</div>
                <div v-html="item.text"></div>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-slide-y-transition>
        </v-container>
      </v-content>
      <!--v-footer :fixed="fixed" app>
        <span></span>
      </v-footer-->
    </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      lang: 'es',
      menu: false,
      providers: [
        {
          name: 'Google',
          color: 'red darken-1'
        },
        {
          name: 'Facebook',
          color: 'blue darken-4'
        },
        {
          name: 'Twitter',
          color: 'light-blue darken-1'
        },
        {
          name: 'Outlook',
          color: 'blue darken-2'
        }

      ],
      items: [
        {
          icon: 'help',
          title: '¿Que es Theke Manager?',
          text: `
          <p>Algo maravilloso sobre Theke Manager</p>
          `
        },
        {
          icon: 'flight_takeoff',
          title: 'Ventajas de usar Manager',
          text: `
          <p>Algo maravilloso sobre usar Manager</p>
          `
        },
        {
          icon: 'monetization_on',
          title: 'Precios',
          text: `
          <p>Oh, que precios mas bajos para la maravilla de software.. me anoto por $1.000.000</p>
          `
        },
        {
          icon: 'payment',
          title: 'Formas de Pago',
          text: `
          <p>Money, it's a gas<br/>
Grab that cash with both hands and make a stash</p>
          `
        },
        {
          icon: 'send',
          title: 'Contacto',
          text: `
          <p>hablar con hola@theke.io</p>
          `
        }
      ],
      miniVariant: false,
      title: 'Theke Manager'
    }
  },
  methods: {
    login () {
      this.$router.push('Login')
    }
  }
}
</script>

<style>
  .bg1 {
    background-image: url(../../static/material2.jpg);
    background-size: cover;
  }

  .bg2 {
    background-image: url(../../static/bg.jpg);
    background-size: cover;
  }

  .bg1, .bg2 {
    height: 100vh;
    width: 100vw;
  }
</style>
