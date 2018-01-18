<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Log In / Sign In</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-container fluid>
                  <v-layout column align-center justify-between>
                    <v-flex>
                      <v-btn><google-icon/> Google</v-btn>
                    </v-flex>
                    <v-flex>
                      <v-btn><twitter-icon/> Twitter</v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import GoogleIcon from 'vue-material-design-icons/google'
import TwitterIcon from 'vue-material-design-icons/twitter'
export default {
  name: 'Login',
  data: () => ({
    providers: [
      {
        name: 'Google',
        icon: 'google'
      }
    ]
  }),
  props: {
    source: String
  },
  components: {
    GoogleIcon,
    TwitterIcon
  }
}
</script>
