<template>
  <v-container fill-height class="white">
    <v-row class="fill-height" align="start" justify="center">
      <v-card
        tile
        flat
        class="text-center px-5"
      >
        <v-container>
          <v-img
            :src="logo"
            max-height="70"
            contain
            class="mb-3"
          />
          <v-form ref="login_form">
            <v-text-field
              v-model="user.account"
              label="账号"
              required
              outlined
              dense
              :rules="rules.account"
            />
            <v-text-field
              v-model="user.password"
              label="密码"
              required
              outlined
              dense
              :rules="rules.password"
            />
            <div style="margin-bottom: 10px;" class="grey--text subtitle-2">
              新用户登陆将自动注册，表示已同意<span class="blue--text">《用户服务协议》</span>
            </div>
            <div>
              <v-btn @click="submit" class="green accent-4 white--text" width="300" depressed>
                登陆
              </v-btn>
            </div>
          </v-form>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "LoginPage",
    methods: {
      submit() {
        if (this.$refs['login_form'].validate()) {
          window.sessionStorage.setItem('login', 'yes');
          this.$router.replace('/home/main');
        }
      }
    },
    data() {
      return {
        user: {
          account: '',
          password: ''
        },
        rules: {
          password: [v => (v.length >= 3) || '密码不得少于三位！'],
          account: [v => (v.length >= 4) || '用户名至少大于四位！']
        },
        logo: require('../../assets/images/elm_logo.jpg'),
      }
    }
  }
</script>

<style scoped>

</style>
